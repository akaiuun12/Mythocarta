import { defineFigure } from "../schema";

export const oedipus = defineFigure({
  id: "oedipus",
  names: {
    primary: { en: "Oedipus", ko: "오이디푸스" },
    ancient: "Oidipous",
    variants: [
      { kind: "greek", value: "Οἰδίπους" },
      {
        kind: "epithet",
        value: { en: "swollen-foot", ko: "부은 발" },
        note: {
          en: "His name is the scar: his ankles were pinned when he was exposed on Cithaeron as an infant.",
          ko: "그의 이름은 곧 상처다. 갓난아기 때 키타이론 산에 버려지며 발목이 꿰뚫렸다.",
        },
      },
    ],
  },
  summary: {
    en: "King of Thebes who answered the Sphinx and destroyed himself by insisting on the truth about his own birth.",
    ko: "스핑크스에게 답한 테베의 왕. 자기 출생의 진실을 끝까지 캐물어 스스로를 무너뜨렸다.",
  },
  placeIds: ["thebes", "delphi"],
  tags: ["theban-cycle"],
  sources: [{ work: "Oedipus Rex" }],
});
