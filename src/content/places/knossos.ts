import { definePlace } from "../schema";

export const knossos = definePlace({
  id: "knossos",
  kind: "city",
  coordinates: [25.1632, 35.298],
  names: {
    primary: { en: "Knossos", ko: "크노소스" },
    ancient: "Knōssos",
    variants: [
      { kind: "greek", value: "Κνωσός" },
      { kind: "latin", value: "Cnossus" },
      {
        kind: "epithet",
        value: { en: "the Labyrinth", ko: "라비린토스" },
        note: {
          en: "The maze Daedalus built beneath the palace to hold the Minotaur — from labrys, the double axe carved throughout the ruins.",
          ko: "다이달로스가 미노타우로스를 가두려 궁전 아래 지은 미궁. 유적 곳곳에 새겨진 쌍날 도끼 '라브리스'에서 이름이 왔다.",
        },
      },
    ],
  },
  rulerId: "minos",
  rulerTitle: { en: "King of Crete", ko: "크레타의 왕" },
  summary: {
    en: "Palace of Minos on Crete, where every ninth year Athens sent seven youths and seven maidens into the Labyrinth.",
    ko: "크레타의 미노스 궁전. 9년마다 아테네가 소년 일곱과 소녀 일곱을 미궁으로 보내야 했던 곳.",
  },
  tags: ["crete", "theseus", "minoan"],
  sources: [{ work: "Bibliotheca", locus: "3.1" }],
});
