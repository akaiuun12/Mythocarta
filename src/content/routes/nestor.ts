import { defineRoute } from "../schema";

/**
 * The Nostos of Nestor — the counter-example to the Odyssey.
 *
 * Nestor tells this voyage to Telemachus himself: he left early, kept west of
 * Lesbos, took the open crossing from Geraestus, and lost nothing. The track
 * rounds Cape Malea and the two Laconian capes rather than cutting across the
 * Peloponnese.
 */
export const nestor = defineRoute({
  id: "nestor",
  figureId: "nestor",
  title: { en: "The Homecoming of Nestor", ko: "네스토르의 귀향" },
  summary: {
    en: "The one clean voyage home: no god offended, no ship lost, told to Telemachus over dinner.",
    ko: "유일하게 깨끗했던 귀향. 노하게 한 신도, 잃은 배도 없었다. 텔레마코스에게 저녁상에서 들려준 이야기.",
  },
  color: "#b45309",
  icon: "sail",
  path: [
    // ── Out of the Troad past Tenedos, then west of Lesbos
    [26.2389, 39.9576],
    [26.14, 39.93],
    [26.1, 39.89],
    [26.03, 39.83],
    [25.9, 39.6],
    [25.7, 39.35],
    // ── The open crossing: Lesbos to the southern cape of Euboea in one run
    [25.45, 39.0],
    [25.15, 38.6],
    [24.9, 38.3],
    [24.75, 38.05],
    [24.55, 37.98],
    // ── South-west through the Cyclades gap and round the Laconian capes
    [24.3, 37.7],
    [24.0, 37.35],
    [23.65, 37.0],
    [23.4, 36.7],
    [23.25, 36.5],
    [22.95, 36.35],
    [22.65, 36.3],
    [22.48, 36.39],
    // ── Across the Messenian Gulf, round Cape Akritas, north to sandy Pylos
    [22.3, 36.45],
    [22.0, 36.55],
    [21.85, 36.65],
    [21.68, 36.78],
    [21.62, 36.95],
    [21.6958, 37.0277],
  ],
  stops: [
    {
      id: "troy",
      placeId: "troy",
      coordinates: [26.2389, 39.9576],
      note: {
        en: "He did not stay for the quarrel over sacrifices. Half the fleet was still arguing on the beach when he pushed off.",
        ko: "제사를 둘러싼 다툼에 남아 있지 않았다. 그가 배를 밀어낼 때 함대의 절반은 아직 해변에서 언쟁 중이었다.",
      },
      sources: [{ work: "Odyssey", locus: "3.130-158" }],
    },
    {
      id: "tenedos",
      name: { en: "Tenedos", ko: "테네도스" },
      coordinates: [26.06, 39.82],
      note: {
        en: "Where the fleet sacrificed and the kings quarrelled. Nestor sailed on; Agamemnon stayed.",
        ko: "함대가 제사를 올리고 왕들이 다툰 곳. 네스토르는 계속 나아갔고, 아가멤논은 남았다.",
      },
      sources: [{ work: "Odyssey", locus: "3.159" }],
    },
    {
      id: "lesbos",
      name: { en: "Lesbos", ko: "레스보스" },
      coordinates: [25.6, 39.3],
      note: {
        en: "Here they debated the long way round Chios or the short cut across open water. They asked for a sign, and took the crossing.",
        ko: "키오스를 크게 돌 것인가, 먼바다를 가로지를 것인가를 두고 논쟁한 곳. 그들은 징조를 청했고, 가로지르는 길을 택했다.",
      },
      sources: [{ work: "Odyssey", locus: "3.169-175" }],
    },
    {
      id: "geraestus",
      name: { en: "Geraestus", ko: "게라이스토스" },
      coordinates: [24.55, 38.0],
      note: {
        en: "The southern cape of Euboea, reached in a night and a day. They burned bulls' thighs to Poseidon for the crossing.",
        ko: "하루 밤낮 만에 닿은 에우보이아 남단의 곶. 무사한 항해에 감사하며 포세이돈에게 황소 넓적다리를 태워 바쳤다.",
      },
      sources: [{ work: "Odyssey", locus: "3.177-179" }],
    },
    {
      id: "cape-malea-nestor",
      name: { en: "Cape Malea", ko: "말레아 곶" },
      coordinates: [23.25, 36.5],
      note: {
        en: "The same headland that cost Odysseus ten years. Nestor rounded it with a fair wind.",
        ko: "오디세우스에게 10년을 치르게 한 바로 그 곶. 네스토르는 순풍을 타고 돌았다.",
      },
    },
    {
      id: "tainaron",
      name: { en: "Cape Tainaron", ko: "타이나론 곶" },
      coordinates: [22.48, 36.39],
      note: {
        en: "The southernmost point of the mainland, and one of the mouths of the underworld.",
        ko: "본토의 최남단이자 저승으로 통하는 입구 중 하나.",
      },
    },
    {
      id: "pylos",
      placeId: "pylos",
      coordinates: [21.6958, 37.0277],
      note: {
        en: "Home with every ship and every man, which no other king could say. He was still sacrificing on that beach when Telemachus arrived years later.",
        ko: "배 한 척, 사람 하나 잃지 않고 돌아왔다. 다른 어떤 왕도 하지 못한 말이다. 여러 해 뒤 텔레마코스가 닿았을 때도 그는 여전히 그 해변에서 제사를 올리고 있었다.",
      },
      sources: [{ work: "Odyssey", locus: "3.180-183" }],
    },
  ],
  sources: [{ work: "Odyssey", locus: "3.130-200" }],
});
