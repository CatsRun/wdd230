/*
         * Defining Table
         * Input(s): temperature, wind speed
         * Processing: calculate the wind chill factor temperature in Fahrenheit
         * Output(s): windchill in Fahrenheit
         */
function doInputOutput(){
    let tempF = parseFloat(document.getElementById('Temperature').value);
    let speed = parseFloat(document.getElementById('Wind-Speed').value);
    
    windChill(tempF, speed);
    
    output = windChill(tempF, speed);
    
    // document.getElementById("output").innerHTML = output.toFixed(1); this prevented the words from printing
    document.getElementById("output").innerHTML = output;
}
    
function windChill(tempF, speed){0.
    let na = 'N/A';
    if (speed >= 3 && tempF < 50) {
        windChill = (35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16 ).toFixed(1);
        return windChill;
        }
    else {
        // output is a number. I need to change it to a string for this to work. to.Dix needs to change
        return na;
    }

}