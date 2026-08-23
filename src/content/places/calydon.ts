import { definePlace } from "../schema";

export const calydon = definePlace({
  id: "calydon",
  kind: "city",
  coordinates: [21.5559, 38.366],
  names: {
    primary: { en: "Calydon", ko: "칼뤼돈" },
    ancient: "Kalydōn",
    variants: [
      { kind: "greek", value: "Καλυδών" },
      {
        kind: "epithet",
        value: { en: "rugged Calydon", ko: "험준한 칼뤼돈" },
        sources: [{ work: "Iliad", locus: "2.640" }],
      },
    ],
  },
  summary: {
    en: "Aetolian city that forgot Artemis at harvest and paid for it with a boar no spear could bring down alone.",
    ko: "수확제에서 아르테미스를 잊었다가, 어떤 창으로도 홀로 쓰러뜨릴 수 없는 멧돼지로 그 대가를 치른 아이톨리아의 도시.",
  },
  tags: ["aetolia", "calydonian-boar-hunt"],
  sources: [{ work: "Iliad", locus: "9.529-599" }],
});
