// stores visit counter locally
const visitsDisplay = document.querySelector(".visits");
// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let today = Date.now();
const currentDate = new Date();
const lastVisit = localStorage.getItem('lastVisit');
localStorage.setItem('lastVisit', currentDate);

// if (numVisits !== 0) {
if (lastVisit){ 
	const lastVisit = new Date(lastVisit);
	let interval = new Date( 2024, 2, 4, 12); //what is this?
    // if ( Date.now() == today ){
		if (interval < 1) {
		visitsDisplay.textContent = `Back so soon! Awesome!`;
	}
	
	else if (Date.now() !== today ) {
		visitsDisplay.textContent =`You last visited  days ago.`
	}
}	 

else {
		visitsDisplay.textContent =`Welcome! Let us know if you have any questions`;
		console.log(no);
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
 

localStorage['key'] = ''+myDate.getTime();
var myDate = new Date(parseInt(localStorage['key'], 10));

console.log(myDate);

// I need to save the last visited date and then compare that to DateNow(). 