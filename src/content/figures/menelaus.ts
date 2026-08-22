import { defineFigure } from "../schema";

export const menelaus = defineFigure({
  id: "menelaus",
  names: {
    primary: { en: "Menelaus", ko: "메넬라오스" },
    ancient: "Menelāos",
    variants: [
      { kind: "greek", value: "Μενέλαος" },
      { kind: "epithet", value: { en: "of the loud war-cry", ko: "우렁찬 함성의" } },
    ],
  },
  summary: {
    en: "King of Lacedaemon and husband of Helen, whose loss of her called in the oath that bound every Greek king to Troy.",
    ko: "라케다이몬의 왕이자 헬레네의 남편. 그녀를 잃으면서 모든 그리스 왕을 트로이로 묶은 맹세가 발동됐다.",
  },
  placeIds: ["sparta", "troy"],
  tags: ["trojan-war", "atreidae"],
  sources: [{ work: "Odyssey", locus: "4" }],
});
