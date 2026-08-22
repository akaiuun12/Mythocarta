import { defineFigure } from "../schema";

export const sisyphus = defineFigure({
  id: "sisyphus",
  names: {
    primary: { en: "Sisyphus", ko: "시시포스" },
    ancient: "Sisyphos",
    variants: [
      { kind: "greek", value: "Σίσυφος" },
      { kind: "epithet", value: { en: "craftiest of men", ko: "인간 중 가장 꾀바른" } },
    ],
  },
  summary: {
    en: "Founder-king of Corinth who chained Death, talked his way out of Hades, and rolls the same stone forever.",
    ko: "죽음을 사슬로 묶고 하데스를 말로 빠져나온 코린토스의 창건왕. 그 대가로 같은 바위를 영원히 굴린다.",
  },
  placeIds: ["corinth"],
  tags: ["underworld", "peloponnese"],
  sources: [{ work: "Odyssey", locus: "11.593-600" }],
});
