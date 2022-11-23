const currentTemp = document.querySelector("#temp");
const wSpeed = document.querySelector("#speed");
const wChill = document.querySelector("#chill");
const weatherIcon = document.querySelector('#icon');
const capDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=42.7249&lon=-110.9319&units=imperial&APPID=e641a35ce91046feb0e7923b7d2101c0';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function windChill() {
    if (wSpeed > 3 && currentTemp <= 50) {
        windChill = 35.74 + 0.6215 * currentTemp - 35.75 * wSpeed ** 0.16 + 0.4275 * currentTemp * wSpeed ** 0.16;
    } else {
        windChill = "NA";
    }
    return windChill;
}

function displayResults(weatherData) {
    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = `${weatherData.weather[0].description}`;
    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', desc);
    capDesc.textContent = desc;

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    wSpeed.innerHTML = `${weatherData.wind.speed}`;

    wChill.innerHTML = windChill();
}

apiFetch();