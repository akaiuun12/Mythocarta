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
    [26.2389, 39.9576],
    [26.0, 39.65],
    [25.7, 39.3],
    [25.3, 38.9],
    [24.95, 38.45],
    [24.6, 38.05],
    [24.35, 37.75],
    [24.05, 37.45],
    [23.7, 37.25],
    [23.35, 37.15],
    [23.15, 37.05],
    [22.95, 36.95],
    [22.95, 37.15],
    [22.88, 37.35],
    [22.83, 37.5],
    [22.81, 37.56],
    [22.7561, 37.7308],
  ],
  stops: [
    { id: "troy", placeId: "troy", coordinates: [26.2389, 39.9576] },
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
    { id: "mycenae", placeId: "mycenae", coordinates: [22.7561, 37.7308] },
  ],
  sources: [{ work: "Odyssey", locus: "4.512-537" }, { work: "Agamemnon" }],
});
