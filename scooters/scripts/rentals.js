// pulling from rentals.JSON to populate Home rental info
const names = document.querySelector('#names');
const persons = document.querySelector('#persons');
const rentalData = 'https://catsrun.github.io/wdd230/scooters/data/rentals.json';
const cards = document.querySelector('#cards');


const displayRentals = (data) => {
    // console.log(data.rental);
      data.rental.forEach((rental) => {
        // console.log(rental);
        let card = document.createElement('section');
        let rentalType = document.createElement('li');
        let maxPersons = document.createElement('li');
        // portrait.setAttribute('src', rental.imageurl);
        rentalType.textContent = `${rental.rentalType}`;
        maxPersons.textContent = `Max Riders: ${rental.maxPersons}`;


    // work but are not looping
        //  names.innerHTML = `${rental.rentalType} :name of scooter`;
        //  persons.innerHTML = `${rental.maxPersons} :number of persons`;

        card.appendChild(rentalType); 
        card.appendChild(maxPersons);

        
        cards.appendChild(card);
        // console.log(rental);

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
