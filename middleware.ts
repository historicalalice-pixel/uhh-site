import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED = [/^\/admin/, /^\/api\/admin/];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // пропускаємо все, окрім /admin та /api/admin/*
  const needAuth = PROTECTED.some((re) => re.test(pathname));
  if (!needAuth) return NextResponse.next();

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) {
    return new Response("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="UHH Admin"' },
    });
  }

  // Edge runtime: використовуємо atob замість Buffer
  const decoded = atob(auth.split(" ")[1]);
  const [user, pass] = decoded.split(":");

  if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
    return NextResponse.next();
  }

  return new Response("Forbidden", { status: 403 });
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
