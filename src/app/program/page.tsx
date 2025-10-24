
import { Container, Card, Ghost } from "@/components/ui";
const modules=[
  {slug:"kyivan-rus",title:"Київська Русь",desc:"Формування державності, князі, християнізація, культура."},
  {slug:"cossack-era",title:"Козацька доба",desc:"Гетьманщина, Запорозька Січ, визвольні змагання."},
  {slug:"xix-century",title:"XIX століття",desc:"Національне відродження, інтелігенція, реформи."},
  {slug:"xx-century",title:"Україна у ХХ ст.",desc:"УНР, Друга світова, радянський період, незалежність."},
  {slug:"modern-ukraine",title:"Незалежна Україна",desc:"1991–сьогодні: державотворення, Майдани, війна, інтеграція до ЄС."},
];
export default function Page(){
  return (
    <section className="py-16"><Container>
      <h1 className="text-3xl font-extrabold">Програма курсу</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Кожен модуль містить відео, конспекти, тести та PDF‑матеріали.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {modules.map(m=> (
          <Card key={m.slug}><h3 className="font-semibold text-lg">{m.title}</h3><p className="mt-2 text-gray-700">{m.desc}</p><div className="mt-4"><Ghost href="/pricing">Детальніше / Купити доступ</Ghost></div></Card>
        ))}
      </div>
    </Container></section>
  );
}
