import { definePlace } from "../schema";

export const athens = definePlace({
  id: "athens",
  kind: "city",
  coordinates: [23.7275, 37.9838],
  names: {
    primary: { en: "Athens", ko: "아테네" },
    ancient: "Athênai",
    variants: [
      { kind: "greek", value: "Ἀθῆναι" },
      {
        kind: "alternate",
        value: { en: "Cecropia", ko: "케크로피아" },
        note: {
          en: "The older name, after Cecrops, the serpent-tailed first king who judged the contest between Athena and Poseidon.",
          ko: "더 오래된 이름. 뱀의 꼬리를 가진 초대 왕 케크롭스에서 유래했다. 그가 아테나와 포세이돈의 경쟁을 판결했다.",
        },
      },
      {
        kind: "epithet",
        value: { en: "violet-crowned", ko: "제비꽃 관을 쓴" },
        sources: [{ work: "Fragments", locus: "Pindar 76" }],
      },
    ],
  },
  rulerId: "theseus",
  rulerTitle: { en: "King of Athens", ko: "아테네의 왕" },
  summary: {
    en: "City of Athena, won by her olive tree over Poseidon's spring of salt water, and ruled by the hero who killed the Minotaur.",
    ko: "아테나의 도시. 포세이돈의 소금 샘을 그녀의 올리브 나무가 이겨 얻었고, 미노타우로스를 죽인 영웅이 다스렸다.",
  },
  tags: ["attica", "theseus"],
  sources: [{ work: "Bibliotheca", locus: "3.14" }],
});
