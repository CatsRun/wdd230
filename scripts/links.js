const baseURL = "https://catsrun.github.io/wdd230/";
const linksURL = "https://catsrun.github.io/wdd230/data/links.json";
 
async function getLinks() {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);
}

// this calls the function getLinks() and makes it write to the html
// displayLinks() is called within getLinks()
getLinks();

function displayLinks(lessons) {
    const lessonLinks = document.getElementById("lesson-links");

    lessons.forEach(lesson => {
        const newListItem = document.createElement("li");
        newListItem.textContent = `Lesson ${lesson.lesson}: `;
        // console.log(newListItem)
        lesson.links.forEach((link) => {
            const newLink = document.createElement("a");
            newLink.href = baseURL + link.url;
            newLink.textContent = `🖊️ ${link.title}`;

            newListItem.appendChild(newLink);
        });

        lessonLinks.appendChild(newListItem);
    });
}

// lessons was used insted of weeks bc my json says lesson not week

