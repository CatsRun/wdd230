// populates reservations.html from rentals.json
// gets rental type and max preson

const rentalData = 'https://catsrun.github.io/wdd230/scooters/data/rentals.json';
const shortcards2 = document.querySelector('#rentals-name');


const displayRentalsRes = (data) => {
    // console.log(data.rental);s
      data.rental.forEach((rental) => {
        // console.log(rental);

        // -----reservation page-------- shortcards
        // let inPut = document.createElement('label');

        // let formLabel = document.createElement('label');

        // rentalType.setAttribute("colspan",3);
        // portrait.setAttribute('src', rental.imageurl);


        // rentalType.textContent = `  ${rental.rentalType}`;
        
        // maxPersons.textContent = ` Max Riders: ${rental.maxPersons}`;


        // console.log(rentalOption)
        // inPut.appendChild(rentalType);

        // rentalType.appendChild(checkBox);

        // checkBox.appendChild(rentalOption);
        // formLabel.appendChild(rentalType);


        // -----reservations page-------- shortcards2

        let cardShort = document.createElement('option');
        let rentalType = document.createElement('p');
        let maxPersons = document.createElement('p');
        // portrait.setAttribute('src', rental.imageurl);
        rentalType.textContent = `${rental.rentalType}`;
        maxPersons.textContent = `Max Riders: ${rental.maxPersons}`;

        // cardShort.appendChild(checkBox);
        cardShort.appendChild(rentalType); 
        cardShort.appendChild(maxPersons);

        shortcards2.appendChild(cardShort);


        
    });
}        


async function rentalFetch() {
    try {
        const response = await fetch(rentalData);
        if (response.ok) {
            const data = await response.json();
            displayRentalsRes(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error){
        console.log(error);
    }   
}
rentalFetch();