import { definePlace } from "../schema";

export const corinth = definePlace({
  id: "corinth",
  kind: "city",
  coordinates: [22.9319, 37.9061],
  names: {
    primary: { en: "Corinth", ko: "코린토스" },
    ancient: "Korinthos",
    variants: [
      { kind: "greek", value: "Κόρινθος" },
      {
        kind: "alternate",
        value: { en: "Ephyra", ko: "에퓌라" },
        note: {
          en: "Homer's name for the city in the age of Sisyphus and Bellerophon, before it became Corinth.",
          ko: "코린토스가 되기 전, 시시포스와 벨레로폰의 시대에 호메로스가 이 도시를 부르던 이름.",
        },
        sources: [{ work: "Iliad", locus: "6.152" }],
      },
      {
        kind: "epithet",
        value: { en: "wealthy Corinth", ko: "부유한 코린토스" },
        note: {
          en: "It held both seas — the isthmus made every ship between east and west pay its toll.",
          ko: "두 바다를 쥔 도시. 지협이 동서를 오가는 모든 배에서 통행료를 거두게 했다.",
        },
      },
    ],
  },
  rulerId: "sisyphus",
  rulerTitle: { en: "Founder-King", ko: "창건왕" },
  summary: {
    en: "City on the isthmus founded by Sisyphus, who cheated death twice and rolls his stone for it still.",
    ko: "죽음을 두 번 속이고 그 대가로 여전히 바위를 굴리는 시시포스가 세운 지협의 도시.",
  },
  tags: ["peloponnese", "bellerophon"],
  sources: [{ work: "Iliad", locus: "6.152-155" }],
});
