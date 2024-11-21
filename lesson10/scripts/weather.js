const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.76&lon=6.64&units=imperial&appid=bbe357ddc270c8f85a1e2c6b8dc5e569'
// const exurl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
// "units=imperial"
// apiKey=bbe357ddc270c8f85a1e2c6b8dc5e569
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`; 
    // this is without the img 
    // const iconsrc = `https://openweathermap.org/w/${data.weather[0].icon}.png`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent= `${desc}`
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.weather);
            displayResults(data); //this is a problem
        } else {
            throw Error (await response.text());
        }

    } catch (error){
        console.log(error);
    }
   
}
apiFetch();
// console.log(apiFetch());


