export type Lesson = { id: string; title: string };
export type Module = { id: string; title: string; lessons: Lesson[] };

export const MODULES: Module[] = [
  {
    id: "kyivska-rus-intro",
    title: "Київська Русь — Вступ",
    lessons: [
      { id: "origins", title: "Походження східних слов’ян" },
      { id: "state", title: "Утворення Київської Русі" },
      { id: "olegh-ihor", title: "Князі Олег і Ігор" },
      { id: "olha", title: "Княгиня Ольга" },
      { id: "baptism", title: "Хрещення Русі" },
    ],
  },
  {
    id: "cossack-overview",
    title: "Козацька доба — Огляд",
    lessons: [
      { id: "origin-cossacks", title: "Витоки козацтва" },
      { id: "zaporizhia", title: "Запорозька Січ" },
      { id: "hetmans", title: "Гетьмани та устрій" },
    ],
  },
  {
    id: "xx-ukraine-1",
    title: "Україна у ХХ ст. — Частина 1",
    lessons: [
      { id: "ww1", title: "Перша світова та УНР" },
      { id: "soviet", title: "СРСР та українізація" },
      { id: "holodomor", title: "Голодомор" },
    ],
  },
];
