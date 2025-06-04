// import { searchMeta } from '/settings.js';

const showcontact = document.getElementById("contactus");
const servicemeta = document.getElementById("servicemeta");

// functions
function searchMeta() {
	document.writeln('loading... please wait...');
	window.location.assign('./searchmeta.html');
}

const userContact = function(argument) {
	document.writeln("loading... please wait");
	window.location.assign("contact.html");
}

function searchFirm(){
	document.writeln("getting ready...");
	searchMeta();
}

function serviceMeta(){
	document.writeln("getting ready...");
	window.location.assign("sevices.html");
}
//listen for events
showcontact.addEventListener('click',userContact,true);