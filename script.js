var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector("button")
var body = document.getElementById("gradient");



body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

function changeBackground() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomColorToValue(){
	color1.value = getRandomColor();
	color2.value = getRandomColor(); 
	changeBackground();
}

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

button.addEventListener("click", randomColorToValue);