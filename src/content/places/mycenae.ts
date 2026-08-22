import { definePlace } from "../schema";

export const mycenae = definePlace({
  id: "mycenae",
  kind: "city",
  coordinates: [22.7561, 37.7308],
  names: {
    primary: { en: "Mycenae", ko: "미케네" },
    ancient: "Mykēnai",
    variants: [
      { kind: "greek", value: "Μυκῆναι" },
      {
        kind: "epithet",
        value: { en: "rich in gold", ko: "황금이 넘치는" },
        note: {
          en: "Homer's standing epithet for the citadel — borne out when Schliemann lifted a gold mask from its shaft graves.",
          ko: "호메로스가 이 성채에 붙인 고정 수식어. 슐리만이 수혈묘에서 황금 가면을 들어 올리며 실증되었다.",
        },
        sources: [{ work: "Iliad", locus: "7.180" }],
      },
      {
        kind: "epithet",
        value: { en: "broad-wayed Mycenae", ko: "길이 넓은 미케네" },
        sources: [{ work: "Iliad", locus: "4.52" }],
      },
    ],
  },
  rulerId: "agamemnon",
  rulerTitle: { en: "King of Men", ko: "인간들의 왕" },
  summary: {
    en: "Golden citadel of Agamemnon, commander of the Achaean host — and the hall where his homecoming ended in murder.",
    ko: "아카이아 연합군 총사령관 아가멤논의 황금 성채. 그의 귀향이 살해로 끝난 궁전이기도 하다.",
  },
  tags: ["trojan-war", "peloponnese", "atreidae"],
  sources: [{ work: "Iliad", locus: "2.569-580" }, { work: "Agamemnon" }],
});
