const temperature1 = document.querySelector('#temperature1');
const conditions1 = document.querySelector('#conditions1');
const condition1 = document.querySelector('#condition1');
const humidity1 = document.querySelector('#humidity1');

const temperature2 = document.querySelector('#temperature2');
const conditions2 = document.querySelector('#conditions2');
const condition2 = document.querySelector('#condition2');
const humidity2 = document.querySelector('#humidity2');

const temperature3 = document.querySelector('#temperature3');
const conditions3 = document.querySelector('#conditions3');
const condition3 = document.querySelector('#condition3');
const humidity3 = document.querySelector('#humidity3');

const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=34.4208&lon=-119.6982&units=imperial&limit=3&appid=ab2701079d14f2054e74a081b52368fc';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {

    temperature1.innerHTML = `${weatherData.daily[0].temp.day.toFixed(0)}`;

    const today = capitalize(weatherData.daily[0].weather[0].description);
    condition1.textContent = today;
    conditions1.src = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    conditions1.alt = today;

    humidity1.innerHTML = `${weatherData.daily[0].humidity}`;

    temperature2.innerHTML = `${weatherData.daily[1].temp.day.toFixed(0)}`;

    const tomorrow = capitalize(weatherData.daily[1].weather[0].description);
    condition2.textContent = tomorrow;
    conditions2.src = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    conditions2.alt = tomorrow;

    humidity2.innerHTML = `${weatherData.daily[1].humidity}`;

    temperature3.innerHTML = `${weatherData.daily[2].temp.day.toFixed(0)}`;

    const intwodays = capitalize(weatherData.daily[2].weather[0].description);
    condition3.textContent = intwodays;
    conditions3.src = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    conditions3.alt = intwodays;

    humidity3.innerHTML = `${weatherData.daily[2].humidity}`;  
}

function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

apiFetch();