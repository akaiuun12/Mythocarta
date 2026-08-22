import { defineFigure } from "../schema";

export const pythia = defineFigure({
  id: "pythia",
  names: {
    primary: { en: "The Pythia", ko: "피티아" },
    ancient: "Pythia",
    variants: [
      { kind: "greek", value: "Πυθία" },
      {
        kind: "alternate",
        value: { en: "Oracle of Delphi", ko: "델포이의 신탁" },
        note: {
          en: "A title, not a person: a succession of priestesses held the office for over a thousand years.",
          ko: "개인이 아니라 직책이다. 천 년이 넘도록 여사제들이 차례로 그 자리를 이어받았다.",
        },
      },
    ],
  },
  summary: {
    en: "Apollo's priestess at Delphi, whose answers were never wrong and almost never understood in time.",
    ko: "델포이의 아폴론 여사제. 그 답은 틀린 적이 없었고, 제때 이해된 적도 거의 없었다.",
  },
  placeIds: ["delphi"],
  tags: ["oracle", "apollo"],
  sources: [{ work: "Histories", locus: "Herodotus 1.46-55" }],
});
