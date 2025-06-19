import { recruitmentRoute, careServicesRoute } from "./index.js";
const recruitment = document.getElementById("recruitment");
const careservices = document.getElementById("care-services");
const readmore = document.getElementById("read-more");

recruitment.addEventListener("click",function(event){
	event.preventDefault();

	document.writeln("<span class='spinner-border text-info'></span> Loading...");
	recruitmentRoute();
});

careservices.addEventListener("click",function(event){
	event.preventDefault();

	document.writeln("<span class='spinner-border text-info'></span> Loading...");
	careServicesRoute();
});

readmore.addEventListener("click",function(event){
	event.preventDefault();

	document.writeln("<span class='spinner-border text-info'></span> Loading...");
	careServicesRoute();
});