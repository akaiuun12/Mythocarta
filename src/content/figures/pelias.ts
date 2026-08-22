import { defineFigure } from "../schema";

export const pelias = defineFigure({
  id: "pelias",
  names: {
    primary: { en: "Pelias", ko: "펠리아스" },
    ancient: "Pelias",
    variants: [{ kind: "greek", value: "Πελίας" }],
  },
  summary: {
    en: "Usurper of Iolcus, warned to beware a man with one sandal — and Jason walked in wearing one.",
    ko: "이올코스의 찬탈자. 샌들 한 짝만 신은 사내를 조심하라는 신탁을 들었고, 이아손이 한 짝만 신고 걸어 들어왔다.",
  },
  placeIds: ["iolcus"],
  tags: ["argonauts", "thessaly"],
  sources: [{ work: "Argonautica", locus: "1.5-17" }],
});
