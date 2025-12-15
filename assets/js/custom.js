console.log("custom.js loaded!");

// 랜덤 음악 목록
const songs = [
  { title: "Love Dive", artist: "IVE" },
  { title: "Ditto", artist: "NewJeans" },
  { title: "Hype Boy", artist: "NewJeans" },
  { title: "Seven", artist: "Jungkook" },
  { title: "OMG", artist: "NewJeans" },
  { title: "Spicy", artist: "aespa" },
  { title: "Super Shy", artist: "NewJeans" },
  { title: "ANTIFRAGILE", artist: "LE SSERAFIM" },
  { title: "Queencard", artist: "(G)I-DLE" },
  { title: "사랑은 늘 도망가", artist: "임영웅" }
];

// 랜덤 추천 실행 함수
function showRandomMusic(openYoutube = false) {
  const titleBox = document.getElementById("music-title");
  if (!titleBox) return;

  const song = songs[Math.floor(Math.random() * songs.length)];

  titleBox.innerHTML =
    `<span style="color:#333">${song.artist}</span> - ${song.title}`;

  if (openYoutube) {
    const query = encodeURIComponent(`${song.artist} ${song.title}`);
    const url = `https://www.youtube.com/results?search_query=${query}`;
    window.open(url, "_blank");
  }
}

// ----------- 자동 실행 -----------
document.addEventListener("DOMContentLoaded", function () {
  // 1) 페이지 로드되면 자동 추천
  showRandomMusic(false);
});

// ----------- 버튼 클릭 이벤트 위임 -----------
document.addEventListener("click", function (e) {
  const btn = e.target.closest("#playMusicBtn");
  if (!btn) return;

  // 2) 버튼 클릭 → 추천 + 유튜브 열기
  showRandomMusic(true);
});
