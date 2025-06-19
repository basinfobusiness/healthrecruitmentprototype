import { recruitmentRoute, careServicesRoute } from "./index.js";

const recruitment = document.getElementById("recruitment");
const readmore = document.getElementById("read-more");

recruitment.addEventListener("click",function(event){
	event.preventDefault();

	document.writeln("Loading... please wait");
	recruitmentRoute();
});

readmore.addEventListener("click",function(event){
	event.preventDefault();

	document.writeln("Loading... please wait");
	careServicesRoute();
});

