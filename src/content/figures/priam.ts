import { defineFigure } from "../schema";

export const priam = defineFigure({
  id: "priam",
  names: {
    primary: { en: "Priam", ko: "프리아모스" },
    ancient: "Priamos",
    variants: [
      { kind: "greek", value: "Πρίαμος" },
      {
        kind: "alternate",
        value: { en: "Podarces", ko: "포다르케스" },
        note: {
          en: "His birth name. Heracles sacked Troy, spared the boy, and his sister ransomed him — priamai, 'to buy'.",
          ko: "그의 본래 이름. 헤라클레스가 트로이를 함락하고 그를 살려 두자 누이가 몸값을 치러 되샀다. '사다'를 뜻하는 priamai에서 새 이름이 왔다.",
        },
        sources: [{ work: "Bibliotheca", locus: "2.6" }],
      },
    ],
  },
  summary: {
    en: "Last king of Troy, father of fifty sons, who crossed the battlefield alone to kiss the hands that killed Hector.",
    ko: "트로이의 마지막 왕이자 오십 아들의 아버지. 헥토르를 죽인 그 손에 입 맞추러 홀로 전장을 건넜다.",
  },
  placeIds: ["troy"],
  tags: ["trojan-war"],
  sources: [{ work: "Iliad", locus: "24" }],
});
