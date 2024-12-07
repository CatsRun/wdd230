// pulling from rentals.JSON to populate Home rental info
// const names = document.querySelector('#names');
// const persons = document.querySelector('#persons');
const rentalData = 'https://catsrun.github.io/wdd230/scooters/data/rentals.json';
const shortcards = document.querySelector('#shortcards');
const longcards = document.querySelector('#longcards');


const displayRentals = (data) => {
    // console.log(data.rental);
      data.rental.forEach((rental) => {
        // console.log(rental);

        // -----index home page-------- shortcards
        let cardShort = document.createElement('section');
        let rentalType = document.createElement('li');
        let maxPersons = document.createElement('li');
        // portrait.setAttribute('src', rental.imageurl);
        rentalType.textContent = `${rental.rentalType}`;
        maxPersons.textContent = `Max Riders: ${rental.maxPersons}`;

        cardShort.appendChild(rentalType); 
        cardShort.appendChild(maxPersons);

        shortcards.appendChild(cardShort);
        


        // --------rentals page---------- longcards
        let cardLong = document.createElement('section');
        let reserveHalfDay = document.createElement('li'); 
        let reserveFullDay = document.createElement('li');
        let walkInHalfDay  = document.createElement('li');
        let walkInFullDay  = document.createElement('li');

        reserveHalfDay.textContent = `$ ${rental.reserveHalfDay}`
        console.log(rental.reserveHalfDay);
        reserveFullDay.textContent = `$ ${rental.reserveFullDay}`
        walkInHalfDay.textContent = `$ ${rental.walkInHalfDay}`
        walkInFullDay.textContent = `$ ${rental.walkInFullDay}`
            
        cardLong.appendChild(reserveHalfDay);
        cardLong.appendChild(reserveFullDay);
        cardLong.appendChild(walkInHalfDay);
        cardLong.appendChild(walkInFullDay);

        longcards.appendChild(cardLong);
        




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
