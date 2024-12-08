

// from codepen -- not working --
const gridbutton = document.querySelector("#membergrid");
const listbutton = document.querySelector("#memberlist");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("membergrid");
	display.classList.remove("memberlist");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("membergrid");
}
