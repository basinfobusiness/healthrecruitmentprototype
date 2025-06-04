'use strict';

const searchInput = document.getElementById('search-input');
const submitBtn = document.getElementById('submit');

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Code to execute when Enter is pressed
    switch(searchInput.value){
      case "Carers":
        window.location.assign('./services.html#carers');
        break;
      case "Registered General & Mental Nurses":
        window.location.assign('./services.html#rgm-nurses');
        break;
      case "Kitchen Assistants":
        window.location.assign('./services.html#kitchen-assistants');
        break;
      case "Chefs":
        window.location.assign('./services.html#chefs');
        break;
      case "Housekeepers":
        window.location.assign('./services.html#housekeepers');
        break;
      case "Home":
      	document.writeln("fetching data... please wait");
        window.location.assign('./index.html');
        break;
      case "Services":
        document.writeln("fetching data... please wait");
        window.location.assign("./services.html");
        break;
      default:
      	document.writeln("fetching data... please wait");
        window.location.assign('./searchmeta.html');
        break;
    }
    console.log('Enter key pressed');
    // alert('key pressed');
  }
});

submitBtn.addEventListener('click',()=>{
	switch(searchInput.value){
      case "Carers":
        document.writeln("loading... please wait");
        window.location.assign('./services.html#carers');
        break;
      case "Registered General & Mental Nurses":
        document.writeln("loading... please wait");
        window.location.assign('./services.html#rgm-nurses');
        break;
      case "Kitchen Assistants":
        document.writeln("loading... please wait");
        window.location.assign('./services.html#kitchen-assistants');
        break;
      case "Chefs":
        document.writeln("loading... please wait");
        window.location.assign('./services.html#chefs');
        break;
      case "Housekeepers":
        document.writeln("loading... please wait");
        window.location.assign('./services.html#housekeepers');
        break;
      case "Home":
      	document.writeln("fetching data... please wait");
        window.location.assign('./index.html');
        break;
      default:
      	document.writeln("fetching data... please wait");
        window.location.assign('./searchmeta.html');
        break;
    }
});