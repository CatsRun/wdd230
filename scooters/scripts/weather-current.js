// Weather location: King George, VA
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherMain = document.querySelector('#weatherMain');
// const windspeed = document.querySelector('#windSpeed');
const currentHum = document.querySelector('#current-humidity');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.95&units=imperial&appid=bbe357ddc270c8f85a1e2c6b8dc5e569';

// "units=imperial"
// apiKey=bbe357ddc270c8f85a1e2c6b8dc5e569
function displayResults2(data) {
    // console.log(data)
    currentTemp.innerHTML = `${data.main.temp}&deg;F`; 
    currentHum.innerHTML = `${data.main.humidity}%`;
    weatherMain.innerHTML = `${data.weather[0].main}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent= `${desc}`
    // console.log(data.weather[0].main);
    // console.log('current temp')
    // console.log(data.main.temp)
    // ---------index alert window --------
    // setTimeOut loads this after 4000 milsec - after the page loads. THis allows the rest of the page to load before the msg pops up. Otherwide it will prevent the page from loading.
    const maxTemp = data.main.temp_max;
    setTimeout(function alertTemp(){
        alert(`Todays high will be ${maxTemp}°F`);
        // console.log('max temp')
        // console.log(maxTemp)
    },4000    )
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.weather);
            displayResults2(data); 

        } else {
            throw Error (await response.text());
        }

    } catch (error){
        console.log(error);
    }
   
}
apiFetch();

// future temp from forecast ------

// const futureTemp1 = document.querySelector('#future-temp1');
// const futureTemp2 = document.querySelector('#future-temp2');
// const futureTemp3 = document.querySelector('#future-temp3');

// const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.27&lon=-77.18&units=imperial&appid=bbe357ddc270c8f85a1e2c6b8dc5e569';

// function displayResults2(data) {
//     console.log(data.list[0].main.temp);
//     futureTemp1.innerHTML = `${data.list[0].main.temp}&deg;F`;
//     futureTemp2.innerHTML = `${data.list[1].main.temp}&deg;F`;
//     futureTemp3.innerHTML = `${data.list[2].main.temp}&deg;F`;

// }


