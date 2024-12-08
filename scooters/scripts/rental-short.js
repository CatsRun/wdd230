// Rental info Short list
// pulling from rentals.JSON to populate Home rental info
// const names = document.querySelector('#names');
// const persons = document.querySelector('#persons');
const rentalData = 'https://catsrun.github.io/wdd230/scooters/data/rentals.json';
const shortcards = document.querySelector('#shortcards');
// const longcards = document.querySelector('#longcards');
const longcards = document.getElementById('#longcards');


const displayRentals = (data) => {
    // console.log(data.rental);s
      data.rental.forEach((rental) => {
        // console.log(rental);

        // -----index home page-------- shortcards
        let cardShort = document.createElement('section');
        let rentalType = document.createElement('p');
        let maxPersons = document.createElement('p');
        // portrait.setAttribute('src', rental.imageurl);
        rentalType.textContent = `${rental.rentalType}`;
        maxPersons.textContent = `Max Riders: ${rental.maxPersons}`;

        cardShort.appendChild(rentalType); 
        cardShort.appendChild(maxPersons);

        shortcards.appendChild(cardShort);
        console.log(cardShort);
    });
}        


async function rentalFetch() {
    try {
        const response = await fetch(rentalData);
        if (response.ok) {
            const data = await response.json();
            displayRentals(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error){
        console.log(error);
    }   
}
rentalFetch();
