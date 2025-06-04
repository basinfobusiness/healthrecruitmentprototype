'use strict';

// search result
(()=>{
    const searchheader = document.getElementById("searchheader");
    document.getElementById("searchres1").textContent = "contact";
    document.getElementById("searchres2").textContent = "Jobs";
    document.getElementById("searchres3").textContent = "no searching"
})();
 
const searchInput = document.getElementById('search-input');
const searchList = document.getElementById('search-list');
const mental = document.getElementById('product-rgm');
const kitchenassist = document.getElementById('product-ka');
const housekeeper = document.getElementById('product-hk');
const chef = document.getElementById('product-cf');
const carers = document.getElementById('product-ca');


mental.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching careers');

  sessionStorage.setItem('searchpara',mental.innerText);
  window.location.assign('./services.html#rgm-nurses');
});

kitchenassist.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching careers');

  sessionStorage.setItem('searchpara',kitchenassist.innerText);
  window.location.assign('./services.html#kitchen-assistants');
});

housekeeper.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching careers');

  sessionStorage.setItem('searchpara',housekeeper.innerText);
  window.location.assign('./services.html#housekeepers');
});

chef.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching careers');

  sessionStorage.setItem('searchpara',chef.innerText);
  window.location.assign('./services.html#chefs');
});

carers.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching careers');

  sessionStorage.setItem('searchpara',carers.innerText);
  window.location.assign('./services.html#carers');
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const listItems = searchList.children;

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    const text = item.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      item.style.display = 'block';
      document.getElementById("searchres3").textContent = "match found";
    } else {
      item.style.display = 'none';
      document.getElementById("searchres3").textContent = "nothing found";
      // document.getElementById("searchres1").style.display = "none";
      // document.getElementById("searchres2").style.display = "none";
    }
  }
});

searchInput.addEventListener('change', (event) => {
  console.log('Text changed:', event.target.value);
  const searchTerm = searchInput.value.toLowerCase();
  sessionStorage.setItem('searchpara',searchTerm);
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Code to execute when Enter is pressed
    switch(searchInput.value){
      case "Carers":
        document.writeln("fetching data... please wait");
        window.location.assign('./services.html#carers');
        break;
      case "Registered General & Mental Nurses":
        document.writeln("fetching data... please wait");
        window.location.assign('./services.html#rgm-nurses');
        break;
      case "Kitchen Assistants":
        document.writeln("fetching data... please wait");
        window.location.assign('./services.html#kitchen-assistants');
        break;
      case "Chefs":
        document.writeln("fetching data... please wait");
        window.location.assign('./services.html#chefs');
        break;
      case "Housekeepers":
        document.writeln("fetching data... please wait");
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
    // if (sessionStorage.getItem('searchpara') !== null) {
    //   window.location.assign('./services.html');
    // }
    console.log('Enter key pressed');
    // alert('key pressed');
  }
});

function contactFunction() {
  document.writeln("loading... please wait");
  window.location.assign("./contact.html");
}

function jobsFunction(){
  document.writeln("loading... please wait");
  window.location.assign("./job.html");
}