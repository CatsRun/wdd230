// Weather location: King George, VA
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.27&lon=-77.18&units=imperial&appid=bbe357ddc270c8f85a1e2c6b8dc5e569'

// "units=imperial"
// apiKey=bbe357ddc270c8f85a1e2c6b8dc5e569
function displayResults(data) {
    // console.log(data)
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
            displayResults(data); 
        } else {
            throw Error (await response.text());
        }

    } catch (error){
        console.log(error);
    }
   
}
apiFetch();
// console.log(apiFetch());


