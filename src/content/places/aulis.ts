import { definePlace } from "../schema";

export const aulis = definePlace({
  id: "aulis",
  kind: "landmark",
  coordinates: [23.5936, 38.4021],
  names: {
    primary: { en: "Aulis", ko: "아울리스" },
    ancient: "Aulis",
    variants: [{ kind: "greek", value: "Αὐλίς" }],
  },
  summary: {
    en: "The Boeotian strait where a thousand ships sat becalmed until Agamemnon paid for a fair wind with his own daughter.",
    ko: "천 척의 배가 순풍 없이 발이 묶였던 보이오티아의 해협. 아가멤논은 자신의 딸로 그 바람의 값을 치렀다.",
  },
  tags: ["trojan-war", "boeotia"],
  sources: [{ work: "Iphigenia in Aulis" }],
});
