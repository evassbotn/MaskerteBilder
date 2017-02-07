function loggUtInn() {
	var link = document.getElementById("loggUtInn");
	if(link.innerHTML == "Logg ut") {
		link.innerHTML = "Logg inn";
	} else if(link.innerHTML == "Logg inn") {
		link.innerHTML = "Logg ut";
	}
}

function sprettMeny() {
	var drop = document.getElementById("mobildrop");
}