document.getElementById("getWeather").addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("브라우저에서 위치 정보를 지원하지 않습니다.");
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);
});

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // 무료 API (Open-Meteo)
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.current_weather.temperature;
      const weather = data.current_weather.weathercode;

      const outfit = getOutfitRecommendation(temp, weather);

      document.getElementById("weatherResult").innerHTML = `
        <div style="padding: 1rem; border-radius: 12px; background:#f7f7f7;">
          <p><b>현재 온도:</b> ${temp}℃</p>
          <p><b>추천 옷차림:</b> ${outfit}</p>
        </div>
      `;
    })
    .catch(() => {
      alert("날씨 정보를 가져오지 못했습니다.");
    });
}

function error() {
  alert("위치 정보 접근이 거부되었습니다.");
}

function getOutfitRecommendation(temp, weather) {
  if (temp >= 27) return "반팔 티셔츠 + 얇은 바지";
  if (temp >= 23) return "반팔 또는 얇은 긴팔";
  if (temp >= 20) return "얇은 가디건 + 긴팔";
  if (temp >= 17) return "맨투맨 or 가디건";
  if (temp >= 12) return "자켓 / 바람막이 / 니트";
  if (temp >= 9) return "코트 + 니트 조합 추천";
  if (temp >= 5) return "두꺼운 코트 + 목도리";
  return "패딩 / 목도리 / 기모 옷 필수";
}
