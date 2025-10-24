
import { Container, Card, Badge } from "@/components/ui";
import Link from "next/link";
const posts=[
  {slug:"tryzyb-symvol-derzhavy",title:"Тризуб: шлях державного символу",excerpt:"Коли і як тризуб став символом української державності?",date:"2025-09-14"},
  {slug:"kozatstvo-mify-i-fakty",title:"Козацтво: міфи і факти",excerpt:"Що правда, а що легенда про запорожців.",date:"2025-08-02"},
];
export default function Page(){
  return (
    <section className="py-16"><Container>
      <h1 className="text-3xl font-extrabold">Блог</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {posts.map(p=> (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-3xl border p-6 bg-white hover:shadow-sm transition">
            <Badge>{new Date(p.date).toLocaleDateString("uk-UA")}</Badge>
            <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-gray-700">{p.excerpt}</p>
            <div className="mt-4 text-sm text-gray-500">Читати →</div>
          </Link>
        ))}
      </div>
    </Container></section>
  );
}
