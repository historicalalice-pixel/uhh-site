
"use client";
import { Container } from "@/components/ui";import { getUser, clearUser } from "@/lib/auth";import { useEffect, useState } from "react";import { useRouter } from "next/navigation";
export default function Page(){
  const [user,setUser]=useState<any>(null); const r=useRouter();
  useEffect(()=>{const u=getUser(); if(!u) r.replace("/login"); else setUser(u);},[r]);
  const lessons=[{id:1,title:"Київська Русь — Вступ",progress:1},{id:2,title:"Козацька доба — Огляд",progress:0.35},{id:3,title:"Україна у ХХ ст. — Частина 1",progress:0.7}];
  if(!user) return null;
  return (<section className="py-16"><Container>
    <div className="flex items-center justify-between"><h1 className="text-3xl font-extrabold">Кабінет студента</h1><div className="flex items-center gap-3"><span className="text-sm text-gray-600">{user.email}</span><button className="inline-flex items-center rounded-2xl px-4 py-2 border border-[var(--color-accent)] text-[var(--color-accent)]" onClick={()=>{clearUser(); r.push("/")}}>Вийти</button></div></div>
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lessons.map(l=> (
        <div key={l.id} className="rounded-3xl border p-6 bg-white"><h3 className="font-semibold">{l.title}</h3><div className="mt-3 h-2 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full" style={{width:`${l.progress*100}%`,background:"var(--color-accent)"}}/></div><div className="mt-3 text-sm text-gray-600">Прогрес: {(l.progress*100).toFixed(0)}%</div></div>
      ))}
    </div>
  </Container></section>);
}
