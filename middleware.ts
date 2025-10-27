import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED = [/^\/admin/, /^\/api\/admin/];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // тільки для /admin та /api/admin/*
  const needAuth = PROTECTED.some((re) => re.test(pathname));
  if (!needAuth) return NextResponse.next();

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="UHH Admin"' },
    });
  }

  const decoded = Buffer.from(auth.split(" ")[1], "base64").toString();
  const [u, p] = decoded.split(":");
  if (u === process.env.ADMIN_USER && p === process.env.ADMIN_PASS) {
    return NextResponse.next();
  }
  return new NextResponse("Forbidden", { status: 403 });
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
