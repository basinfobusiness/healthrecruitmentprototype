import { applyNowFunction } from "./index.js";

const currentDate = new Date();
const serviceslist = document.querySelectorAll(".about-services-list li");
const currentYear = currentDate.getFullYear();
const yearLabel = document.querySelector("#displayYear");
const carouimage = document.getElementById("main-carousel");
const carousecondImage = document.getElementById("second-carousel");
const carouthirdImage = document.getElementById("third-carousel");


// to get current year
function getYear() {
    yearLabel.textContent = currentYear.toString();
}

(()=>{
    // getYear();

    serviceslist.forEach((item, index) =>{
        setTimeout(() =>{
            item.style.opacity = 1;
        }, index * 200); // Adjust the animation speed
    });
    userOs();
    console.log(navigator.userAgentData);
})();

function applyNow(){
    document.writeln("Loading... please wait");
    applyNowFunction();
}

function userOs(){
     if (navigator.platform != "Android") {
            carouimage.src = "./images/vahcare-home-img.png";
            carouimage.alt = "recruitment banner image 1"
            carousecondImage.src = "./images/vahcare-home-img.png";
            carousecondImage.alt = "recruitment banner image 2"
            carouthirdImage.src = "./images/vahcare-home-img.png";
            carouthirdImage.alt = "recruitment banner image 3"
    }else{
        console.log("nothing to show OS: " + navigator.platform);
        // alert('problem')
    }
}

// setTimeout(() => {
//   document.getElementById("innovation-and-integrity").style.display = "block";
// }, 2000);  2000ms = 2s delay

// for (let i = serviceslist.length - 1; i >= 0; i--) {
//     serviceslist[i]
// }
