import { defineRoute } from "../schema";

/**
 * The Telemachy — Odyssey 1-4 and 15.
 *
 * The one voyage in this atlas that is not a homecoming: a boy leaves home to
 * find out whether he still has a father. It is also the only route with a
 * genuine overland stage, so it is the reason `landPaths` exists — the run
 * from Pylos to Sparta was made by chariot, over two days, with a night at
 * Pherae in between, and it is drawn dashed rather than sailed.
 *
 * The return keeps west of Zakynthos and Kefalonia and comes at Ithaca from
 * the open sea, because Athena warned him that the suitors were waiting in the
 * strait — the detour is the point of the leg, not a smoothing artefact.
 */
export const telemachus = defineRoute({
  id: "telemachus",
  figureId: "telemachus",
  title: { en: "The Journey of Telemachus", ko: "텔레마코스의 여정" },
  summary: {
    en: "A son sails out to ask after a father he has never met, and comes home past the ambush laid for him.",
    ko: "한 번도 본 적 없는 아버지의 소식을 물으러 떠난 아들. 그를 노린 매복을 피해 돌아온다.",
  },
  color: "#6d28d9",
  icon: "chariot",
  path: [
    // ── Out of Vathy after dark, east of Ithaca and down the Ionian
    [20.7191, 38.367],
    [20.79, 38.42],
    [20.88, 38.28],
    [20.98, 38.05],
    [21.05, 37.82],
    [21.18, 37.55],
    [21.38, 37.28],
    [21.58, 37.1],
    [21.6958, 37.0277],
    // ── Home the long way: outside Zakynthos and Kefalonia, clear of Asteris
    [21.6, 37.06],
    [21.4, 37.26],
    [21.15, 37.55],
    [21.0, 37.7],
    [20.9, 37.6],
    [20.6, 37.6],
    [20.38, 37.85],
    [20.28, 38.1],
    [20.3, 38.32],
    [20.45, 38.5],
    [20.65, 38.57],
    [20.82, 38.48],
    [20.84, 38.38],
    [20.78, 38.34],
    [20.7191, 38.367],
  ],
  /**
   * The chariot road across Messenia, travelled once out and once back:
   * Pylos to Pherae in a day, Pherae to Lacedaemon in another.
   */
  landPaths: [
    [
      [21.6958, 37.0277],
      [21.82, 37.03],
      [21.98, 37.01],
      [22.11, 37.04],
      [22.25, 37.06],
      [22.4297, 37.0741],
    ],
  ],
  stops: [
    {
      id: "ithaca-departure",
      placeId: "ithaca",
      coordinates: [20.7191, 38.367],
      note: {
        en: "He took a ship and a crew at nightfall without telling his mother, Athena at the steering oar in the shape of Mentor.",
        ko: "어머니에게 알리지도 않고 해질녘에 배와 선원을 구해 떠났다. 멘토르의 모습을 한 아테나가 키를 잡았다.",
      },
      sources: [{ work: "Odyssey", locus: "2.382-434" }],
    },
    {
      id: "pylos",
      placeId: "pylos",
      coordinates: [21.6958, 37.0277],
      note: {
        en: "He made landfall on a beach where Nestor's people were burning eighty-one bulls to Poseidon, and was handed a cup before anyone asked his name.",
        ko: "네스토르의 백성이 포세이돈에게 황소 여든한 마리를 태워 바치던 해변에 닿았다. 이름을 묻기도 전에 술잔부터 건네받았다.",
      },
      sources: [{ work: "Odyssey", locus: "3.4-66" }],
    },
    {
      id: "pherae",
      name: { en: "Pherae", ko: "페라이" },
      coordinates: [22.11, 37.04],
      note: {
        en: "The halfway house on the chariot road, where Diocles put them up for the night. Two days out, two days back.",
        ko: "전차길의 중간 기착지. 디오클레스가 하룻밤을 재워주었다. 가는 데 이틀, 오는 데 이틀.",
      },
      sources: [{ work: "Odyssey", locus: "3.488-490" }],
    },
    {
      id: "sparta",
      placeId: "sparta",
      coordinates: [22.4297, 37.0741],
      note: {
        en: "Menelaus knew him by his weeping. Helen drugged the wine so the table could bear the stories, and Menelaus reported what Proteus had told him: Odysseus was alive, held on an island by a nymph.",
        ko: "메넬라오스는 그의 눈물을 보고 누구인지 알아차렸다. 헬레네가 포도주에 약을 타 이야기를 견딜 수 있게 했고, 메넬라오스는 프로테우스에게 들은 것을 전했다. 오디세우스는 살아 있으며, 어느 요정이 섬에 붙들어두고 있다고.",
      },
      sources: [{ work: "Odyssey", locus: "4.116-570" }],
    },
    {
      id: "asteris",
      name: { en: "Asteris — the ambush", ko: "아스테리스 — 매복" },
      coordinates: [20.63, 38.38],
      note: {
        en: "Twenty suitors lay in the strait with a fast ship, waiting to kill him on the way in. Athena told him to sail wide of the islands and come ashore at night.",
        ko: "구혼자 스무 명이 빠른 배를 대고 해협에 숨어 그를 죽이려 기다렸다. 아테나는 섬들을 크게 돌아 밤에 상륙하라고 일렀다.",
      },
      sources: [{ work: "Odyssey", locus: "4.842-847" }, { work: "Odyssey", locus: "15.27-35" }],
    },
    {
      id: "ithaca-return",
      placeId: "ithaca",
      coordinates: [20.7191, 38.367],
      note: {
        en: "He put in away from the town and went up to the swineherd's hut — where a beggar was sitting by the fire, and stood up, and was his father.",
        ko: "마을에서 떨어진 곳에 배를 대고 돼지치기의 오두막으로 올라갔다. 불가에 앉아 있던 거지가 일어섰고, 그가 아버지였다.",
      },
      sources: [{ work: "Odyssey", locus: "16.1-219" }],
    },
  ],
  sources: [{ work: "Odyssey", locus: "1-4" }, { work: "Odyssey", locus: "15-16" }],
});
