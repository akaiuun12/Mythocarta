import { definePlace } from "../schema";

export const salamis = definePlace({
  id: "salamis",
  kind: "island",
  coordinates: [23.4708, 37.9647],
  names: {
    primary: { en: "Salamis", ko: "살라미스" },
    ancient: "Salamis",
    variants: [{ kind: "greek", value: "Σαλαμίς" }],
  },
  summary: {
    en: "Island kingdom of Telamon, whose son Ajax brought twelve ships to Troy and, denied Achilles' arms, fell on his own sword.",
    ko: "텔라몬의 섬 왕국. 그의 아들 아이아스는 열두 척의 배를 이끌고 트로이로 갔으나, 아킬레우스의 무구를 얻지 못하자 자신의 칼 위에 쓰러졌다.",
  },
  tags: ["trojan-war", "ajax"],
  sources: [{ work: "Iliad", locus: "2.557-558" }],
});
