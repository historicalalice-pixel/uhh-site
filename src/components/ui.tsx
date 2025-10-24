
import Link from "next/link";
export function Container({children}:{children:any}){return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>}
export function Card({children}:{children:any}){return <div className="rounded-3xl border p-6 bg-white hover:shadow-sm transition">{children}</div>}
export function Button({href,children}:{href?:string,children:any}){const C:any=href?Link:"button";return <C href={href as any} className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-[var(--color-accent)] text-[var(--color-primary)]">{children}</C>}
export function Ghost({href,children}:{href?:string,children:any}){const C:any=href?Link:"button";return <C href={href as any} className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold border border-[var(--color-accent)] text-[var(--color-accent)]">{children}</C>}
export function Badge({children}:{children:any}){return <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-gray-100">{children}</span>}
