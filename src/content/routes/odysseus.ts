import { defineRoute } from "../schema";

/**
 * The Nostos of Odysseus.
 *
 * Control points follow open water and real straits — out of the Hellespont,
 * south through the Aegean, driven past Cape Malea into the Libyan Sea, up
 * through the Strait of Messina (twice), and home across the Ionian. The
 * renderer smooths these into a curve, so the track reads as a sailed course
 * rather than a ruler line between landfalls.
 *
 * Locations of the mythic islands follow the traditional identifications of
 * the ancient geographers; Homer names no coordinates.
 */
export const odysseus = defineRoute({
  id: "odysseus",
  figureId: "odysseus",
  title: { en: "The Return of Odysseus", ko: "오디세우스의 귀향" },
  summary: {
    en: "Ten years from Troy to Ithaca, by way of every island that did not want to let him leave.",
    ko: "트로이에서 이타카까지 10년. 그를 놓아주려 하지 않은 모든 섬을 거쳐서.",
  },
  color: "#0e7490",
  icon: "odyssey",
  path: [
    // ── Troy to Thrace: out past Cape Helles, north of Imbros and Samothrace
    [26.2389, 39.9576],
    [26.16, 40.02],
    [26.1, 40.22],
    [25.9, 40.42],
    [25.65, 40.56],
    [25.6, 40.75],
    [25.55, 40.86],
    // ── Back out and south down the open Aegean, east of Euboea
    [25.45, 40.6],
    [25.3, 40.2],
    [25.15, 39.7],
    [24.8, 39.2],
    [24.55, 38.6],
    [24.75, 38.1],
    [24.55, 37.7],
    [24.2, 37.3],
    [23.8, 36.9],
    [23.45, 36.6],
    [23.25, 36.5],
    [23.0181, 36.2514],
    // ── Driven off Malea, past Cythera, west of Crete and along the Libyan shore
    [22.8, 36.1],
    [22.0, 35.6],
    [20.5, 34.9],
    [18.0, 34.2],
    [15.5, 33.8],
    [13.0, 33.4],
    [11.8, 33.5],
    [11.1, 33.7],
    [10.85, 33.82],
    // ── North to Sicily, round Cape Passero and up the Ionian coast
    [11.5, 34.2],
    [12.0, 35.3],
    [12.6, 36.2],
    [13.4, 36.6],
    [14.2, 36.6],
    [15.0, 36.55],
    [15.3, 36.85],
    [15.35, 37.15],
    [15.3, 37.45],
    [15.25, 37.6],
    [15.4, 37.9],
    [15.62, 38.24],
    // ── Through the strait into the Tyrrhenian, out to Lipari
    [15.4, 38.42],
    [15.05, 38.5],
    [14.95, 38.48],
    // ── Blown north-west to the Strait of Bonifacio
    [14.5, 38.9],
    [13.6, 39.7],
    [12.4, 40.5],
    [11.2, 41.0],
    [10.2, 41.25],
    [9.6, 41.3],
    [9.25, 41.35],
    // ── Back east across the Tyrrhenian, hugging the Latian shore to Circeo
    [9.8, 41.55],
    [11.0, 41.7],
    [12.0, 41.6],
    [12.7, 41.35],
    [13.08, 41.24],
    // ── Down the Gulf of Gaeta, past Ischia and Capri to Li Galli
    [13.3, 41.15],
    [13.7, 40.95],
    [14.0, 40.7],
    [14.32, 40.53],
    [14.43, 40.58],
    // ── South along the Cilento and Calabrian coasts to the strait again
    [14.7, 40.35],
    [15.0, 40.0],
    [15.4, 39.6],
    [15.6, 39.1],
    [15.7, 38.6],
    [15.62, 38.24],
    // ── Down Sicily's eastern seaboard and out to Ogygia
    [15.35, 37.95],
    [15.3, 37.5],
    [15.25, 37.1],
    [15.2, 36.7],
    [14.9, 36.35],
    [14.4, 36.1],
    [14.25, 36.05],
    // ── The Phaeacian crossing north-east to Scheria, then home
    [14.9, 36.3],
    [15.8, 36.8],
    [16.8, 37.4],
    [18.0, 38.1],
    [19.2, 38.9],
    [19.55, 39.25],
    [19.85, 39.6],
    [20.0, 39.3],
    [20.3, 39.0],
    [20.45, 38.7],
    [20.45, 38.45],
    [20.62, 38.55],
    [20.78, 38.45],
    [20.7191, 38.367],
  ],
  stops: [
    {
      id: "troy",
      placeId: "troy",
      coordinates: [26.2389, 39.9576],
      note: {
        en: "Twelve ships pushed off the beach below the ruined city, crewed by men who all expected to be home before the autumn.",
        ko: "무너진 도시 아래 해변에서 열두 척이 배를 밀어냈다. 선원들은 모두 가을 전에 집에 닿으리라 믿었다.",
      },
      sources: [{ work: "Odyssey", locus: "9.39" }],
    },
    {
      id: "ismaros",
      name: { en: "Ismaros", ko: "이스마로스" },
      coordinates: [25.55, 40.86],
      note: {
        en: "The Cicones' town, sacked on the way home. His men would not leave the wine, and paid for it at dawn.",
        ko: "귀향길에 약탈한 키코네스인의 마을. 부하들이 포도주를 두고 떠나지 않다가 새벽에 대가를 치렀다.",
      },
      sources: [{ work: "Odyssey", locus: "9.39-61" }],
    },
    {
      id: "cape-malea",
      name: { en: "Cape Malea", ko: "말레아 곶" },
      coordinates: [23.25, 36.5],
      note: {
        en: "The turn for home. The north wind took him here and the known world ended.",
        ko: "고향으로 꺾어야 할 지점. 북풍이 그를 붙잡았고, 여기서 아는 세계가 끝났다.",
      },
      sources: [{ work: "Odyssey", locus: "9.80" }],
    },
    {
      id: "cythera",
      name: { en: "Cythera (Kythira)", ko: "키테라" },
      coordinates: [23.0181, 36.2514],
      note: {
        en: "Blown off course while rounding Cape Malea, Odysseus was driven past Cythera before nine days of storm carried him to the Lotus-Eaters.",
        ko: "말레아 곶을 돌던 중 역풍에 밀린 오디세우스는 키테라를 지나 항로에서 벗어났고, 아흐레 동안 표류한 끝에 로토파고이의 땅에 닿았다.",
      },
      sources: [{ work: "Odyssey", locus: "9.80-84" }],
    },
    {
      id: "lotus-eaters",
      name: { en: "Land of the Lotus-Eaters", ko: "로토파고이의 땅" },
      coordinates: [10.85, 33.82],
      note: {
        en: "Whoever ate the honey-sweet fruit forgot the way home. He dragged them back to the ships in tears.",
        ko: "꿀처럼 단 열매를 먹은 자는 귀향길을 잊었다. 그는 우는 부하들을 배로 끌고 왔다.",
      },
      sources: [{ work: "Odyssey", locus: "9.82-104" }],
    },
    {
      id: "cyclopes",
      name: { en: "Island of the Cyclopes", ko: "키클롭스의 섬" },
      coordinates: [15.25, 37.6],
      note: {
        en: "Polyphemus' cave. \"Nobody\" blinded him, and his father Poseidon spent ten years collecting the debt.",
        ko: "폴리페모스의 동굴. '아무도아닌자'가 그를 눈멀게 했고, 그의 아버지 포세이돈이 10년에 걸쳐 빚을 받아냈다.",
      },
      sources: [{ work: "Odyssey", locus: "9.105-566" }],
    },
    {
      id: "aeolia",
      name: { en: "Aeolia", ko: "아이올리아" },
      coordinates: [14.95, 38.48],
      note: {
        en: "Aeolus bagged every wind but the west. Within sight of Ithaca, the crew opened the bag.",
        ko: "아이올로스가 서풍만 남기고 모든 바람을 자루에 묶었다. 이타카가 보이는 곳에서 선원들이 자루를 열었다.",
      },
      sources: [{ work: "Odyssey", locus: "10.1-79" }],
    },
    {
      id: "laestrygonians",
      name: { en: "Telepylos of the Laestrygonians", ko: "라이스트리고네스의 텔레퓔로스" },
      coordinates: [9.25, 41.35],
      note: {
        en: "Giants speared his men like fish and crushed eleven of twelve ships in the harbour.",
        ko: "거인들이 부하들을 물고기처럼 작살로 꿰고, 항구에서 열두 척 중 열한 척을 부쉈다.",
      },
      sources: [{ work: "Odyssey", locus: "10.80-132" }],
    },
    {
      id: "aeaea",
      name: { en: "Aeaea — Circe's Isle", ko: "아이아이에 — 키르케의 섬" },
      coordinates: [13.08, 41.24],
      note: {
        en: "She turned his crew to swine; he stayed a year. From here she sent him to the edge of the dead.",
        ko: "그녀가 부하들을 돼지로 바꾸었고, 그는 한 해를 머물렀다. 그녀는 여기서 그를 죽은 자들의 경계로 보냈다.",
      },
      sources: [{ work: "Odyssey", locus: "10.133-574" }],
    },
    {
      id: "sirens",
      name: { en: "Isle of the Sirens", ko: "세이렌의 섬" },
      coordinates: [14.43, 40.58],
      note: {
        en: "Wax in their ears, rope round his mast — the only man to hear the song and keep going.",
        ko: "부하들의 귀에는 밀랍을, 자신은 돛대에 묶고서. 그 노래를 듣고도 계속 나아간 유일한 사람.",
      },
      sources: [{ work: "Odyssey", locus: "12.165-200" }],
    },
    {
      id: "scylla-charybdis",
      name: { en: "Scylla and Charybdis", ko: "스킬라와 카립디스" },
      coordinates: [15.62, 38.24],
      note: {
        en: "Six men for the six-headed rock, or the whole ship for the whirlpool. He chose the six.",
        ko: "여섯 머리의 바위에 여섯 사람을 내주거나, 소용돌이에 배 전체를 내주거나. 그는 여섯을 택했다.",
      },
      sources: [{ work: "Odyssey", locus: "12.201-259" }],
    },
    {
      id: "thrinacia",
      name: { en: "Thrinacia", ko: "트리나키아" },
      coordinates: [15.25, 37.12],
      note: {
        en: "The cattle of Helios, which they were told not to touch. Starving, they touched them. Zeus took the last ship.",
        ko: "손대지 말라 경고받은 헬리오스의 소 떼. 굶주린 그들이 손을 댔고, 제우스가 마지막 배를 앗아갔다.",
      },
      sources: [{ work: "Odyssey", locus: "12.260-419" }],
    },
    {
      id: "ogygia",
      name: { en: "Ogygia — Calypso's Isle", ko: "오귀기아 — 칼립소의 섬" },
      coordinates: [14.25, 36.05],
      note: {
        en: "Seven years, offered immortality, refusing it. He sat on the shore and looked at the water.",
        ko: "7년. 불멸을 제안받고도 거절했다. 그는 바닷가에 앉아 물을 바라보았다.",
      },
      sources: [{ work: "Odyssey", locus: "5.13-268" }],
    },
    {
      id: "scheria",
      name: { en: "Scheria — the Phaeacians", ko: "스케리아 — 파이아케스인의 땅" },
      coordinates: [19.85, 39.6],
      note: {
        en: "Nausicaa found him naked in the surf. Her people heard the whole story and sailed him home asleep.",
        ko: "나우시카가 파도 속 벌거벗은 그를 발견했다. 그들은 이야기를 전부 듣고, 잠든 그를 배에 실어 고향에 내려놓았다.",
      },
      sources: [{ work: "Odyssey", locus: "6-13" }],
    },
    {
      id: "ithaca",
      placeId: "ithaca",
      coordinates: [20.7191, 38.367],
      note: {
        en: "The Phaeacians laid him in the harbour of Phorcys still asleep, with his treasure stacked beside him. Alone of twelve ships' companies, he had come home.",
        ko: "파이아케스인들은 잠든 그를 보물과 함께 포르퀴스 항구에 내려놓았다. 열두 척의 선원 가운데 홀로 고향에 닿았다.",
      },
      sources: [{ work: "Odyssey", locus: "13.93-125" }],
    },
  ],
  sources: [{ work: "Odyssey" }],
});
