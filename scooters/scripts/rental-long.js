// Rental info Long pst

const longRentalData = 'https://catsrun.github.io/wdd230/scooters/data/rentals.json';

const displayRentalsLong = (data) => {
    // console.log(data.rental);
      data.rental.forEach((rental) => {

        // portrait.setAttribute('src', rental.imageurl);

        // --------rentals page---------- longcards
        let cardLong = document.createElement('section');
        let cardTable = document.createElement('table');
        // do I need a caption?
        let rentalType = document.createElement('th');

        let maxPersons = document.createElement('caption');        
        let reserveHalfDay = document.createElement('td'); 
        let reserveFullDay = document.createElement('td');
        let walkInHalfDay  = document.createElement('td');
        let walkInFullDay  = document.createElement('td');

        let theadHead = document.createElement('thead');
        let tbodyBody = document.createElement('tbody');
        let trTablRow = document.createElement('tr');
        let trTablRow2 = document.createElement('tr');
        let trTablRow3 = document.createElement('tr');
        let trTablRow4 = document.createElement('tr');

        let thHalfDay = document.createElement('th');
        let thFullDay = document.createElement('th');
        let thReserved = document.createElement('th');
        let thWalkin = document.createElement('th');

        // --------pulling data from JSON file rentals.json
        rentalType.textContent = `${rental.rentalType} `;
        maxPersons.textContent = `Max Riders: ${rental.maxPersons} `;
        reserveHalfDay.textContent = `Half-day $${rental.reserveHalfDay} `;
        reserveFullDay.textContent = `Full-day $${rental.reserveFullDay} `;
        walkInHalfDay.textContent = `Half-day $${rental.walkInHalfDay} `;
        walkInFullDay.textContent = `Full-day $${rental.walkInFullDay} `;

        rentalType.setAttribute("colspan",3);

        thReserved.textContent = `Reserved`;
        thWalkin.textContent = `Walk-in`;
        thHalfDay.textContent = `Half-day rental:`;
        thFullDay.textContent = `Full-day rental:`;

        // ------create table----------
        cardLong.appendChild(cardTable);

        // ------table head span 2---------
        theadHead.appendChild(trTablRow);
        trTablRow.appendChild(rentalType); 

        // -----table head------
        cardTable.appendChild(theadHead);
        theadHead.appendChild(trTablRow3);
        
        trTablRow3.appendChild(thReserved);
        trTablRow3.appendChild(thWalkin);

        // --------row 1----------
        cardTable.appendChild(tbodyBody);
        tbodyBody.appendChild(trTablRow4);
        trTablRow4.appendChild(reserveFullDay);
        trTablRow4.appendChild(walkInFullDay);
        
        // ---------row 2----------        
        tbodyBody.appendChild(trTablRow2);
        trTablRow2.appendChild(reserveHalfDay); 
        trTablRow2.appendChild(walkInHalfDay);

        // ------caption---------
        cardTable.appendChild(maxPersons);
        
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
