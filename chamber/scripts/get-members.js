const baseURL = "https://catsrun.github.io/wdd230/";
const linksURL = "https://catsrun.github.io/wdd230/chamber/data/members.json";
 
async function getLinks() {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayMembers(data.members);
}

// this calls the function getLinks() and makes it write to the html
// displayMembers() is called within getLinks()
getLinks();

function displayMembers(members) {
    const lessonLinks = document.getElementById("members-chamber");

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');
        let url = document.createElement("a");
        let image = document.createElement('img');
        let level

    members.forEach(lesson => {
        const newListItem = document.createElement("li");
        newListItem.textContent = `Week ${lesson.lesson}: `;
        console.log(newListItem)
        // lesson.links.forEach((link) => {
        //     const newLink = document.createElement("a");
        //     newLink.href = baseURL + link.url;
        //     newLink.textContent = `🖊️ ${link.title}`;

        //     newListItem.appendChild(newLink);
        // });

        lessonLinks.appendChild(newListItem);
    });
}



// getProphetData();

// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {
//         let card = document.createElement('section');
//         let fullName = document.createElement('h2');
//         let dob = document.createElement('h3');
//         let place = document.createElement('h3');
//         let portrait = document.createElement('img');

        
//         portrait.setAttribute('src', prophet.imageurl);
//         fullName.textContent = `${prophet.name} ${prophet.lastname}`;
//         dob.textContent = `Date of Birth: ${prophet.birthdate}`;
//         place.textContent = `Place of Birth: ${prophet.birthplace}`;
//         portrait.setAttribute('loading', 'lazy');
//         portrait.setAttribute('width', '340');
//         portrait.setAttribute('height', '440');

//         card.appendChild(fullName); 
//         card.appendChild(dob);
//         card.appendChild(place);
//         card.appendChild(portrait);
    
//         cards.appendChild(card);
        
//     });}