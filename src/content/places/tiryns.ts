import { definePlace } from "../schema";

export const tiryns = definePlace({
  id: "tiryns",
  kind: "city",
  coordinates: [22.7997, 37.5994],
  names: {
    primary: { en: "Tiryns", ko: "티린스" },
    ancient: "Tiryns",
    variants: [
      { kind: "greek", value: "Τίρυνς" },
      {
        kind: "epithet",
        value: { en: "wall-girt Tiryns", ko: "성벽 두른 티린스" },
        note: {
          en: "The walls are Cyclopean — stones so large that later Greeks believed only the one-eyed giants could have set them.",
          ko: "키클롭스식 성벽. 돌이 너무 커서 후대 그리스인들은 외눈박이 거인들만이 쌓을 수 있었으리라 믿었다.",
        },
        sources: [{ work: "Iliad", locus: "2.559" }],
      },
    ],
  },
  rulerId: "diomedes",
  rulerTitle: { en: "King of Tiryns", ko: "티린스의 왕" },
  summary: {
    en: "Cyclopean-walled citadel where Heracles served Eurystheus through his twelve labours, later folded into Diomedes' realm.",
    ko: "헤라클레스가 에우리스테우스를 섬기며 열두 과업을 치른 키클롭스식 성벽의 성채. 훗날 디오메데스의 왕국에 편입되었다.",
  },
  tags: ["peloponnese", "heracles"],
  sources: [{ work: "Iliad", locus: "2.559" }],
});
