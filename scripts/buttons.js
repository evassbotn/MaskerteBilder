function loggUtInn() {
	var link = document.getElementById("loggUtInn");
	if(link.innerHTML == "Logg ut") {
		link.innerHTML = "Logg inn";
	} else if(link.innerHTML == "Logg inn") {
		link.innerHTML = "Logg ut";
	}
}

function sprettMeny() {
	var mainbarItems = document.getElementsByClassName("mainbar")[0].getElementsByTagName("a");
	var kapheItems = document.getElementById("kaphe").getElementsByTagName("a");

	var menu = "<ul>";
	for(var x = 0; x < mainbarItems.length; x++) {
		menu += "<li>" + mainbarItems[x] + "</li>";
	}
	for(var x = 0; x < kapheItems.length; x++) {
		menu += "<li>" + kapheItems[x] + "</li>";
	}
	menu += "</ul>";

	var drop = document.getElementById("mobildrop");
	drop.innerHTML = menu;
}

function mm_showMenu(menuName) // , alwaysVisState = optional. 1=on, 0=off
{
  var menuNum = getMenuByName(menuName);
  if (arguments.length > 1)_m[menuNum][7] = arguments[1];
  menuDisplay(menuNum, 1);
}

function mm_hideMenu(menuName) // , alwaysVisState = optional. 1=on, 0=off
{
  var menuNum = getMenuByName(menuName);
  if (arguments.length > 1)_m[menuNum][7] = arguments[1];
  menuDisplay(menuNum, 0);
}