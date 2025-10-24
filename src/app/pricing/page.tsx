
"use client";
import { Container, Card, Ghost } from "@/components/ui";
import { useState } from "react";

export default function Page(){
  const [open,setOpen]=useState(false);
  return (
    <section className="py-16"><Container>
      <h1 className="text-3xl font-extrabold">Оплата та FAQ</h1>
      <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
        <Card>
          <h2 className="text-xl font-bold">Тариф: Повний курс</h2>
          <p className="mt-2 text-gray-700">Доступ до всіх модулів, тестів і PDF‑матеріалів.</p>
          <div className="mt-4 text-3xl font-extrabold">2 490 ₴</div>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-[var(--color-accent)] text-[var(--color-primary)]" onClick={()=>setOpen(true)}>Придбати курс</button>
            <Ghost href="/register">Створити аккаунт</Ghost>
          </div>
          <p className="mt-3 text-gray-500 text-sm">Оплата через LiqPay</p>
        </Card>
        <div>
          <h2 className="text-xl font-bold">FAQ</h2>
          <div className="mt-3 divide-y">
            {[{q:"Як відбувається оплата?",a:"Через LiqPay. Після оплати доступ відкриється у кабінеті."},{q:"Чи є сертифікат?",a:"Так, після фінального тесту."},{q:"Чи є гарантія?",a:"7‑денна гарантія повернення."}].map((f,i)=> (
              <details key={i} className="py-3 group"><summary className="cursor-pointer list-none flex justify-between items-center"><span className="font-medium">{f.q}</span><span className="transition group-open:rotate-180">▾</span></summary><p className="mt-2 text-gray-700">{f.a}</p></details>
            ))}
          </div>
        </div>
      </div>
      {open && <LiqPayModal onClose={()=>setOpen(false)}/>}    
    </Container></section>
  );
}

function LiqPayModal({onClose}:{onClose:()=>void}){
  const amount=2490; const currency="UAH";
  async function go(){
    const res=await fetch("/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount,currency,description:"UHH Full Course"})});
    const {public_key,data,signature}=await res.json();
    const form=document.createElement("form");
    form.method="POST"; form.action="https://www.liqpay.ua/api/3/checkout"; form.acceptCharset="utf-8";
    form.innerHTML=`<input type="hidden" name="public_key" value="${public_key}"><input type="hidden" name="data" value="${data}"><input type="hidden" name="signature" value="${signature}">`;
    document.body.appendChild(form); form.submit();
  }
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white border p-6">
        <div className="flex justify-between items-center"><h3 className="text-lg font-bold">Оплата через LiqPay</h3><button className="p-2" onClick={onClose}>✕</button></div>
        <p className="mt-2 text-gray-700 text-sm">Демо‑потік: підпис генерується на сервері через приватний ключ.</p>
        <div className="mt-4 flex gap-3">
          <button className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-[var(--color-accent)] text-[var(--color-primary)]" onClick={go}>Перейти до оплати</button>
          <a href="/register" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold border border-[var(--color-accent)] text-[var(--color-accent)]">Зареєструватись</a>
        </div>
        <p className="mt-3 text-xs text-gray-500">На проді збережіть payment status через вебхук /api/liqpay/webhook.</p>
      </div>
    </div>
  );
}
