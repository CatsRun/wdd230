// stores visit counter locally
const visitsDisplay = document.querySelector("#visits");
// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
// let today = Date.now();
const currentDate = new Date();
const lastVisit = localStorage.getItem('lastVisit');
localStorage.setItem('lastVisit', currentDate.getTime());
console.log(currentDate);
console.log(lastVisit);
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2008, 1, 12);
const diffDays = Math.round(Math.abs((firstDate - lastVisit) / oneDay));
console.log(diffDays);

// if (numVisits !== 0) {
if (diffDays !== 0 ){ 
	// const lastVisit = new Date(lastVisit);
    // if ( Date.now() == today ){
		if (diffDays < 1) {
		visitsDisplay.textContent = `Back so soon! Awesome!`;
	}
	
	else   {
		visitsDisplay.textContent =`You last visited ${diffDays} days ago.`
	}
}	 

else {
		visitsDisplay.textContent =`Welcome! Let us know if you have any questions`;
		console.log(no);
}

// numVisits++;
// localStorage.setItem("numVisits-ls", numVisits);
console.log(localStorage['lastVisit']);
var myDate2 = new Date(parseInt(localStorage['lastVisit'], 10)); 
console.log("|"+myDate2+"|");
localStorage['lastVisit'] = ''+myDate2.getTime();



console.log(myDate2);

// I need to save the last visited date and then compare that to DateNow(). 