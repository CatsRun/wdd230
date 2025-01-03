// Weather location: King George, VA
// 3 day forecast
const futureTemp1 = document.querySelector('#future-temp1');
const futureTemp2 = document.querySelector('#future-temp2');
const futureTemp3 = document.querySelector('#future-temp3');

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.27&lon=-77.18&units=imperial&appid=bbe357ddc270c8f85a1e2c6b8dc5e569';
// "units=imperial"
// apiKey=bbe357ddc270c8f85a1e2c6b8dc5e569

function displayResults(data) {
    // console.log(data.list[0].main.temp);
    futureTemp1.innerHTML = `${data.list[0].main.temp}&deg;F`;
    futureTemp2.innerHTML = `${data.list[1].main.temp}&deg;F`;
    futureTemp3.innerHTML = `${data.list[2].main.temp}&deg;F`;

}

// this is for error catching --- look in the console for errors
async function apiFetch() {
    try {
        const response = await fetch(urlForecast);
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


// I need to have async function process disdisplayResults twice pulling in 2 different data sets, one for each go.