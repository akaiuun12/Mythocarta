import { definePlace } from "../schema";

export const argos = definePlace({
  id: "argos",
  kind: "city",
  coordinates: [22.7196, 37.6316],
  names: {
    primary: { en: "Argos", ko: "아르고스" },
    ancient: "Argos",
    variants: [
      { kind: "greek", value: "Ἄργος" },
      {
        kind: "epithet",
        value: { en: "horse-pasturing Argos", ko: "말을 기르는 아르고스" },
        sources: [{ work: "Iliad", locus: "2.287" }],
      },
      {
        kind: "alternate",
        value: { en: "Argives", ko: "아르고스인" },
        note: {
          en: "Homer often calls all the Greeks at Troy Argives, after this city — alongside Achaeans and Danaans.",
          ko: "호메로스는 트로이의 그리스군 전체를 이 도시의 이름을 따 '아르고스인'이라 부르곤 한다. 아카이아인, 다나오스인과 함께 쓰인다.",
        },
      },
    ],
  },
  rulerId: "diomedes",
  rulerTitle: { en: "King of Argos", ko: "아르고스의 왕" },
  summary: {
    en: "Realm of Diomedes, the young warrior who wounded two gods — Aphrodite and Ares — in a single day.",
    ko: "하루 만에 아프로디테와 아레스, 두 신에게 상처를 입힌 젊은 용장 디오메데스의 왕국.",
  },
  tags: ["trojan-war", "peloponnese"],
  sources: [{ work: "Iliad", locus: "5" }],
});
