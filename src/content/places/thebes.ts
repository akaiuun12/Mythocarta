import { definePlace } from "../schema";

export const thebes = definePlace({
  id: "thebes",
  kind: "city",
  coordinates: [23.3178, 38.3217],
  names: {
    primary: { en: "Thebes", ko: "테베" },
    ancient: "Thēbai",
    variants: [
      { kind: "greek", value: "Θῆβαι" },
      {
        kind: "alternate",
        value: { en: "Cadmeia", ko: "카드메이아" },
        note: {
          en: "The citadel's name, after Cadmus, who sowed a dragon's teeth here and reaped armed men.",
          ko: "성채의 이름. 이곳에 용의 이빨을 뿌려 무장한 병사들을 거둔 카드모스에서 유래했다.",
        },
      },
      {
        kind: "epithet",
        value: { en: "seven-gated Thebes", ko: "일곱 성문의 테베" },
        note: {
          en: "Distinguished by Homer from hundred-gated Egyptian Thebes.",
          ko: "호메로스가 '백 개의 문을 가진' 이집트의 테베와 구별하기 위해 붙인 표현.",
        },
        sources: [{ work: "Iliad", locus: "9.383" }],
      },
    ],
  },
  rulerId: "oedipus",
  rulerTitle: { en: "King of Thebes", ko: "테베의 왕" },
  summary: {
    en: "City of Cadmus and the Sphinx's riddle, where Oedipus solved everything except who he was.",
    ko: "카드모스와 스핑크스의 수수께끼의 도시. 오이디푸스가 자기 자신만 빼고 모든 것을 풀어낸 곳.",
  },
  tags: ["boeotia", "theban-cycle"],
  sources: [{ work: "Oedipus Rex" }],
});
