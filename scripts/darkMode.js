const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const h2 = document.querySelector("h2")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        header.style.background = " #5e4b66";
        header.style.color = "#fff";
        nav.style.background = " #7c6f5f";
        nav.style.color = "#000";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        header.style.background = "#d6abe9";
        header.style.color = "#000";
        nav.style.background = "bisque";
        nav.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
