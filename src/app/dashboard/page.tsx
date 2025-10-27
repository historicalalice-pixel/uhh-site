import { MODULES } from "@/data/modules";
import LessonChecklist from "@/components/LessonChecklist";

export default function DashboardPage() {
  // email користувача (тимчасово статичний)
  const userEmail = "demo@uhh.school";

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Кабінет студента</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m) => (
          <LessonChecklist key={m.id} moduleData={m} userKey={userEmail} />
        ))}
      </div>
    </main>
  );
}
