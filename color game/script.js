var colors = [
			"rgb(255, 0, 0)",
			"rgb(255, 255, 0)",
			"rgb(0, 255, 0)",
			"rgb(0, 255, 255)",
			"rgb(0, 0, 255)",
			"rgb(255, 0, 255)"	
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

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