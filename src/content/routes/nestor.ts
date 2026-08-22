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
    [26.2389, 39.9576],
    [26.12, 39.9],
    [26.06, 39.82],
    [25.95, 39.55],
    [25.6, 39.3],
    [25.35, 38.9],
    [25.1, 38.5],
    [24.85, 38.2],
    [24.55, 38.0],
    [24.15, 37.5],
    [23.75, 37.0],
    [23.4, 36.65],
    [23.25, 36.5],
    [22.9, 36.3],
    [22.6, 36.32],
    [22.48, 36.39],
    [22.15, 36.45],
    [21.95, 36.6],
    [21.88, 36.72],
    [21.72, 36.85],
    [21.6958, 37.0277],
  ],
  stops: [
    { id: "troy", placeId: "troy", coordinates: [26.2389, 39.9576] },
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
    { id: "pylos", placeId: "pylos", coordinates: [21.6958, 37.0277] },
  ],
  sources: [{ work: "Odyssey", locus: "3.130-200" }],
});
