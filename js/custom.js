import { applyNowFunction } from "./index.js";

const currentDate = new Date();
const serviceslist = document.querySelectorAll(".about-services-list li");
const currentYear = currentDate.getFullYear();
const yearLabel = document.querySelector("#displayYear");
const carouimage = document.querySelectorAll(".main-carousel");

// to get current year
function getYear() {
    yearLabel.textContent = currentYear.toString();
}

(()=>{
    getYear();

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
     if (navigator.userAgent == "Android") {
        for (let i = carouimage.length - 1; i >= 0; i--) {
            carouimage[i].src = "./images/mobile-healthservices.png";
        }
    }else{
        console.log("nothing to show OS: " + navigator.userAgent);
    }
}

// setTimeout(() => {
//   document.getElementById("innovation-and-integrity").style.display = "block";
// }, 2000);  2000ms = 2s delay

// for (let i = serviceslist.length - 1; i >= 0; i--) {
//     serviceslist[i]
// }
