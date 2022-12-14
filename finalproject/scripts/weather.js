/*************************Weather Api***************************/
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=34.4208&lon=-119.6982&units=imperial&appid=6f64b0e840868387049e54d12e8f7465"


// fetch(apiURL)
//    .then((response) => response.json())
//    .then((jsObject) => {
//       console.log(jsObject);
//       document.getElementById('current').textContent = jsObject.weather[0].description;
//       document.getElementById('current-temp').textContent = parseFloat(jsObject.main.temp).toFixed(0);
//       document.getElementById('humidity').textContent = jsObject.main.humidity;
      
//       console.log(parseFloat(jsObject.wind.speed).toFixed(0));
//       let temp = parseFloat(jsObject.main.temp).toFixed(0);
//       let wspeed = parseFloat(jsObject.wind.speed).toFixed(0);

//       if (temp <= 50 && wspeed > 3.0) {
//          var wchill = parseFloat(windChill(temp, wspeed)).toFixed(0);
//       } else {
//          wchill = "N/A";
//       }

//       document.getElementById('windchill').innerHTML = wchill;
      
//       function windChill(tempF, speed) {
//          let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)
//          return f
//       }
//    });


// const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=34.4208&lon=-119.6982&units=imperial&appid=6f64b0e840868387049e54d12e8f7465"

// fetch(forecastURL)
//    .then((response) => response.json())
//    .then((jsObject) => {
//       const days = jsObject['list'];
//       //changed i<days.length to i<22
//       for (let i = 0; i < 23; i++) {
//          if (days[i].dt_txt.includes("18:00:00")) {
//             imagesrc = 'https://api.openweathermap.org/img/w/' + days[i].weather[0].icon + '.png';
//             let forecast = document.createElement('section');
//             forecast.className = 'forecastCard'
//             let dow = document.createElement('div');
//             dow.className = 'dayofweek';
//             let curimg = document.createElement('div');
//             curimg.className = 'currentimage';
//             let curtemp = document.createElement('div');
//             curtemp.className = 'currenttemp';
//             let day = document.createElement('p');
//             let img = document.createElement('img');
//             let temp = document.createElement('p');

//             day.textContent = getDayOfWeek(new Date(days[i].dt_txt));
//             img.setAttribute('src', imagesrc);
//             img.setAttribute('alt', days[i].weather.description);
//             img.setAttribute('title', days[i].weather.main);
//             temp.textContent = parseInt(days[i].main.temp) + ' ℉';

//             dow.appendChild(day);
//             curimg.appendChild(img);
//             curtemp.appendChild(temp);
//             forecast.appendChild(dow);
//             forecast.appendChild(curimg);
//             forecast.appendChild(curtemp);

//             document.querySelector('div.forecast').appendChild(forecast);
//          }
//       }
//    });

// function getDayOfWeek(d) {
//    let dayofweek = [
//       "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat",
//    ]

//    return dayofweek[d.getDay()];
// }


// const currentTemp = document.querySelector("#temp");
// const wSpeed = document.querySelector("#speed");
// const wChill = document.querySelector("#chill");
// const weatherIcon = document.querySelector('#icon');
// const capDesc = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=42.7249&lon=-110.9319&units=imperial&APPID=e641a35ce91046feb0e7923b7d2101c0';

// async function apiFetch() {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         //console.log(data); // this is for testing the call
//         displayResults(data);
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function windChill() {
//     if (wSpeed > 3 && currentTemp <= 50) {
//         windChill = 35.74 + 0.6215 * currentTemp - 35.75 * wSpeed ** 0.16 + 0.4275 * currentTemp * wSpeed ** 0.16;
//     } else {
//         windChill = "NA";
//     }
//     return windChill;
// }

// function displayResults(weatherData) {
//     const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//     const desc = `${weatherData.weather[0].description}`;
//     icon.setAttribute('src', iconSrc);
//     icon.setAttribute('alt', desc);
//     capDesc.textContent = desc;

//     currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

//     wSpeed.innerHTML = `${weatherData.wind.speed}`;

//     wChill.innerHTML = windChill();
// }


const temp1 = document.querySelector('#temp1');
const icon1 = document.querySelector('#icon1');
const caption1 = document.querySelector('#caption1');
const humidity1 = document.querySelector('#humidity1');

const temp2 = document.querySelector('#temp2');
const icon2 = document.querySelector('#icon2');
const caption2 = document.querySelector('#caption2');
const humidity2 = document.querySelector('#humidity2');

const temp3 = document.querySelector('#temp3');
const icon3 = document.querySelector('#icon3');
const caption3 = document.querySelector('#caption3');
const humidity3 = document.querySelector('#humidity3');

const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.158092&lon=-117.350594&units=imperial&limit=3&appid=2a2cc982298750eb39fb8f6efb6d7dba';

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

function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResults(weatherData) {

    temp1.innerHTML = `${weatherData.daily[0].temp.day.toFixed(0)}`;

    const desc1 = capitalize(weatherData.daily[0].weather[0].description);
    caption1.textContent = desc1;
    icon1.src = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    icon1.alt = desc1;

    humidity1.innerHTML = `${weatherData.daily[0].humidity}`;

    temp2.innerHTML = `${weatherData.daily[1].temp.day.toFixed(0)}`;

    const desc2 = capitalize(weatherData.daily[1].weather[0].description);
    caption2.textContent = desc2;
    icon2.src = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    icon2.alt = desc2;

    humidity2.innerHTML = `${weatherData.daily[1].humidity}`;

    temp3.innerHTML = `${weatherData.daily[2].temp.day.toFixed(0)}`;

    const desc3 = capitalize(weatherData.daily[2].weather[0].description);
    caption3.textContent = desc3;
    icon3.src = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    icon3.alt = desc3;

    humidity3.innerHTML = `${weatherData.daily[2].humidity}`;  
}

apiFetch();