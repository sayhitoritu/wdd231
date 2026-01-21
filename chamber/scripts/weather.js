// Select HTML elements
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// Trier, Germany (2 decimal places)
const url =
    "https://api.openweathermap.org/data/2.5/weather" +
    "?lat=49.75&lon=6.64&units=metric&appid=5874af705f0af2b34650711fb502e6bd";

// Async function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data); // REQUIRED for testing
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Display results on the page
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}°C`;

    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = desc;
    captionDesc.textContent = desc;
}

// Call the function
apiFetch();
