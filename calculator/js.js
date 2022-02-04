resultsField = document.querySelector('#result')
clearDisplay = 1
enableEquals = 0;
collectingPhase = 1;
changeOperator = 0;
numberEntered = 0;


function reset() {
	firstValue = (function () {
		return;
	})();
	secondValue = (function () {
		return;
	})();
	resultsField.textContent = "0"
	clearDisplay = 1
	enableEquals = 0;
	collectingPhase = 1;
	changeOperator = 0;
	numberEntered = 0;
	updateLastPressed("")
}

function empty() {
	resultsField.textContent = ''
}

function updateDisplay(number) {

	numberEntered = 1;

	// Clear display for start
	if (clearDisplay === 1) {
		empty()
		clearDisplay = 0
	}

	// Set max numbers
	if (resultsField.textContent.length > 9) {
		return
	}

	// Disable repeated decimals
	if (resultsField.textContent.includes(".") && number === ".") {
		return
	}

	resultsField.textContent += number

	// Clean extra zero
	firstNumber = resultsField.textContent[0]
	secondNumber = resultsField.textContent[1]

	if (firstNumber === "0" && resultsField.textContent.length > 1 && secondNumber !== ".") {
		resultsField.textContent = resultsField.textContent.substring(1)
		return
	}

	// Add a zero if decimal is the only value 
	if (resultsField.textContent === ".") {
		resultsField.textContent = "0."
	}

	// Recording the first number
	if (collectingPhase === 1) {
		firstValue = resultsField.textContent
	}

	// Recording the second number
	if (collectingPhase === 2) {
		secondValue = resultsField.textContent
		enableEquals = 1;
		changeOperator = 0;
	}

}

function calculate(functionClicked) {

	// Recording the function (add, multiply etc) clicked
	if (collectingPhase === 1 && numberEntered === 1) {
		savedFunction = functionClicked
		updateLastPressed(savedFunction)
		clearDisplay = 1
		collectingPhase = 2
	}

	// Calculate the sum and record another operator
	if (collectingPhase === 2 && changeOperator === 0) {
		equals()
		savedFunction = functionClicked
		updateLastPressed(savedFunction)
		enableEquals = 0
		changeOperator = 1
	}

	// Let user change operator 
	if (changeOperator === 1) {
		savedFunction = functionClicked
		updateLastPressed(savedFunction)
	}

}

function equals() {

	if (typeof firstValue !== 'undefined' && typeof secondValue !== 'undefined') {
		updateLastPressed("=")
		if (savedFunction === "add") {
			newValue = operate(add, firstValue, secondValue)
		}
		if (savedFunction === "subtract") {
			newValue = operate(subtract, firstValue, secondValue)
		}
		if (savedFunction === "multiply") {
			newValue = operate(multiply, firstValue, secondValue)
		}
		if (savedFunction === "divide") {
			if (secondValue == 0) {
				resultsField.textContent = "lol"
				return
			}
			newValue = operate(divide, firstValue, secondValue)
		}

		if (newValue < 9999999999) {
			resultsField.textContent = newValue	
		} else {
			resultsField.textContent = "Too large"
		}
		
		firstValue = newValue
		enableEquals = 0;
		changeOperator = 1;
		collectingPhase = 2;
		clearDisplay = 1
	}
}

document.querySelector('#equals').addEventListener('click', event => {
	equals()
})

document.querySelector('#reset').addEventListener('click', event => {
	reset()
})

document.querySelectorAll('.calc-func').forEach(item => {
	item.addEventListener('click', event => {
		functionClicked = event.target.getAttribute("data-op")
		calculate(functionClicked)
	})
})

document.querySelectorAll('.calc-number').forEach(item => {
	item.addEventListener('click', event => {
		let numberClicked = event.target.getAttribute("data-number")
		updateDisplay(numberClicked)
	})
})

function add(n1, n2) {
	return parseInt(n1) + parseInt(n2)
}

function subtract(n1, n2) {
	return n1 - n2
}

function multiply(n1, n2) {
	return n1 * n2
}

function divide(n1, n2) {
	result = n1 / n2
	return Math.round((result + Number.EPSILON) * 100) / 100
}

function operate(operator, n1, n2) {
	return operator(n1, n2)
}

function updateLastPressed(pressed) {
	lastPressed = document.querySelector('#last-pressed')
	
	if (pressed === "add") {
		pressed = "+"
	}
	if (pressed === "multiply") {
		pressed = "*"
	}
	if (pressed === "subtract") {
		pressed = "-"
	}
	if (pressed === "divide") {
		pressed = "/"
	}
	lastPressed.textContent = (pressed)
}

function enterNumber(e) {

	// if number then use updatedisplay
	numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
	if (numbersArray.indexOf(e.key) !== -1) {
		updateDisplay(e.key)
	}

	// Operations
	if (e.key === "*") {
		calculate("multiply")
	}
	if (e.key === "/") {
		calculate("divide")
	}
	if (e.key === "-") {
		calculate("subtract")
	}
	if (e.key === "+") {
		calculate("add")
	}

	// AC
	if (e.key === "Escape") {
		reset()
	}

	// if enter then press equals
	if (e.key === "Enter" || e.key === "=") {
		equals()
	}
};

window.addEventListener('keydown', enterNumber)
