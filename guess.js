var numSquares = 12;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");

setupSquares();
setup();

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		// adding click listeners to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor){
                this.innerText = "win!";
                this.style.color = "white";
                this.style.fontSize = "3em";
			} else {
                this.style.background="white";
                this.innerText = "nope";
			}
		});
	}
}
function setup(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();

	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// "r" from 0 - 255
	var r = Math.floor(Math.random() * 255);
	// "g" from 0 - 255
	var g = Math.floor(Math.random() * 255);
	// "b" from 0 - 255
	var b = Math.floor(Math.random() * 255);
	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b +  ")";
    // attempted with rgba & hsl/hsla, both aren't working well
}