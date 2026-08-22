import { defineRoute } from "../schema";

/**
 * The Nostos of Agamemnon — the shortest voyage and the worst homecoming.
 *
 * The track passes Cape Kaphereus, where Nauplius lit false beacons to wreck
 * the returning fleet, then rounds the Argolid and turns north up the Argolic
 * Gulf to Nauplia, the port of Mycenae.
 */
export const agamemnon = defineRoute({
  id: "agamemnon",
  figureId: "agamemnon",
  title: { en: "The Return of Agamemnon", ko: "아가멤논의 귀환" },
  summary: {
    en: "He came home fastest of them all, walked a crimson carpet into his hall, and did not walk out.",
    ko: "누구보다 빨리 돌아와 진홍빛 융단을 밟고 궁전에 들어섰고, 다시 걸어 나오지 못했다.",
  },
  color: "#b91c1c",
  icon: "crown",
  path: [
    // ── The fast run down the Aegean, hugging Euboea's eastern flank
    [26.2389, 39.9576],
    [26.1, 39.88],
    [25.85, 39.55],
    [25.5, 39.1],
    [25.15, 38.65],
    [24.9, 38.3],
    [24.72, 38.1],
    [24.6, 38.05],
    // ── South of Attica, west across the Myrtoan Sea
    [24.35, 37.75],
    [24.05, 37.45],
    [23.7, 37.2],
    [23.35, 37.0],
    [23.1, 36.9],
    [22.95, 36.9],
    // ── North up the Argolic Gulf to the harbour of the Argolid
    [23.0, 37.05],
    [22.95, 37.2],
    [22.88, 37.4],
    [22.82, 37.53],
    [22.81, 37.56],
  ],
  /**
   * Mycenae is a citadel, not a port. The last stage of the shortest nostos was
   * walked, not sailed — up from the beach at Nauplia to the Lion Gate, on the
   * crimson cloth Clytemnestra had laid for him.
   */
  landPaths: [
    [
      [22.81, 37.56],
      [22.79, 37.63],
      [22.7561, 37.7308],
    ],
  ],
  stops: [
    {
      id: "troy",
      placeId: "troy",
      coordinates: [26.2389, 39.9576],
      note: {
        en: "He stayed behind to appease Athena with sacrifices, and still beat every other king home.",
        ko: "아테나를 달래려 제사를 올리느라 뒤에 남았고, 그러고도 어느 왕보다 먼저 고향에 닿았다.",
      },
      sources: [{ work: "Odyssey", locus: "3.143-147" }],
    },
    {
      id: "kaphereus",
      name: { en: "Cape Kaphereus", ko: "카페레우스 곶" },
      coordinates: [24.6, 38.05],
      note: {
        en: "Nauplius lit beacons on the cliffs to avenge his son Palamedes. Ships steered for the light and broke on the rocks.",
        ko: "나우플리오스가 아들 팔라메데스의 복수로 절벽에 봉화를 올렸다. 배들은 불빛을 향해 키를 돌리다 바위에 부서졌다.",
      },
      sources: [{ work: "Bibliotheca", locus: "Epitome 6.7-11" }],
    },
    {
      id: "nauplia",
      name: { en: "Nauplia", ko: "나우플리아" },
      coordinates: [22.81, 37.56],
      note: {
        en: "The harbour of the Argolid. A watchman had waited a year on the roof at Mycenae for this sail.",
        ko: "아르골리스의 항구. 미케네의 파수꾼이 이 돛을 보려고 한 해 동안 지붕 위에서 기다렸다.",
      },
      sources: [{ work: "Agamemnon", locus: "1-39" }],
    },
    {
      id: "mycenae",
      placeId: "mycenae",
      coordinates: [22.7561, 37.7308],
      note: {
        en: "The road up from the harbour, and a wife at the Lion Gate with crimson cloth spread over it. He walked in, and was killed in his bath before the evening was out.",
        ko: "항구에서 성채로 오르는 길 끝, 사자문 앞에 진홍빛 천을 깔아둔 아내가 서 있었다. 그는 걸어 들어갔고, 저녁이 저물기도 전에 욕실에서 살해되었다.",
      },
      sources: [{ work: "Agamemnon", locus: "905-974" }],
    },
  ],
  sources: [{ work: "Odyssey", locus: "4.512-537" }, { work: "Agamemnon" }],
});
