var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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
