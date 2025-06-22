import { applyNowFunction } from "./index.js";

const currentDate = new Date();
const serviceslist = document.querySelectorAll(".about-services-list li");

// to get current year
function getYear() {
    let currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerText = currentYear;
}

(()=>{
    getYear();

    serviceslist.forEach((item, index) =>{
    setTimeout(() =>{
        item.style.opacity = 1;
    }, index * 200); // Adjust the animation speed
});

})();

function applyNow(){
    document.writeln("Loading... please wait");
    applyNowFunction();
}

// setTimeout(() => {
//   document.getElementById("innovation-and-integrity").style.display = "block";
// }, 2000);  2000ms = 2s delay

// for (let i = serviceslist.length - 1; i >= 0; i--) {
//     serviceslist[i]
// }
