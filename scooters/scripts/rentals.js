// pulling from rentals.JSON to populate Home rental info
const names = document.querySelector('#names');
const persons = document.querySelector('#persons');
const rentalData = 'https://catsrun.github.io/wdd230/scooters/data/rentals.json';
const cards = document.querySelector('#cards');

// https://catsrun.github.io/wdd230/chamber/data/members.json
// C:\Users\Einna\OneDrive\BYUI\wdd230\wdd230\scooters\scripts\rentals.js

// fetches the data from the JSON file
// async function getRentalData() {
//     const response = await fetch(rentalData);
//     const data = await response.json();
//     to test table data
//     console.table(data.rentalData);
//     displayrentals(data.rentalData);
// }

// getRentalData()

// gets the info from JSON file
async function rentalFetch() {
    try {
        const response = await fetch(rentalData);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.rental[0].rentalType);
            displayRentals(data); 
        } else {
            throw Error (await response.text());
        }
    } catch (error){
        console.log(error);
    }   
}
rentalFetch();


const displayRentals = (data) => {
    // console.log(data.rental);
    // const rental = data.rental[0];
// console.log(data.rental[0].maxPersons);

    // 

    // data.rental.forEach((rental) => {
        // data
        // console.log(data.rental);

        

        
    data.rental.forEach((lll) => {
        // console.log(rental);
    // });
        let card = document.createElement('section');
        let rentalType = document.createElement('li');
        // let maxPersons = document.createElement('li');
        // portrait.setAttribute('src', rental.imageurl);
        rentalType.textContent = `${data.rental[0].rentalType}:`;
        // maxPersons.textContent = `#: ${data.rental[0].maxPersons}`;


    // work but are not looping
        // names.innerHTML = `${data.rental[0].rentalType} :name of scooter`;
        // persons.innerHTML = `${data.rental[0].maxPersons} :number of persons`;

        card.appendChild(rentalType); 
        // card.appendChild(maxPersons);

        console.log(lll);
        // cards.appendChild(card);

    });
}

