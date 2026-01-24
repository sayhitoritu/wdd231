const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecastContainer = document.querySelector("#forecast");

const apiKey = "5874af705f0af2b34650711fb502e6bd";

const lat = 28.61;
const lon = 77.23;

const currentUrl =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(currentUrl);
        const data = await response.json();

        currentTemp.textContent = `${data.main.temp.toFixed(1)} °C`;

        const icon = data.weather[0].icon;
        const desc = data.weather[0].description;

        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherIcon.alt = desc;
        weatherIcon.style.display = "block";
        captionDesc.textContent = desc;
    } catch (error) {
        console.error(error);
    }
}

async function getForecast() {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const days = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    forecastContainer.innerHTML = "";

    days.forEach(day => {
        const p = document.createElement("p");
        const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
        p.textContent = `${date}: ${day.main.temp.toFixed(1)} °C`;
        forecastContainer.appendChild(p);
    });
}

getWeather();
getForecast();


