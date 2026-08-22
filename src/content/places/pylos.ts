import { definePlace } from "../schema";

export const pylos = definePlace({
  id: "pylos",
  kind: "city",
  coordinates: [21.6958, 37.0277],
  names: {
    primary: { en: "Pylos", ko: "필로스" },
    ancient: "Pylos",
    variants: [
      { kind: "greek", value: "Πύλος" },
      {
        kind: "epithet",
        value: { en: "sandy Pylos", ko: "모래의 필로스" },
        note: {
          en: "Homer's fixed epithet for Nestor's kingdom, for the long beach where his ships were drawn up.",
          ko: "네스토르의 왕국에 붙은 호메로스의 고정 수식어. 배들을 끌어올리던 긴 모래 해변에서 왔다.",
        },
        sources: [{ work: "Odyssey", locus: "1.93" }],
      },
      {
        kind: "modern",
        value: { en: "Palace of Nestor, Ano Englianos", ko: "아노 엥글리아노스의 네스토르 궁전" },
      },
    ],
  },
  rulerId: "nestor",
  rulerTitle: { en: "King of Pylos", ko: "필로스의 왕" },
  summary: {
    en: "Seat of Nestor, oldest and most persuasive of the Greek kings, who outlived three generations of men.",
    ko: "세 세대를 살아낸 그리스 왕들 중 가장 늙고 가장 설득력 있는 네스토르의 근거지.",
  },
  tags: ["trojan-war", "peloponnese", "odyssey"],
  sources: [{ work: "Odyssey", locus: "3" }],
});
