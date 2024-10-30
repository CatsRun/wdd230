function printYear(){    
    const currentYear = new Date();
    return currentYear.getFullYear();
}

document.getElementById("currentYear").innerHTML = printYear();

function printLastModefied(){
    const lastModefied = new Date();
    let month = lastModefied.getMonth() + 1;
    let day = lastModefied.getDate(); 
    let year = lastModefied.getFullYear();
    let timeFormated = lastModefied.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12:true});
    const dateFormated = `${month} /  ${day} / ${year} ${timeFormated}`;    
    // why is my month off by 1? Adding the '+1' made it correct. Temporate Literals for stings -
    // console.log(lastModefied);
    // console.log(dateFormated);

    return dateFormated;

}

document.getElementById("lastModified").innerHTML = printLastModefied();
