import { defineFigure } from "../schema";

export const nestor = defineFigure({
  id: "nestor",
  names: {
    primary: { en: "Nestor", ko: "네스토르" },
    ancient: "Nestōr",
    variants: [
      { kind: "greek", value: "Νέστωρ" },
      {
        kind: "epithet",
        value: { en: "the Gerenian horseman", ko: "게레니아의 기수" },
        sources: [{ work: "Odyssey", locus: "3.68" }],
      },
      {
        kind: "epithet",
        value: { en: "sweet-worded", ko: "말이 꿀 같은" },
        note: {
          en: "\"From his tongue flowed speech sweeter than honey\" — the reason two generations of kings kept listening.",
          ko: "'그의 혀에서는 꿀보다 단 말이 흘렀다' — 두 세대의 왕들이 계속 그의 말을 들은 이유.",
        },
        sources: [{ work: "Iliad", locus: "1.249" }],
      },
    ],
  },
  epithet: { en: "the wise", ko: "지혜로운" },
  summary: {
    en: "Aged king of Pylos, eldest counsellor of the Greeks, who sailed home from Troy without losing a single ship.",
    ko: "필로스의 늙은 왕이자 그리스군 최고 원로. 트로이에서 배 한 척 잃지 않고 귀향했다.",
  },
  placeIds: ["pylos", "troy"],
  tags: ["trojan-war", "odyssey"],
  sources: [{ work: "Odyssey", locus: "3.130-185" }],
});
