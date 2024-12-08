// Rental info Long pst

const longRentalData = 'https://catsrun.github.io/wdd230/scooters/data/rentals.json';

const displayRentalsLong = (data) => {
    // console.log(data.rental);
      data.rental.forEach((rental) => {

        // portrait.setAttribute('src', rental.imageurl);

        // --------rentals page---------- longcards
        let cardLong = document.createElement('section');
        let rentalType = document.createElement('p');
        let maxPersons = document.createElement('p');        
        let reserveHalfDay = document.createElement('p'); 
        let reserveFullDay = document.createElement('p');
        let walkInHalfDay  = document.createElement('p');
        let walkInFullDay  = document.createElement('p');

        rentalType.textContent = `${rental.rentalType}`;
        maxPersons.textContent = `Max Riders: ${rental.maxPersons}`;
        reserveHalfDay.textContent = `Reserved Half-day rental: $${rental.reserveHalfDay}`
        reserveFullDay.textContent = `Reserved Full-day rental: $${rental.reserveFullDay}`
        walkInHalfDay.textContent = `Walk-in Half-day rental: $${rental.walkInHalfDay}`
        walkInFullDay.textContent = `Walk-in Full-day rental: $${rental.walkInFullDay}`

        cardLong.appendChild(rentalType); 
        cardLong.appendChild(maxPersons);    
        cardLong.appendChild(reserveHalfDay);
        cardLong.appendChild(reserveFullDay);
        cardLong.appendChild(walkInHalfDay);
        cardLong.appendChild(walkInFullDay);

        longcards.appendChild(cardLong);
        // console.log(cardLong);
    });
}

async function rentalFetch() {
    try {
        const response = await fetch(longRentalData);
        if (response.ok) {
            const data = await response.json();
            displayRentalsLong(data); 
        } else {
            throw Error (await response.text());
        }
    } catch (error){
        console.log(error);
    }   
}
rentalFetch();
