import { defineFigure } from "../schema";

export const theseus = defineFigure({
  id: "theseus",
  names: {
    primary: { en: "Theseus", ko: "테세우스" },
    ancient: "Thēseus",
    variants: [{ kind: "greek", value: "Θησεύς" }],
  },
  summary: {
    en: "King of Athens who killed the Minotaur, then forgot to change his black sail — and cost his father the sea's name.",
    ko: "미노타우로스를 죽인 아테네의 왕. 검은 돛을 바꿔 다는 것을 잊어 아버지의 이름을 바다에 남겼다.",
  },
  placeIds: ["athens", "knossos"],
  tags: ["theseus", "attica"],
  sources: [{ work: "Life of Theseus" }],
});
