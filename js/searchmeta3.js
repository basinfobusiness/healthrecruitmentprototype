const specialtyCategory = document.getElementById("specialty-category");
const searchTermRow = document.querySelectorAll(".specialty");
const searchTerm = document.querySelectorAll(".specialty-name");
const specialty = ["Registered General & Mental Nurses","Health Assistants","Kitchen Assistants","Chefs","Housekeepers"]
const matchspecialty = [];

specialtyCategory.addEventListener('change', () => {
  console.log('specialty category is been set');
  for(let i = 0; i < searchTermRow.length; i++){
    console.log('checking');
      for (let i = 0; searchTerm.length; i++) {
        const item = searchTermRow[i];
        if (searchTerm[i] === specialty[i]) {
          matchspecialty.push(searchTerm[i]);
          // const item = searchTerm[i]
          // item.innerHTML = `
          //   <div class="row">
          //       <div class="col-sm-6 col-md-8">
          //         <h5 class="specialty-name">${itemname}</h5>
          //         <h6><i class="fa fa-map-marker" aria-hidden="true"></i> United Kingdom</h6>
          //       </div>
          //       <div class="col-sm-6 col-md-4 d-flex justify-content-end">
          //         <button class="btn text-uppercase apply-btn" onclick="applyNow()">apply now</button>
          //       </div>
          //   </div>
          // `;
          console.log(specialty[i]);
        }else{
          item.style.display = "none";
        }
      }
      // console.log(matchspecialty[i]);
    }
    console.log(matchspecialty[i]);
  // for (let i = 0; i < listItems.length; i++) {
  //   const item = specialty[i];
  //   const text = item.textContent.toLowerCase();

  //   if (text.includes(searchTerm)) {
  //     item.style.display = 'block';
  //     document.getElementById("searchres3").textContent = "match found";
  //   } else {
  //     item.style.display = 'none';
  //     document.getElementById("searchres3").textContent = "nothing found";
  //     // document.getElementById("searchres1").style.display = "none";
  //     // document.getElementById("searchres2").style.display = "none";
  //   }
  // }
});