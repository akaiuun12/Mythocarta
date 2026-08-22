import { definePlace } from "../schema";

export const ithaca = definePlace({
  id: "ithaca",
  kind: "island",
  coordinates: [20.7191, 38.367],
  names: {
    primary: { en: "Ithaca", ko: "이타카" },
    ancient: "Ithakē",
    variants: [
      { kind: "greek", value: "Ἰθάκη" },
      {
        kind: "epithet",
        value: { en: "rugged Ithaca", ko: "바위투성이 이타카" },
        note: {
          en: "\"A rough land, but a good nurse of men\" — Odysseus' own description, and his reason for wanting no other.",
          ko: "\"거칠지만 사내를 길러내기에 좋은 땅\" — 오디세우스 자신의 표현이자, 다른 어떤 곳도 원하지 않은 이유.",
        },
        sources: [{ work: "Odyssey", locus: "9.27" }],
      },
      { kind: "modern", value: { en: "Ithaki", ko: "이타키" } },
    ],
  },
  rulerId: "odysseus",
  rulerTitle: { en: "King of Ithaca", ko: "이타카의 왕" },
  summary: {
    en: "The rocky island kingdom Odysseus spent twenty years trying to reach, where Penelope unwove her weaving each night.",
    ko: "오디세우스가 20년에 걸쳐 돌아가려 한 바위섬 왕국. 페넬로페가 밤마다 짜던 천을 풀던 곳.",
  },
  tags: ["odyssey", "ionian"],
  sources: [{ work: "Odyssey", locus: "9.21-28" }],
});
