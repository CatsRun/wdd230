// chamber.discovery (visits card)
// stores visit counter locally
const visitsDisplay = document.querySelector("#visits");
// let today = Date.now();
const currentDate = new Date();
const lastVisit = localStorage.getItem('lastVisit');
localStorage.setItem('lastVisit', currentDate.getTime());
// console.log(currentDate);
// console.log(lastVisit);
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
// firstdate needs to reference the date in local storage***
// const firstDate = new Date(2008, 1, 12);
const diffDays = Math.round(Math.abs((currentDate - lastVisit) / oneDay));
// console.log(diffDays);


if (diffDays == 0 ){ 
	// const lastVisit = new Date(lastVisit);
    // if ( Date.now() == today ){
		if (diffDays < 1) {
		visitsDisplay.textContent = `Back so soon! Awesome!`;
	}
	
	else   {
		// amount of time between visits is less than a day
		visitsDisplay.textContent =`You last visited ${diffDays} days ago.`
	}
}	 

else {
	// first visit
		visitsDisplay.textContent =`Welcome! Let us know if you have any questions.`;
		// console.log('no');
}

// numVisits++;
// localStorage.setItem("numVisits-ls", numVisits);
// console.log(localStorage['lastVisit']);
var myDate2 = new Date(parseInt(localStorage['lastVisit'], 10)); 
// console.log("|"+myDate2+"|");
localStorage['lastVisit'] = ''+myDate2.getTime();




