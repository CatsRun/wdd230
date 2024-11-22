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
    let timeFormated = lastModefied.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12:true});
    const dateFormated = month + 1 +"/" + day + "/" + year + " " + timeFormated;
    // why is my month off by 1? Adding the '+1' made it correct.
    return dateFormated;
}

document.getElementById("lastModified").innerHTML = printLastModefied();

// used on join page
document.getElementById("submition").innerHTML = printLastModefied();