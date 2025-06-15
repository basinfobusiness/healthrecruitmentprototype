'use strict'

const testimonial = document.getElementById("testimonial");
const vahcare = document.getElementById("vahcare");
const jobs = document.getElementById("jobs");

// functions
// const testimonialFunction = function(){
// 	document.writeln('loading... please wait');
// 	window.location.assign('testimonial.html');
// }

const vahCare = function(){
	document.writeln('loading... please wait');
	window.location.assign('./index.html');
}

const jobsFunction = function(){
	document.writeln('location... please wait');
	window.location.assign('./job.html');
}

//listen for events
// testimonial.addEventListener('click',testimonialFunction,true);

vahcare.addEventListener('click',vahCare,false);

jobs.addEventListener('click',jobsFunction,false);
