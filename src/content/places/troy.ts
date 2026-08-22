import { definePlace } from "../schema";

export const troy = definePlace({
  id: "troy",
  kind: "city",
  coordinates: [26.2389, 39.9576],
  names: {
    primary: { en: "Troy", ko: "트로이" },
    ancient: "Ilion",
    variants: [
      { kind: "greek", value: "Ἴλιον" },
      { kind: "latin", value: "Ilium" },
      {
        kind: "alternate",
        value: { en: "Troia", ko: "트로이아" },
        note: {
          en: "After Tros, great-grandfather of Priam; Ilion comes from his son Ilus. Homer uses both names for the same city.",
          ko: "프리아모스의 증조부 트로스에서 유래했다. 일리온은 그의 아들 일로스에서 왔다. 호메로스는 같은 도시를 두 이름으로 부른다.",
        },
      },
      {
        kind: "epithet",
        value: { en: "well-walled Ilion", ko: "성벽 높은 일리온" },
        note: {
          en: "The walls were built by Poseidon and Apollo in servitude to King Laomedon.",
          ko: "포세이돈과 아폴론이 라오메돈 왕에게 사역하며 쌓아 올린 성벽.",
        },
      },
      { kind: "modern", value: { en: "Hisarlık", ko: "히사를륵" } },
    ],
  },
  rulerId: "priam",
  rulerTitle: { en: "King of Troy", ko: "트로이의 왕" },
  summary: {
    en: "Priam's walled city on the Hellespont, besieged for ten years and taken at last by a wooden horse.",
    ko: "헬레스폰토스를 굽어보는 프리아모스의 성벽 도시. 10년의 포위 끝에 목마에 무너졌다.",
  },
  tags: ["trojan-war", "anatolia"],
  sources: [{ work: "Iliad" }, { work: "Aeneid", locus: "2" }],
});
