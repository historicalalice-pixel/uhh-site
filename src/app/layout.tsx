
import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

function Container({children}:{children:ReactNode}){return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>}
function Button({href,children}:{href?:string,children:ReactNode}){const C:any=href?Link:"button";return <C href={href as any} className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:-translate-y-0.5 transition">{children}</C>}
function Ghost({href,children}:{href?:string,children:ReactNode}){const C:any=href?Link:"button";return <C href={href as any} className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-yellow-50 transition">{children}</C>}

export const metadata={ title:"Ukrainian History Hub", description:"Онлайн‑платформа з історії України: відео, тести, PDF, сертифікат." };

function Nav(){
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-primary)]">UH</div>
            <span className="font-bold">Ukrainian History Hub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2 text-sm">
            <Link href="/about" className="px-3 py-2 rounded-xl hover:bg-gray-100">Про авторку</Link>
            <Link href="/program" className="px-3 py-2 rounded-xl hover:bg-gray-100">Програма</Link>
            <Link href="/pricing" className="px-3 py-2 rounded-xl hover:bg-gray-100">Оплата/FAQ</Link>
            <Link href="/blog" className="px-3 py-2 rounded-xl hover:bg-gray-100">Блог</Link>
            <Link href="/dashboard" className="px-3 py-2 rounded-xl hover:bg-gray-100">Кабінет</Link>
          </nav>
          <div className="hidden md:flex gap-2">
            <Ghost href="/login">Увійти</Ghost>
            <Button href="/register">Зареєструватись</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Footer(){
  return (
    <footer className="mt-20 border-t py-10 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-semibold">Про нас</p>
            <p className="mt-2 text-gray-600">Відеоуроки, тести, PDF‑конспекти та сертифікат.</p>
          </div>
          <div>
            <p className="font-semibold">Навігація</p>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="/program" className="hover:underline">Програма</Link>
              <Link href="/pricing" className="hover:underline">Оплата/FAQ</Link>
              <Link href="/blog" className="hover:underline">Блог</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold">Контакти</p>
            <p className="mt-2 text-gray-600">hello@uhh.example · Telegram: @uhh_school</p>
            <p className="mt-4 text-gray-500">© 2025 Ukrainian History Hub</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function RootLayout({children}:{children:ReactNode}){
  return (
    <html lang="uk"><body className="min-h-screen flex flex-col bg-white">
      <Nav/>
      <main className="flex-1">{children}</main>
      <Footer/>
    </body></html>
  );
}
