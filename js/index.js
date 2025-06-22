function recruitmentRoute() {
	window.location.assign("./job.html");
}

function careServicesRoute() {
	window.location.assign("./services.html");
}

function applyNowFunction(){
	console.log("i got executed")
    window.location.assign("./index.html#contact-us")
}

export { recruitmentRoute, careServicesRoute, applyNowFunction}