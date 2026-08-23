import { defineFigure } from "../schema";

export const diomedes = defineFigure({
  id: "diomedes",
  names: {
    primary: { en: "Diomedes", ko: "디오메데스" },
    ancient: "Diomēdēs",
    variants: [
      { kind: "greek", value: "Διομήδης" },
      { kind: "epithet", value: { en: "of the great war-cry", ko: "함성이 큰" } },
    ],
  },
  summary: {
    en: "King of Argos and Athena's favourite, the only mortal to wound two Olympians in a single day's fighting.",
    ko: "아르고스의 왕이자 아테나의 총애를 받은 자. 하루의 전투에서 올림포스 신 둘에게 상처를 입힌 유일한 인간.",
  },
  placeIds: ["argos", "troy", "tiryns"],
  tags: ["trojan-war"],
  sources: [{ work: "Iliad", locus: "5.330-430" }],
});
