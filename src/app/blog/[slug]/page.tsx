
import { Container } from "@/components/ui";
import { notFound } from "next/navigation";
const db:any={
  "tryzyb-symvol-derzhavy": {title:"Тризуб: шлях державного символу",content:"Тризуб має давнє походження… (ваш SEO‑контент)"},
  "kozatstvo-mify-i-fakty": {title:"Козацтво: міфи і факти",content:"Про козацькі традиції, військову організацію та побут…"}
};
export default function Page({params}:{params:{slug:string}}){
  const post=db[params.slug]; if(!post) return notFound();
  return (
    <section className="py-16"><Container>
      <article className="prose max-w-3xl">
        <h1 className="text-3xl font-extrabold leading-tight">{post.title}</h1>
        <div className="mt-4 text-gray-700 whitespace-pre-wrap">{post.content}</div>
      </article>
    </Container></section>
  );
}
