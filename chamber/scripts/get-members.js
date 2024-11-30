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
    const chamberMembers = document.getElementById("members-chamber");
    members.forEach(members => {
        // try printing foreach [0] 

        
        let card = document.createElement('section');


        
        let name = document.createElement('li');
        let address = document.createElement('li');
        // let phone = document.createElement('li');
        // let url = document.createElement("a");
        // let image = document.createElement('img');
        // let level = document.createElement('li');
        // let other = document.createElement('li');

     console.log(chamberMembers)
        
        const newListItem = document.createElement("li");
        newListItem.textContent =name;
        // newListItem.  =name;
        // newListItem.textContent =name;
        // newListItem.textContent =name;
        // newListItem.textContent =name;
        // newListItem.textContent =name;
        // newListItem.textContent =name;

        name.textContent = members.name;
        address.textContent = members.address;
        // name.textContent = members.name;
        // name.textContent = members.name;
        // name.textContent = members.name;
        // name.textContent = members.name;
        // name.textContent = members.name;

        chamberMembers.appendChild(name);
        chamberMembers.appendChild(address);
        // chamberMembers.appendChild(name);
        // chamberMembers.appendChild(name);
        // chamberMembers.appendChild(name);
        // chamberMembers.appendChild(name);
        // chamberMembers.appendChild(name);
        chamberMembers.forEach(members => {
            chamberMembers.appendChild(card);
        });
        // set the answers to a variable and foreach that variable into sections or cards
    });
}

displayMembers();


// getProphetData();

// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {
        
//         image.setAttribute('src', prophet.imageurl);
//         fullName.textContent = `${prophet.name} ${prophet.lastname}`;
//         dob.textContent = `Date of Birth: ${prophet.birthdate}`;
//         place.textContent = `Place of Birth: ${prophet.birthplace}`;
//         image.setAttribute('loading', 'lazy');
//         image.setAttribute('width', '340');
//         image.setAttribute('height', '440');

//         card.appendChild(fullName); 
//         card.appendChild(dob);
//         card.appendChild(place);
//         card.appendChild(image);
    
//         cards.appendChild(card);
        
//     });}