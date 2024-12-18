// change hero img every 7 seconds
const heroimg1 = "images/cruzeline-small-plexels.webp";
const heroimg2 = "images/ocean-road-small.webp";
const heroimg3 = "images/road-small.webp";
const heroimg4 = "images/scooters-plexels.webp";

const heroimgArray = ["images/cruzeline-small-plexels.webp",
 "images/ocean-road-small.webp",
 "images/road-small.webp",
 "images/scooters-plexels.webp"]

    let renew = setInterval(function(){
        if(links.length == i){
            i = 0;
        }
        else {
        document.querySelector("island-pic").src = images[i]; 
        // document.getElementById("bannerLink").href = links[i]; 
        i++;
            console.log(renew)
    }
    },2000);
    