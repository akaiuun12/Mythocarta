import { defineRoute } from "../schema";

/**
 * The Wanderings of Menelaus — Odyssey 3.276-312 and 4.351-586.
 *
 * The counter-example to Nestor's clean run home: the same storm off Cape
 * Malea that Nestor outran scatters Menelaus instead, wrecking part of his
 * fleet on Crete and driving the rest to Egypt. What follows is eight years
 * loose in the eastern Mediterranean before Proteus, wrestled into telling the
 * truth on the beach at Pharos, gives him the one instruction that gets him
 * home: sail back up the Nile and pay the gods what he owes them.
 *
 * Gythium stands in for the coast at the mouth of the Eurotas — Sparta itself
 * is inland, so the last stage is walked, exactly as it is for Telemachus and
 * Agamemnon.
 */
export const menelaus = defineRoute({
  id: "menelaus",
  figureId: "menelaus",
  title: { en: "The Wanderings of Menelaus", ko: "메넬라오스의 방랑" },
  summary: {
    en: "Driven off course at Malea and scattered as far as Egypt, he spent eight years among strangers before the Old Man of the Sea told him how to get home.",
    ko: "말레아 곶에서 항로를 벗어나 이집트까지 밀려간 그는, 바다의 노인이 귀향법을 일러주기 전까지 8년을 낯선 땅에서 떠돌았다.",
  },
  color: "#1d4ed8",
  icon: "wave",
  path: [
    // ── Troy down the open Aegean toward the turn for home
    [26.2389, 39.9576],
    [26.1, 39.85],
    [25.7, 39.4],
    [25.3, 38.7],
    [24.9, 38.0],
    [24.6, 37.3],
    [23.9, 36.8],
    [23.25, 36.5],
    // ── Zeus's storm drives the fleet south onto Crete's cliffs
    [23.0, 35.8],
    [24.0, 35.3],
    [24.75, 34.92],
    // ── The surviving five ships are carried on to the Nile
    [25.5, 34.3],
    [27.0, 33.2],
    [28.5, 32.0],
    [29.885, 31.4],
    // ── Eight years among the Cyprians, Phoenicians and Libyans
    [31.5, 32.0],
    [33.0, 33.6],
    [33.6, 34.7],
    [34.5, 34.2],
    [35.37, 33.56],
    [33.0, 32.0],
    [28.0, 31.5],
    [23.0, 32.4],
    [19.5, 32.6],
    [24.0, 31.9],
    [27.0, 31.4],
    // ── Becalmed at Pharos, then home the way he came
    [29.87, 31.22],
    [27.0, 32.2],
    [24.0, 33.6],
    [23.4, 35.2],
    [23.1, 36.1],
    [22.9, 36.35],
    [22.7, 36.5],
    [22.6, 36.62],
    [22.566, 36.746],
  ],
  /** Gythium is a harbour, not the citadel — the last stretch to Sparta was walked. */
  landPaths: [
    [
      [22.566, 36.746],
      [22.5, 36.85],
      [22.4297, 37.0741],
    ],
  ],
  stops: [
    {
      id: "troy-menelaus",
      placeId: "troy",
      coordinates: [26.2389, 39.9576],
      note: {
        en: "He and Agamemnon quarrelled over when to sail. Menelaus left with the ships that would go, not the ones that would wait.",
        ko: "언제 배를 띄울지를 두고 아가멤논과 다퉜다. 메넬라오스는 기다리려는 배가 아니라 떠나려는 배들과 함께 출발했다.",
      },
      sources: [{ work: "Odyssey", locus: "3.130-183" }],
    },
    {
      id: "cape-malea-menelaus",
      name: { en: "Cape Malea", ko: "말레아 곶" },
      coordinates: [23.25, 36.5],
      note: {
        en: "The same headland Nestor rounded clean. For Menelaus, Zeus sent a shrieking wind that split the fleet in two.",
        ko: "네스토르는 무사히 돌았던 바로 그 곶. 메넬라오스에게는 제우스가 울부짖는 바람을 보내 함대를 둘로 갈랐다.",
      },
      sources: [{ work: "Odyssey", locus: "3.286-289" }],
    },
    {
      id: "crete-wreck",
      name: { en: "The Cliffs of Gortyn", ko: "고르튀스의 절벽" },
      coordinates: [24.75, 34.92],
      note: {
        en: "A wave threw part of the fleet onto the rocks where the Iardanus meets the sea. The crews survived; the ships did not.",
        ko: "파도가 함대 일부를 이아르다노스강이 바다와 만나는 바위 위로 내던졌다. 선원들은 살아남았지만 배는 그렇지 못했다.",
      },
      sources: [{ work: "Odyssey", locus: "3.291-300" }],
    },
    {
      id: "egypt",
      name: { en: "The Mouth of the Nile", ko: "나일강 하구" },
      coordinates: [29.885, 31.4],
      note: {
        en: "Five ships made it no further than Egypt, carried there by the same wind that wrecked the rest.",
        ko: "다섯 척은 나머지를 부순 그 바람에 실려 이집트에서 더 나아가지 못했다.",
      },
      sources: [{ work: "Odyssey", locus: "3.300-302" }],
    },
    {
      id: "wanderings",
      name: { en: "Cyprus, Phoenicia, and Libya", ko: "키프로스, 페니키아, 리비아" },
      coordinates: [33.6, 34.7],
      note: {
        en: "Eight years gathering gold among Cyprians, Phoenicians, Egyptians, Ethiopians, and Libyans, where the ewes lamb three times a year.",
        ko: "키프로스인, 페니키아인, 이집트인, 에티오피아인, 그리고 암양이 한 해에 세 번 새끼를 낳는다는 리비아인들 사이를 8년간 떠돌며 황금을 모았다.",
      },
      sources: [{ work: "Odyssey", locus: "4.81-91" }],
    },
    {
      id: "pharos",
      name: { en: "Pharos — Proteus's Isle", ko: "파로스 — 프로테우스의 섬" },
      coordinates: [29.87, 31.22],
      note: {
        en: "No wind for twenty days, his men reduced to fishing to eat. Eidothea told him to pin her father Proteus in his sleep and hold on through every shape he took. What he learned: Agamemnon murdered at his own table, Ajax drowned for his pride, and the road home ran back up the Nile with sacrifices for the gods he had shorted.",
        ko: "이십 일 동안 바람이 없어 부하들은 낚시로 연명해야 했다. 에이도테아는 잠든 아버지 프로테우스를 붙잡고 그가 변신하는 모든 모습을 견디라 일렀다. 그렇게 알아낸 것: 아가멤논은 자신의 식탁에서 살해당했고, 아이아스는 오만함으로 익사했으며, 귀향길은 소홀히 한 신들에게 제물을 바치러 나일강을 거슬러 올라가는 데서 다시 시작된다는 것.",
      },
      sources: [{ work: "Odyssey", locus: "4.351-586" }],
    },
    {
      id: "sparta-menelaus",
      placeId: "sparta",
      coordinates: [22.4297, 37.0741],
      note: {
        en: "He came home the very day Orestes was holding the funeral feast for the mother he had killed and the man beside her.",
        ko: "그가 고향에 닿은 바로 그날, 오레스테스는 자신이 죽인 어머니와 그 곁의 남자를 위한 장례 잔치를 치르고 있었다.",
      },
      sources: [{ work: "Odyssey", locus: "3.311-312" }],
    },
  ],
  sources: [{ work: "Odyssey", locus: "3.276-312" }, { work: "Odyssey", locus: "4.351-586" }],
});
