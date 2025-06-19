import { recruitmentRoute, careServicesRoute } from "./index.js";

const recruitment = document.getElementById("recruitment");
const careservices = document.getElementById("care-services");
const readmore = document.getElementById("read-more");

recruitment.addEventListener("click",function(event){
	event.preventDefault();

	document.writeln("Loading... please wait");
	recruitmentRoute();
});

careservices.addEventListener("click",function(event){
	event.preventDefault();

	document.writeln("Loading... please wait");
	careServicesRoute();
});

readmore.addEventListener("click",function(event){
	event.preventDefault();

	document.writeln("Loading... please wait");
	careServicesRoute();
});