
function displayBanner(){
    const daysToShow = [1, 2, 3];
    const today = new Date().getDay();
    
    if (daysToShow.includes(today))
    {
        // console.log(today)
        document.getElementById('banner').style.display= 'inline-block';
    }
}
displayBanner();