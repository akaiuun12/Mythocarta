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
    [26.2389, 39.9576],
    [26.05, 40.15],
    [25.9, 40.55],
    [25.55, 40.95],
    [25.25, 40.45],
    [24.9, 39.6],
    [24.5, 38.7],
    [24.2, 37.9],
    [23.85, 37.05],
    [23.25, 36.5],
    [22.3, 35.7],
    [20.5, 34.9],
    [18.0, 34.2],
    [15.5, 33.8],
    [13.0, 33.5],
    [11.6, 33.6],
    [10.85, 33.82],
    [11.4, 34.2],
    [11.9, 35.3],
    [12.4, 36.4],
    [13.3, 36.75],
    [14.4, 36.7],
    [15.2, 36.95],
    [15.35, 37.35],
    [15.25, 37.6],
    [15.5, 38.0],
    [15.62, 38.24],
    [15.25, 38.5],
    [14.95, 38.48],
    [14.2, 39.1],
    [12.9, 40.0],
    [11.2, 40.7],
    [9.9, 41.2],
    [9.25, 41.35],
    [9.9, 41.7],
    [11.2, 41.9],
    [12.4, 41.7],
    [13.08, 41.24],
    [13.6, 40.95],
    [14.05, 40.72],
    [14.43, 40.58],
    [14.9, 40.15],
    [15.2, 39.6],
    [15.5, 39.1],
    [15.7, 38.65],
    [15.62, 38.24],
    [15.35, 37.9],
    [15.28, 37.5],
    [15.15, 37.15],
    [15.0, 36.75],
    [14.6, 36.3],
    [14.25, 36.05],
    [15.3, 36.55],
    [16.8, 37.3],
    [18.2, 38.2],
    [19.35, 39.1],
    [19.85, 39.6],
    [20.15, 39.15],
    [20.5, 38.75],
    [20.7191, 38.367],
  ],
  stops: [
    { id: "troy", placeId: "troy", coordinates: [26.2389, 39.9576] },
    {
      id: "ismaros",
      name: { en: "Ismaros", ko: "이스마로스" },
      coordinates: [25.55, 40.95],
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
      coordinates: [15.15, 37.15],
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
    { id: "ithaca", placeId: "ithaca", coordinates: [20.7191, 38.367] },
  ],
  sources: [{ work: "Odyssey" }],
});
