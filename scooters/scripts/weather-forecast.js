// Weather location: King George, VA
// 3 day forecast
const futureTemp1 = document.querySelector('#future-temp1');
const futureTemp2 = document.querySelector('#future-temp2');
const futureTemp3 = document.querySelector('#future-temp3');

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&units=imperial&appid=bbe357ddc270c8f85a1e2c6b8dc5e569';
// "units=imperial"
// apiKey=bbe357ddc270c8f85a1e2c6b8dc5e569

function displayResults(data) {
    // console.log(data.list[0].main.temp);
    futureTemp1.innerHTML = `${data.list[7].main.temp}&deg;F`;
    // futureTemp2.innerHTML = `${data.list[1].dt_txt}&deg;F`;
    // console.log(data.list[1]);
    // let temp1 = data.list[1].dt;
// make this work********* pulling 15:00 tomorrow temp
    // const threeTemp = 0
    // if (data.list[0].dt_txt == " 2024-13-17 15:00:00" )
    //     threeTemp = `${data.list[0].main.temp}&deg;F`;
    // else{
    //     console.log('1 does not work');
    // }

// this works for the specific [7] picked 
    // if (temp3.includes('15:00:00')){
    //     console.log('if stat works!!!');
    //     console.log(data.list[1].main.temp)}
    // else{ console.log('2 not working!!!');};

    // console.log(temp1);
    // console.log(temp3);
    // if (temp3.includes('4800')) {
    //     console.log('if stat works!!!');
    // } else {
    //     console.log('3 not working!!!');
    // }

    // console.log(data.list[1].dt);

//     const birthday = new Date();
//     const day1 = birthday.getDay();
//     console.log(day1);

//     const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
// const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

// console.log(unixTimeZero);
// // Expected output: 0

// console.log(javaScriptRelease);
// Expected output: 818035920000
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
