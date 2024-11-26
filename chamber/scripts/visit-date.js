// chamber.discovery (visits card)
// stores visit date locally
const visitsDisplay = document.querySelector("#visits");
const currentDate = new Date();
const lastVisit = localStorage.getItem('lastVisit');
localStorage.setItem('lastVisit', currentDate.getTime());
// console.log(currentDate);
// console.log(lastVisit);
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2024, 10, 25); //change this with lastVisted to test
const diffDays = Math.round(Math.abs((currentDate - lastVisit) / oneDay));
console.log(diffDays);
console.log(currentDate);


// if (diffDays == 0 ){ 
	// const lastVisit = new Date(lastVisit);
    // if ( Date.now() == today ){
	if (diffDays <= 1 ) {
	visitsDisplay.textContent = `Back so soon! Awesome!`;
}

	else if (diffDays > 1 && diffDays < 2)   {
	// amount of time between visits is less than a day
	visitsDisplay.textContent =`You last visited ${diffDays} day ago.`
}
else if (diffDays >= 2)  {
	// amount of time between visits is less than a day
	visitsDisplay.textContent =`You last visited ${diffDays} days ago.`
}

// }	 

else {
	// first visit
		visitsDisplay.textContent =`Welcome! Let us know if you have any questions.`;		
}

// console.log(localStorage['lastVisit']);
var myDate2 = new Date(parseInt(localStorage['lastVisit'], 10)); 
// console.log("|"+myDate2+"|");
localStorage['lastVisit'] = ''+myDate2.getTime();




