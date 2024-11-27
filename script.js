const API_KEY = "5e43b5450901ef9729bd4d25570e5e60"; // Replace with your OpenWeatherMap API key
async function getWeather() {
  const city = document.getElementById('city').value;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Loading...';

  try {
      const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kanpur}&appid=${API_KEY}`);
      const data = await response.json();

      if (data.cod === 200) {
          resultDiv.innerHTML = `
              <h2>${data.name}, ${data.sys.country}</h2>
              <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
              <p><strong>Weather:</strong> ${data.weather[0].description}</p>
              <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
              <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
          `;
      } else {
          resultDiv.innerHTML = `<p>${data.message}</p>`;
      }
  } catch (error) {
      resultDiv.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
  }
}
