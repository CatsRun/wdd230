const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector('header')
const herolable = document.querySelector('.herolable')

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("😎")) {
        main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "😀";
        body.style.background = "#000";
        header.style.color = "#000";
		herolable.style.color = "#000";
	} else {
		main.style.background = "beige";
		main.style.color = "#000";
		modeButton.textContent = "😎";
        body.style.background = "beige";
        header.style.color = "#fff";
		herolable.style.color = "#000";
	}
});
