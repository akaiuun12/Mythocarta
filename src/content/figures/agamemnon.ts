import { defineFigure } from "../schema";

export const agamemnon = defineFigure({
  id: "agamemnon",
  names: {
    primary: { en: "Agamemnon", ko: "아가멤논" },
    ancient: "Agamemnōn",
    variants: [
      { kind: "greek", value: "Ἀγαμέμνων" },
      {
        kind: "epithet",
        value: { en: "lord of men", ko: "인간들의 주인" },
        note: {
          en: "His standing title in the Iliad — anax andrōn, the commander to whom other kings answered.",
          ko: "일리아스에서 그의 고정 칭호. 아낙스 안드론, 다른 왕들이 복종해야 했던 총사령관.",
        },
      },
      {
        kind: "alternate",
        value: { en: "Atreides", ko: "아트레이데스" },
        note: {
          en: "\"Son of Atreus\" — the patronymic he shares with his brother Menelaus, and the curse he inherits with it.",
          ko: "'아트레우스의 아들'. 동생 메넬라오스와 공유하는 부칭이자, 함께 물려받은 저주.",
        },
      },
    ],
  },
  summary: {
    en: "Commander of the Achaean host at Troy, who sacrificed his daughter for a wind and was killed by his wife for it.",
    ko: "트로이 원정 아카이아군 총사령관. 순풍을 얻으려 딸을 제물로 바쳤고, 그 때문에 아내의 손에 죽었다.",
  },
  placeIds: ["mycenae", "troy"],
  tags: ["trojan-war", "atreidae"],
  sources: [{ work: "Iliad", locus: "1" }, { work: "Agamemnon" }],
});
