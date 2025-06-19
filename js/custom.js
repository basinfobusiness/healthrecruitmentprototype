const currentDate = new Date();
function contactFunction(){
    document.writeln("Loading... please wait");
    window.location.assign("./index.html#contact-us")
}

// to get current year
function getYear() {
    let currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

(()=>{
    'use strict'
    getYear();
})();