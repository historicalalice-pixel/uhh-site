
import { Container, Button, Ghost, Card } from "@/components/ui";
export default function Page(){
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50" style={{backgroundImage:"radial-gradient(40rem_40rem_at_90%_-10%,#F9C74F22,transparent)"}}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-gray-100">Новий курс</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">Вивчай історію України легко та цікаво</h1>
            <p className="mt-4 text-gray-700 max-w-xl">Відеоуроки, інтерактивні модулі, тести та PDF‑матеріали. Для школярів, абітурієнтів і доросих.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/program">Переглянути програму</Button>
              <Ghost href="/pricing">Купити курс</Ghost>
            </div>
            <div className="mt-6 flex gap-6 text-sm text-gray-600">
              <div>🎓 Сертифікат</div><div>🧪 Тести</div><div>📥 PDF</div><div>📈 Прогрес</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl border overflow-hidden bg-white flex items-center justify-center"><div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center">(Відео/зображення)</div></div>
            <div className="absolute -bottom-4 -left-4 rotate-[-2deg] bg-yellow-100 text-yellow-900 text-xs px-3 py-1 rounded-md shadow">Мінімалістичний + історичний стиль</div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {["Повна програма","Інтерактивність","Гнучкий темп"].map((t,i)=> (
            <Card key={i}><h3 className="font-semibold text-lg">{t}</h3><p className="mt-2 text-gray-700">Стислий опис переваги.</p></Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
