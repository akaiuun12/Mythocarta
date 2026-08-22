import { defineFigure } from "../schema";

export const odysseus = defineFigure({
  id: "odysseus",
  names: {
    primary: { en: "Odysseus", ko: "오디세우스" },
    ancient: "Odysseus",
    variants: [
      { kind: "greek", value: "Ὀδυσσεύς" },
      {
        kind: "latin",
        value: { en: "Ulysses", ko: "울릭세스" },
        note: {
          en: "The Roman form, by way of Etruscan Uthuze — the name most of Europe inherited.",
          ko: "에트루리아어 우투제를 거친 로마식 이름. 유럽 대부분이 물려받은 형태다.",
        },
      },
    ],
  },
  epithet: { en: "of many turns", ko: "꾀 많은" },
  summary: {
    en: "King of Ithaca and architect of the wooden horse, who took ten years to sail home from a war that took ten years.",
    ko: "이타카의 왕이자 목마를 고안한 자. 10년이 걸린 전쟁을 마치고 집으로 돌아가는 데 다시 10년이 걸렸다.",
  },
  placeIds: ["ithaca", "troy"],
  tags: ["odyssey", "trojan-war"],
  sources: [{ work: "Odyssey", locus: "1.1-5" }],
});
