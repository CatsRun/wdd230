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
        let rentalType = document.createElement('li');
        let maxPersons = document.createElement('p');

        let rentalOption = document.createElement('li');
        // let formLabel = document.createElement('label');
        let checkBox = document.createElement('input');
        let box = checkBox.setAttribute('type','checkbox');
        // rentalType.setAttribute("colspan",3);
        // portrait.setAttribute('src', rental.imageurl);


        // rentalType.textContent = `  ${rental.rentalType}`;
        
        // maxPersons.textContent = ` Max Riders: ${rental.maxPersons}`;

        rentalOption.textContent = ` ${rental.rentalType} Max Riders: ${rental.maxPersons}`;
        // console.log(rentalOption)
        // inPut.appendChild(rentalType);

        // rentalType.appendChild(checkBox);

        // checkBox.appendChild(rentalOption);
        // formLabel.appendChild(rentalType);

    // this works but places the bot after the words
        // rentalType.appendChild(maxPersons);
        rentalOption.appendChild(checkBox);

        shortcards2.appendChild(rentalOption);


    // trying new things to get it to work
        rentalOption.appendChild(checkBox);

        shortcards2.appendChild(checkBox);


        // console.log(rentalType);
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