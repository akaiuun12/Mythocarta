import { defineFigure } from "../schema";

export const telemachus = defineFigure({
  id: "telemachus",
  names: {
    primary: { en: "Telemachus", ko: "텔레마코스" },
    ancient: "Tēlemachos",
    variants: [
      { kind: "greek", value: "Τηλέμαχος" },
      {
        kind: "epithet",
        value: { en: "far-from-the-fighting", ko: "싸움에서 먼 자" },
        note: {
          en: "The name Odysseus gave the son born as he left for Troy — tēle, far off, and machē, battle.",
          ko: "트로이로 떠나며 오디세우스가 갓난 아들에게 지어준 이름. '멀리'라는 뜻의 tēle와 '싸움'이라는 뜻의 machē에서 왔다.",
        },
      },
    ],
  },
  epithet: { en: "the level-headed", ko: "사려 깊은" },
  summary: {
    en: "Odysseus' son, who grew up under siege in his own house and sailed out to ask two old kings whether his father was alive.",
    ko: "제 집에서 구혼자들에게 포위된 채 자란 오디세우스의 아들. 아버지의 생사를 묻기 위해 두 노왕을 찾아 바다로 나섰다.",
  },
  placeIds: ["ithaca", "pylos", "sparta"],
  tags: ["odyssey"],
  sources: [{ work: "Odyssey", locus: "1-4" }],
});
