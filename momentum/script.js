// DOM Elements
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');

const btnChangeBackground = document.querySelector('.change-background');
const blockquote = document.querySelector('.blockquote');
const figcaption = document.querySelector('.figcaption');
const changeQuote = document.querySelector('.change-quote');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.weather__temperature');
const humidity = document.querySelector('.weather__humidity');
const windSpeed = document.querySelector('.weather__wind-speed');
const weatherDescription = document.querySelector('.weather__description');
const city = document.querySelector('.weather__city');

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', nameClick);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', focusClick);

document.addEventListener('DOMContentLoaded', getWeather);
document.addEventListener('DOMContentLoaded', getQuote);

changeQuote.addEventListener('click', getQuote);

btnChangeBackground.addEventListener('click', viewBgImage);

city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
city.addEventListener('click', cityClick);


let hourLastChangeBackground = -1;
let hourForViewBgImage = -1;
const images = [];

// Run
showTime();
initBgGreet();
setBgGreet();
getName();
getFocus();
getCity();

// Show Time
function showTime() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const today = new Date();

  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  const day = today.getDay();

  const month = today.getMonth();
  const dateOfMonth = today.getDate();
  const year = today.getFullYear();

  // Output Time  
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`; 

  // Output Date
  date.innerHTML = `${daysOfWeek[day]}<span>,</span> ${dateOfMonth} ${months[month]} ${year}`;

  if (hourLastChangeBackground !== hour) {
    setBgGreet();
  }

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function initBgGreet() {
  const base = [
    './assets/images/night/',
    './assets/images/morning/',
    './assets/images/day/',
    './assets/images/evening/'
  ];

  const imagesNight = [
    '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',
    '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
  ];
  const imagesMorningt = [...imagesNight];
  const imagesAfternoon = [...imagesNight];
  const imagesEvening = [...imagesNight];

  shuffle(imagesNight);
  shuffle(imagesMorningt);
  shuffle(imagesAfternoon);
  shuffle(imagesEvening);

  for (let i = 0; i < 6; i++) {
    images[i] = base[0] + imagesNight[i];
    images[i + 6] = base[1] + imagesMorningt[i];
    images[i + 12] = base[2] + imagesAfternoon[i];
    images[i + 18] = base[3] + imagesEvening[i];
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Set Background and Greeting
function setBgGreet() {

  //const today = new Date(2020, 09, 20, 11, 10, 10);
  const today = new Date();
  const hour = today.getHours();
  document.body.style.backgroundImage = `url(${images[hour]})`;

  if (hour < 6) {
    greeting.textContent = 'Good Night, ';
  } else if (hour < 12) {
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    greeting.textContent = 'Good Afternoon, ';
  } else {
    greeting.textContent = 'Good Evening, ';
  }

  hourLastChangeBackground = hour;
  hourForViewBgImage = hour;
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    localStorage.setItem('name', '[Enter Name]');
  }
  name.textContent = localStorage.getItem('name');
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed    
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText === '') {
        getName();
      }
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    getName();
  }
}

function nameClick(e) {
  e.target.innerText = '';
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    localStorage.setItem('focus', '[Enter Focus]');
  }
  focus.textContent = localStorage.getItem('focus');
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if ((e.target.innerText).trim() === '') {
        getFocus();
      }
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    getFocus();
  }
}

function focusClick(e) {
  e.target.innerText = '';
}


function viewBgImage(e) {
  hourForViewBgImage++;

  if (hourForViewBgImage > 23) {
    hourForViewBgImage = 0;
  }
  const img = document.createElement('img');
  img.src = `${images[hourForViewBgImage]}`;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${images[hourForViewBgImage]})`;
  };

  e.target.innerText = `Image for ${addZero(hourForViewBgImage)} h`;
}

async function getQuote() {
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.quoteAuthor !== '') {
      figcaption.textContent = `${data.quoteAuthor}:`;
    }
    blockquote.textContent = `"${data.quoteText}"`;
  } catch (error) {
    blockquote.textContent = 'Unable to get quotes. Try it later.';
    figcaption.textContent = 'API error:';
  }
}

async function getWeather() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=bd0304550dcd2b56e363d6f9765cacee&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod == 404) {
      temperature.textContent = '';
      weatherDescription.textContent = '';
      humidity.textContent = 'City not found';
      windSpeed.textContent = '';
    } else {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp.toFixed(0)}°C `;
      humidity.textContent = `humidity: ${data.main.humidity.toFixed(0)}%`;
      windSpeed.textContent = `wind speed: ${data.wind.speed.toFixed(0)}m/s`;
      weatherDescription.textContent = data.weather[0].description;
    }

  } catch (error) {
    temperature.textContent = '-';
    weatherDescription.textContent = 'API error';
    humidity.textContent = '';
    windSpeed.textContent = '';
  }

}

function getCity() {
  if (localStorage.getItem('city') === null) {
    localStorage.setItem('city', '[Enter city]');
  }
  city.textContent = localStorage.getItem('city');
}

function setCity(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed    
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText === '') {
        getCity();
      }
      localStorage.setItem('city', e.target.innerText);
      getWeather();
      city.blur();
    }
  } else {
    getCity();
  }
}

function cityClick(e) {
  e.target.innerText = '';
}