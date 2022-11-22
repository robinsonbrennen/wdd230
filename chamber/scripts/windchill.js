const currentTemp = document.querySelector("#temp");
const windSpeed = document.querySelector("#speed");
const chill = document.querySelector("#chill");
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('figcaption');

// API url for Bozeman, MT with units in Fahrenheit (imperial) and my API ID
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bozeman&units=imperial&limit=5&appid=e641a35ce91046feb0e7923b7d2101c0';

// Function to fetch API
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

// Function to get temperature and windspeed, and calculate windchill
function windChill() {
    //let currentTemp = 40;
    //let windSpeed = 8;
    //let windChill;
    if (windSpeed > 3 && currentTemp <= 50) {
        windChill = 35.74 + 0.6215 * currentTemp - 35.75 * windSpeed ** 0.16 + 0.4275 * currentTemp * windSpeed ** 0.16;
    } else {
        windChill = "NA";
    }
    //document.getElementById("temp").innerHTML = currentTemp;
    //document.getElementById("speed").innerHTML = windSpeed;
    //document.getElementById("chill").innerHTML = windChill.toFixed(1);
    return windChill;
}

// Function to display data
function displayResults(weatherData) {
    // icon and current weather condition
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = `${weatherData.weather[0].description}`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    // temperature
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    // wind speed
    windSpeed.innerHTML = `${weatherData.wind.speed}`;
    // wind chill
    chill.innerHTML = windChill();
}

apiFetch();