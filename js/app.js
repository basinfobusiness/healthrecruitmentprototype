import { searchMeta } from '/settings.js';

const showcontact = document.getElementById("contactus");

// functions
const userContact = function(argument) {
	document.writeln("loading... please wait");
	window.location.assign("contact.html");
}

function searchFirm(){
	document.writeln('getting ready...');
	searchMeta();
}

//listen for events
showcontact.addEventListener('click',userContact,true);