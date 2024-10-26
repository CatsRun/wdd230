const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("😎")) {
    main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "😀";
    body.style.background = "#000";
	} else {
		main.style.background = "beige";
		main.style.color = "#000";
		modeButton.textContent = "😎";
        body.style.background = "beige";
	}
});
