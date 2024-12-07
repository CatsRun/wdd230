// const baseURL = "https://catsrun.github.io/wdd230/";
// const membersURL = "https://catsrun.github.io/wdd230/chamber/data/members.json";
// // const membersURL = data/members.json;
// // 

// const gridButton = document.querySelector("#membergrid");
// const listButton = document.querySelector("#memberlist");
// const chamberMembers = document.getElementById("chambermembers");
 
// async function getMemberData() {
//         const response = await fetch(membersURL);
//         const data = await response.json();
//         displayMembers(data.members);
// };

// // this calls the function getMemberData() and makes it write to the html
// // displayMembers() is called within getMemberData()
// getMemberData();

// const displayMembers = (members) => {    
//     members.forEach((member => {
//         // try printing foreach [0] 

//         // card element
//         let card = document.createElement('div');
//         let name = document.createElement('h3');
//         let logo = document.createElement('img');
//         let address = document.createElement('p');
//         let phone = document.createElement('p');
//         let website = document.createElement("a");        
//         let level = document.createElement('p');
//         let other = document.createElement('p');

//     //  console.log(chamberMembers)

//     // if I do it as a list:
//         // const newListItem = document.createElement("li");
//         // newListItem.textContent =name;
//         // newListItem.  =name;
//         // newListItem.textContent =name;
//         // newListItem.textContent =name;
//         // newListItem.textContent =name;
//         // newListItem.textContent =name;
//         // newListItem.textContent =name;

//         name.textContent = member.name;
//         logo.textContent = member.img;

//         address.textContent = member.address;        
//         phone.textContent = member.phone;
//         website.setAttribute("href", member.website_url);
//         website.textContent = `${member.name} website`;
//         level.textContent = `Membership Level: ${member.level}`;

//         chamberMembers.appendChild(name);
//         card.appendChild(logo);
//         card.appendChild(address);
//         card.appendChild(phone);
//         card.appendChild(website);
//         card.appendChild(level);
//         card.appendChild(other);

//         chamberMembers.appendChild(card);

//         // chamberMembers.forEach(members => {
//         //     chamberMembers.appendChild(card);
//         // });
//         // set the answers to a variable and foreach that variable into sections or cards
//     }));
// }

// displayMembers();


// // getProphetData();

// // const displayProphets = (prophets) => {
// //     prophets.forEach((prophet) => {
        
// //         logo.setAttribute('src', prophet.logourl);
// //         fullName.textContent = `${prophet.name} ${prophet.lastname}`;
// //         dob.textContent = `Date of Birth: ${prophet.birthdate}`;
// //         place.textContent = `Place of Birth: ${prophet.birthplace}`;
// //         logo.setAttribute('loading', 'lazy');
// //         logo.setAttribute('width', '340');
// //         logo.setAttribute('height', '440');

// //         card.appendChild(fullName); 
// //         card.appendChild(dob);
// //         card.appendChild(place);
// //         card.appendChild(logo);
    
// //         cards.appendChild(card);
        
// //     });}

const baseURL = "https://catsrun.github.io/wdd230/"; 
const membersURL = "https://catsrun.github.io/wdd230/chamber/data/members.json"; 
const gridButton = document.querySelector("#membergrid"); 
const listButton = document.querySelector("#memberlist"); 
const chamberMembers = document.getElementById("chambermembers"); 
const displayMembers = (members) => 
    { members.forEach((member) => { 
    let card = document.createElement('div'); 
    let name = document.createElement('h3'); 
    let logo = document.createElement('img'); 
    let address = document.createElement('p'); 
    let phone = document.createElement('p'); 
    let website = document.createElement("a"); 
    let level = document.createElement('p'); 
    let other = document.createElement('p'); 
    name.textContent = member.name; 
    logo.setAttribute('src', member.image); 
    address.textContent = member.address; phone.textContent = member.phone; 
    website.setAttribute("href", member.url); 
    website.textContent = `${member.name} website`; 
    level.textContent = `Membership Level: ${member.level}`; 
    other.textContent = member.other; card.appendChild(name); 
    card.appendChild(logo); 
    card.appendChild(address); 
    card.appendChild(phone); 
    card.appendChild(website); 
    card.appendChild(level); 
    card.appendChild(other); 
    chamberMembers.appendChild(card);
 });
 }; 

 async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members); 
};

// Call the function to fetch and display member data 
getMemberData();