
"use client";
import { Container } from "@/components/ui";import { useState } from "react";import { setUser } from "@/lib/auth";import { useRouter } from "next/navigation";
export default function Page(){
  const [email,setEmail]=useState(""); const [pwd,setPwd]=useState(""); const r=useRouter();
  function onSubmit(e:any){e.preventDefault(); setUser(email); r.push("/dashboard");}
  return (<section className="py-16"><Container>
    <div className="max-w-md mx-auto rounded-3xl border p-6 bg-white">
      <h1 className="text-2xl font-extrabold">Реєстрація</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <div><label className="text-sm">Email</label><input className="mt-1 w-full rounded-xl border px-3 py-2" type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></div>
        <div><label className="text-sm">Пароль</label><input className="mt-1 w-full rounded-xl border px-3 py-2" type="password" required value={pwd} onChange={e=>setPwd(e.target.value)}/></div>
        <button className="w-full rounded-2xl px-5 py-3 text-sm font-semibold bg-[var(--color-accent)] text-[var(--color-primary)]">Створити аккаунт</button>
      </form>
    </div>
  </Container></section>);
}
