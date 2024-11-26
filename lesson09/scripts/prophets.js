const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// fetches the data from the JSON file
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // to test table data
    console.table(data.prophets);
    displayProphets(data.prophets);
}

// This is to test the links: 
// async function getLinks() {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     console.log(data);
//   }
  
//   getLinks();

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let dob = document.createElement('h3');
        let place = document.createElement('h3');
        let portrait = document.createElement('img');

        
        portrait.setAttribute('src', prophet.imageurl);
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName); 
        card.appendChild(dob);
        card.appendChild(place);
        card.appendChild(portrait);
    
        cards.appendChild(card);
        
    });
}



// where does 'prophets' come from? It comes frim the JSON file. 