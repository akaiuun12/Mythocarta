import { definePlace } from "../schema";

export const sparta = definePlace({
  id: "sparta",
  kind: "city",
  coordinates: [22.4297, 37.0741],
  names: {
    primary: { en: "Sparta", ko: "스파르타" },
    ancient: "Spartē",
    variants: [
      { kind: "greek", value: "Σπάρτη" },
      {
        kind: "alternate",
        value: { en: "Lacedaemon", ko: "라케다이몬" },
        note: {
          en: "Homer's usual name for the kingdom, after Lacedaemon, son of Zeus and husband of the nymph Sparta. The city takes her name, the land takes his.",
          ko: "호메로스가 이 왕국을 부를 때 주로 쓰는 이름. 제우스의 아들이자 님프 스파르타의 남편인 라케다이몬에서 유래했다. 도시는 아내의 이름을, 땅은 남편의 이름을 물려받았다.",
        },
        sources: [{ work: "Iliad", locus: "2.581" }],
      },
      { kind: "greek", value: "Λακεδαίμων" },
      {
        kind: "epithet",
        value: { en: "hollow Lacedaemon", ko: "움푹한 라케다이몬" },
        note: {
          en: "The formulaic epithet for the city's setting, sunk in the Eurotas valley between Taygetus and Parnon.",
          ko: "타위게토스와 파르논 산맥 사이 에우로타스 계곡에 내려앉은 도시의 지형을 가리키는 관용적 수식어.",
        },
        sources: [{ work: "Odyssey", locus: "4.1" }],
      },
    ],
  },
  rulerId: "menelaus",
  rulerTitle: { en: "King of Lacedaemon", ko: "라케다이몬의 왕" },
  summary: {
    en: "Kingdom of Menelaus and Helen, whose flight to Troy with Paris set a thousand ships in motion.",
    ko: "메넬라오스와 헬레네의 왕국. 헬레네가 파리스와 함께 트로이로 떠나며 천 척의 배가 움직였다.",
  },
  tags: ["trojan-war", "peloponnese"],
  sources: [{ work: "Iliad", locus: "2.581-590" }],
});
