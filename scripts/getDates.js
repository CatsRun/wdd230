// getDate
// document.getElementById("year").innerHTML = (new Date().getFullYear());

// date larst modified
// copyright year

// const options = {year:'numeric'};
// document.getElementById('currentYear').textContent = new Date().toLocaleDateString(options );
// 

// console.log(currentyear.getFullYear());
// document.getElementById(currentyear).textContent = new Date().toLocaleDateString(currentyear.getFullYear());

//prints current year
function printYear(){
    
    const currentYear = new Date();
    return currentYear.getFullYear();
}

document.getElementById("currentYear").innerHTML = printYear();

function printLastModefied(){
    const lastModefied = new Date();
    let month = lastModefied.getMonth();
    let day = lastModefied.getDate(); 
    let year = lastModefied.getFullYear();
    let hour = lastModefied.getHours();
    let minutes = lastModefied.getMinutes();
    let seconds = lastModefied.getSeconds();
    let timeFormated = lastModefied.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12:true});
    const dateFormated = month + "/" + day + "/" + year + " " + timeFormated;
    
    return dateFormated;
}

document.getElementById("lastModified").innerHTML = printLastModefied();

console.log(printLastModefied());
// console.log(Date());