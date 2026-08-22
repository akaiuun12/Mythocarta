import { defineFigure } from "../schema";

export const minos = defineFigure({
  id: "minos",
  names: {
    primary: { en: "Minos", ko: "미노스" },
    ancient: "Minōs",
    variants: [{ kind: "greek", value: "Μίνως" }],
  },
  summary: {
    en: "King of Crete and son of Zeus, who kept the bull he should have sacrificed — and got the Minotaur for it.",
    ko: "크레타의 왕이자 제우스의 아들. 제물로 바쳤어야 할 황소를 가로챈 대가로 미노타우로스를 얻었다.",
  },
  placeIds: ["knossos"],
  tags: ["crete", "minoan"],
  sources: [{ work: "Bibliotheca", locus: "3.1" }],
});
