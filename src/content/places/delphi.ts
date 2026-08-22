import { definePlace } from "../schema";

export const delphi = definePlace({
  id: "delphi",
  kind: "sanctuary",
  coordinates: [22.501, 38.4824],
  names: {
    primary: { en: "Delphi", ko: "델포이" },
    ancient: "Delphoi",
    variants: [
      { kind: "greek", value: "Δελφοί" },
      {
        kind: "alternate",
        value: { en: "Pytho", ko: "피토" },
        note: {
          en: "The older name, from the serpent Python that Apollo killed here and left to rot — pythein, 'to rot'.",
          ko: "더 오래된 이름. 아폴론이 이곳에서 죽여 썩게 내버려 둔 뱀 피톤에서 왔다. '썩다'를 뜻하는 pythein에서 유래한다.",
        },
        sources: [{ work: "Homeric Hymn to Apollo" }],
      },
      {
        kind: "epithet",
        value: { en: "navel of the world", ko: "세계의 배꼽" },
        note: {
          en: "Zeus loosed two eagles from opposite ends of the earth; they met here, and the omphalos stone marks the spot.",
          ko: "제우스가 땅의 양 끝에서 독수리 두 마리를 날렸고 이곳에서 만났다. 옴팔로스 돌이 그 자리를 표시한다.",
        },
      },
    ],
  },
  rulerId: "pythia",
  rulerTitle: { en: "Oracle of Apollo", ko: "아폴론의 신탁 사제" },
  summary: {
    en: "Apollo's sanctuary beneath Parnassus, where the Pythia breathed the earth's vapours and answered in riddles.",
    ko: "파르나소스 산 아래 아폴론의 성역. 피티아가 땅의 증기를 들이마시고 수수께끼로 답하던 곳.",
  },
  tags: ["oracle", "apollo", "phocis"],
  sources: [{ work: "Histories", locus: "Herodotus 1.46-55" }],
});
