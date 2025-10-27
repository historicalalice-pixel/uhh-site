"use client";
import { useEffect, useMemo, useState } from "react";
import type { Module } from "@/data/modules";

type Props = {
  moduleData: Module;
  userKey?: string; // наприклад email користувача
};

type ProgressMap = Record<string, boolean>; // lessonId -> completed

export default function LessonChecklist({ moduleData, userKey = "demo" }: Props) {
  const storageKey = `uhh-progress:${userKey}:${moduleData.id}`;
  const [progress, setProgress] = useState<ProgressMap>({});

  // Завантажуємо прогрес з localStorage
  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
    if (raw) setProgress(JSON.parse(raw));
  }, [storageKey]);

  // Зберігаємо прогрес при кожній зміні
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    }
  }, [progress, storageKey]);

  // Обчислюємо прогрес %
  const { completed, total, percent } = useMemo(() => {
    const total = moduleData.lessons.length;
    const completed = moduleData.lessons.filter(l => progress[l.id]).length;
    const percent = total ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percent };
  }, [moduleData.lessons, progress]);

  return (
    <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
      {/* Заголовок і прогресбар */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{moduleData.title}</h3>
        <span className="text-sm text-gray-600">Прогрес: {percent}%</span>
      </div>

      <div className="mt-2 h-2 w-full rounded bg-gray-200">
        <div
          className="h-2 rounded bg-[#EAB308]" // жовтий
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Розкривний список тем */}
      <details className="mt-4 group">
        <summary className="cursor-pointer select-none text-sm font-medium text-gray-800 group-open:mb-2">
          Відкрити список тем ({completed}/{total})
        </summary>

        <ul className="space-y-2">
          {moduleData.lessons.map(lesson => {
            const checked = !!progress[lesson.id];
            return (
              <li key={lesson.id} className="flex items-center gap-3">
                <input
                  id={`${moduleData.id}-${lesson.id}`}
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer"
                  checked={checked}
                  onChange={(e) =>
                    setProgress(prev => ({ ...prev, [lesson.id]: e.target.checked }))
                  }
                />
                <label htmlFor={`${moduleData.id}-${lesson.id}`} className="cursor-pointer">
                  {lesson.title}
                </label>
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
}
