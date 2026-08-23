import { definePlace } from "../schema";

export const olympia = definePlace({
  id: "olympia",
  kind: "sanctuary",
  coordinates: [21.6306, 37.6383],
  names: {
    primary: { en: "Olympia", ko: "올림피아" },
    ancient: "Olympia",
    variants: [
      { kind: "greek", value: "Ὀλυμπία" },
      {
        kind: "epithet",
        value: { en: "sacred Elis", ko: "신성한 엘리스" },
        note: {
          en: "The sanctuary sits in the territory of Elis, on the plain beside the Alpheius.",
          ko: "이 성역은 엘리스 영토 내, 알페이오스강 옆 평원에 자리한다.",
        },
      },
    ],
  },
  summary: {
    en: "Sanctuary of Zeus beside the Alpheius, where Pelops won a bride by rigged chariot race and left his name on the sea beyond it.",
    ko: "알페이오스강 옆 제우스의 성역. 펠롭스가 조작된 전차 경주로 신부를 얻고, 그 이름을 너머의 바다에 남긴 곳.",
  },
  tags: ["peloponnese", "pelops"],
  sources: [{ work: "Pindar", locus: "Olympian 1" }],
});
