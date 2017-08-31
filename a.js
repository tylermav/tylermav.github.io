var numSqs = 6;
var colors = [];
var pickedColor;
var colorDis = document.getElementById('rgb');
var h1 = document.querySelector('h1');
var messageDis = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var sqs = document.querySelectorAll('.square');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	//mode buttons event listeners
	setUpModeButtons();
	setUpSqs();
	reset();
}

function setUpModeButtons() {
		for(var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener('click', function() {
				modeButtons[0].classList.remove('selected');
				modeButtons[1].classList.remove('selected');
				this.classList.add('selected');

				this.textContent === "Easy" ? numSqs = 3 : numSqs = 6;
				
				reset();
		});
	}
}

function setUpSqs() {
	for(var i = 0; i < sqs.length; i++) {
		//add click listeners to squares
		sqs[i].addEventListener('click', function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
				//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDis.textContent = 'Correct!';
				resetButton.textContent = 'Play Again!';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messageDis.textContent = 'Try Again'
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numSqs);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDis to match picked Color
	colorDis.textContent = pickedColor;
	resetButton.textContent = 'new colors'
	//change colors of squares
	for(var i = 0; i < sqs.length; i++) {
			if(colors[i]) {
				sqs[i].style.display = 'block';
			sqs[i].style.backgroundColor = colors[i];
		} else {
			sqs[i].style.display = 'none'; 
		}
	}
	h1.style.backgroundColor = 'steelblue';
	messageDis.textContent = "";
	resetButton.textContent = 'New Colors';
}

resetButton.addEventListener('click', function() {
	reset();
})

function changeColors(color) {
	//loop through all squares 
	for(var i = 0; i < sqs.length; i++) {
		//change each color to match given color
		sqs[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random colors and push into arr
		arr.push(randColor());
	}
	//return that array
	return arr;
}

function randColor() {
	//generate random red color
	var r = Math.floor(Math.random() * 256);
	//generate random green color
	var g = Math.floor(Math.random() * 256);
	//generate random blue color
	var b = Math.floor(Math.random() * 256);

	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

/*ezBtn.addEventListener('click', function() {
	hardBtn.classList.remove("selected");
	ezBtn.classList.add("selected");
	numSqs = 3;
	colors = generateRandomColors(numSqs);
	pickedColor = pickColor();
	colorDis.textContent = pickedColor;
	for(var i = 0; i < sqs.length; i++) {
		if(colors[i]) {
			sqs[i].style.backgroundColor = colors[i];
		} else {
			sqs[i].style.display = 'none';
		}
	}
	resetButton.textContent = 'New Colors';
})

hardBtn.addEventListener('click', function() {
	hardBtn.classList.add("selected");
	ezBtn.classList.remove("selected");
	numSqs = 6;
	colors = generateRandomColors(numSqs);
	pickedColor = pickColor();
	colorDis.textContent = pickedColor;
	for(var i = 0; i < sqs.length; i++) {
		sqs[i].style.backgroundColor = colors[i];
		sqs[i].style.display = 'block';
	}
	resetButton.textContent = 'New Colors';
})*/