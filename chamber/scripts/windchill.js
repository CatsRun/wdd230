/*
         * Defining Table
         * Input(s): temperature, wind speed
         * Processing: calculate the wind chill factor temperature in Fahrenheit
         * Output(s): windchill in Fahrenheit
         */
// function doInputOutput(){
    // let temp = parseFloat(document.getElementById('Temperature').value);
    // let windSpeed = parseFloat(document.getElementById('Wind-Speed').value);

    // windChill(temp, windSpeed);
    
    // output = windChill(temp, windSpeed);
    
    // document.getElementById("output").innerHTML = output.toFixed(1); this prevented the words from printing
    // document.getElementById("output").innerHTML = output;
// }


// temp == api temp
document.addEventListener("DOMContentLoaded", () => {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = `Wind Chill: ${windChill}`;
});

    // console.log(6)
function calculateWindChill(temp, windSpeed){
    if (windSpeed > 3 && temp <= 50) {
        windChill = (35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16 ).toFixed(1);
        // console.log(20)
        return windChill;
        }
    else {
        // console.log(25)
        // output is a number. I need to change it to a string for this to work. to.Dix needs to change
        return 'N/A';
    }

}