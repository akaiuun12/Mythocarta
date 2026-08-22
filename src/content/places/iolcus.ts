import { definePlace } from "../schema";

export const iolcus = definePlace({
  id: "iolcus",
  kind: "city",
  coordinates: [22.9444, 39.3622],
  names: {
    primary: { en: "Iolcus", ko: "이올코스" },
    ancient: "Iōlkos",
    variants: [
      { kind: "greek", value: "Ἰωλκός" },
      { kind: "modern", value: { en: "Volos", ko: "볼로스" } },
      {
        kind: "epithet",
        value: { en: "well-built Iolcus", ko: "잘 지어진 이올코스" },
        sources: [{ work: "Odyssey", locus: "11.256" }],
      },
    ],
  },
  rulerId: "pelias",
  rulerTitle: { en: "King of Iolcus", ko: "이올코스의 왕" },
  summary: {
    en: "Harbour of Pelias, who sent Jason after the Golden Fleece expecting never to see him again.",
    ko: "이아손을 황금 양털로 보내며 다시는 못 볼 것이라 여겼던 펠리아스의 항구.",
  },
  tags: ["argonauts", "thessaly"],
  sources: [{ work: "Argonautica", locus: "1" }],
});
