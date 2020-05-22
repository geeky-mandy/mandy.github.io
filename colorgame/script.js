var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var resetButton = document.querySelector("#reset")
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function()
{
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numOfSquares = 3;
	colors = generateRandomColor(numOfSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background = colors[i];
		squares[i+3].style.display = "none";
	}
});
hardButton.addEventListener("click", function()
{
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColor(numOfSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background = colors[i];
		squares[i+3].style.display = "block";
	}
});
resetButton.addEventListener("click", function()
{
	//want to generate random rgb color
	colors = generateRandomColor(numOfSquares);
	//pick a random color from 6 rgb color
	pickedColor = pickRandomColor();
	//change colorDisplay (change the rgb code on span)
	colorDisplay.textContent = pickedColor;
	//change color of squares on the page
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = colors[i];
	}
	//make the background of h1 black
	h1.style.background = "steel blue";
	//change the button content to new colors once play again is clicked
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++)
{
	//add initial colors to square
	squares[i].style.background = colors[i];

	//add Click listener to squares
	squares[i].addEventListener("click", function()
	{
		//getting the color of clicked square
		var clickedColor = this.style.background;
		//compare color of pickedColor to clickedColor
		if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct";
				sameColor(clickedColor);
				h1.style.background = pickedColor;
				resetButton.textContent = "PLAY AGAIN?"
			}
		else
			{
				this.style.background = "#232323";
				messageDisplay.textContent ="Try Again";
			}
	});
}

function sameColor(color)
{
	for(var i=0; i<squares.length; i++)
		{
			squares[i].style.background = color;
		}
}
function pickRandomColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return(colors[random]);
}
function generateRandomColor(num)
{
	//make an empty array
	var arr =[];
	//loop over the number of elements in the arguement
	for(var i=0; i<num; i++)
	{
		arr.push(randomRgb());
	}
	return arr;
}
function randomRgb()
{
 	//random r 0-255
 	var r = Math.floor(Math.random() *256);
 	//random g 0-255
 	var g = Math.floor(Math.random() *256);
 	//random b 0-255
 	var b = Math.floor(Math.random() *256);
 	//return rgb in the format of "rgb(255, 0, 0)"
 	return "rgb(" + r + ", " + g + ", " + b + ")";
}
