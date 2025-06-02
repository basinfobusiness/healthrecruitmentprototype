// import { searchMeta } from '/settings.js';

const showcontact = document.getElementById("contactus");

// functions
function searchMeta() {
	document.writeln('loading... please wait...');
	window.location.assign('searchmeta.html');
}

const userContact = function(argument) {
	document.writeln("loading... please wait");
	window.location.assign("contact.html");
}

function searchFirm(){
	document.writeln("<span class='spinner-border text-secondary'></span>getting ready...");
	searchMeta();
}

//listen for events
showcontact.addEventListener('click',userContact,true);