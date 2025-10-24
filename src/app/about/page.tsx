
import { Container, Card } from "@/components/ui";
export default function Page(){
  return (
    <section className="py-16"><Container>
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1"><div className="aspect-[3/4] rounded-3xl border bg-gray-100"/></div>
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold">Про авторку</h1>
          <p className="mt-4 text-gray-700">Викладачка історії з 10+ роками досвіду, авторка навчальних матеріалів.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <Card><div className="text-2xl font-extrabold">10+</div><div className="text-sm text-gray-600">Років викладання</div></Card>
            <Card><div className="text-2xl font-extrabold">5 000+</div><div className="text-sm text-gray-600">Учнів</div></Card>
            <Card><div className="text-2xl font-extrabold">60+</div><div className="text-sm text-gray-600">Годин відео</div></Card>
          </div>
        </div>
      </div>
    </Container></section>
  );
}
