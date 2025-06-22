import { recruitmentRoute, careServicesRoute } from "./index.js";

const recruitment = document.getElementById("recruitment");
const readmore = document.getElementById("read-more");
const clientCountElement = document.getElementById('happy-clients');
const memberCountElement = document.getElementById('member-active');
const reviewsCountElement = document.getElementById('client-reviews');
const experienceCountElement = document.getElementById('experience');
const commitment = document.getElementById('our-commitment');

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

const clientCount = 1000; // Replace with your actual client count

function animateCount() {
  let currentCount = 0;
  const interval = setInterval(() => {
    currentCount+=200;
    clientCountElement.textContent = currentCount;
    memberCountElement.textContent = currentCount;
    reviewsCountElement.textContent = currentCount;
    experienceCountElement.textContent = currentCount;
    
    if (currentCount === 1000) {
    	clientCountElement.textContent = "3K+";
    	memberCountElement.textContent = "1.7K+";
    	reviewsCountElement.textContent = "4.7K+";
    	experienceCountElement.textContent = "6+";
    }
    if (currentCount >= clientCount) {
      clearInterval(interval);
    }
  }, 30); // Adjust the interval time to control the animation speed
}

commitment.addEventListener('mouseover', () => {
    animateCount();
});