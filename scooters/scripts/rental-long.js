// Rental info Long pst

const longRentalData = 'https://catsrun.github.io/wdd230/scooters/data/rentals.json';

// const displayRentalsLong = (data) => {
//     // console.log(data.rental);
//       data.rental.forEach((rental) => {

//         // portrait.setAttribute('src', rental.imageurl);

//         // --------rentals page---------- longcards
//         let cardLong = document.createElement('section');
//         let rentalType = document.createElement('p');
//         let maxPersons = document.createElement('p');        
//         let reserveHalfDay = document.createElement('p'); 
//         let reserveFullDay = document.createElement('p');
//         let walkInHalfDay  = document.createElement('p');
//         let walkInFullDay  = document.createElement('p');

//         rentalType.textContent = `${rental.rentalType}`;
//         maxPersons.textContent = `Max Riders: ${rental.maxPersons}`;
//         reserveHalfDay.textContent = `Reserved Half-day rental: $${rental.reserveHalfDay}`
//         reserveFullDay.textContent = `Reserved Full-day rental: $${rental.reserveFullDay}`
//         walkInHalfDay.textContent = `Walk-in Half-day rental: $${rental.walkInHalfDay}`
//         walkInFullDay.textContent = `Walk-in Full-day rental: $${rental.walkInFullDay}`

//         cardLong.appendChild(rentalType); 
//         cardLong.appendChild(maxPersons);    
//         cardLong.appendChild(reserveHalfDay);
//         cardLong.appendChild(reserveFullDay);
//         cardLong.appendChild(walkInHalfDay);
//         cardLong.appendChild(walkInFullDay);

//         longcards.appendChild(cardLong);
//         // console.log(cardLong);
//     });
// }

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



        // let thRiders = document.createElement('caption');
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
        // maxPersons.setAttribute("colspan",3);

        // thRiders.textContent = `Max Riders:`;
        thReserved.textContent = `Reserved`;
        thWalkin.textContent = `Walk-in`;
        thHalfDay.textContent = `Half-day rental:`;
        thFullDay.textContent = `Full-day rental:`;

        // let ppo = cardLong.trTablRow;

        // cardLong.appendChild(trTablRow);
// ------create table----------
        cardLong.appendChild(cardTable);

        // ------table head span 2---------
        theadHead.appendChild(trTablRow);
        trTablRow.appendChild(rentalType); 



        // -----table head------
        // theadHead.appendChild(trTablRow4);
        // trTablRow4.appendChild(thRiders);
        // trTablRow4.appendChild(maxPersons); 

        cardTable.appendChild(theadHead);
        theadHead.appendChild(trTablRow3);
        
        trTablRow3.appendChild(thReserved);
        trTablRow3.appendChild(thWalkin);

        // --------row 1----------
        cardTable.appendChild(tbodyBody);

        tbodyBody.appendChild(trTablRow4);
        
        

        
        // cardLong.appendChild(thHalfDay)
        
        trTablRow4.appendChild(reserveFullDay);
        trTablRow4.appendChild(walkInFullDay);

        tbodyBody.appendChild(trTablRow2);
        // cardLong.appendChild(trTablRow);
        // cardLong.appendChild(thFullDay)
        // ---------row 2----------        
        trTablRow2.appendChild(reserveHalfDay); 
        trTablRow2.appendChild(walkInHalfDay);


        // *******change this to under the img of the scooter***********
        // cardLong.appendChild(thRiders);
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
