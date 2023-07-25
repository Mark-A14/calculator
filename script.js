const display = document.querySelector("#display");
let onDisplayStringValue;
let onDisplayNumValue = 0;
let storedValue = 0;
let currentOperation = "";
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "x", "/"];

const calcButtons = document.querySelectorAll("button");

function buttonPressed() {
	let type = this.innerHTML;
	if (numbers.includes(type)) {
		if (display.innerHTML == onDisplayNumValue) {
			allClearDisplay();
		}
		addNumToDisplay(type);
	}
	if (operators.includes(type)) {
		currentOperation = type;
		getValueOnDisplay();
		storedValue = onDisplayNumValue;
	}
	if (type == "=") {
		runOperation();
		currentOperation = "";
	}

	if (type == "AC") {
		allClearDisplay();
	}

	if (type == "C") {
		clearDisplay();
	}

	if (type == ".") {
	}
	console.log("<----------------->");
	console.table(onDisplayNumValue);
	console.log(onDisplayStringValue);
	console.log(storedValue);
	console.log(currentOperation);
	console.log("<----------------->");
}

function add(num1, num2) {
	return num1 + num2;
}
function subtract(num1, num2) {
	return num1 - num2;
}
function multiply(num1, num2) {
	return num1 * num2;
}
function divide(num1, num2) {
	return num1 / num2;
}

function addNumToDisplay(stringNum) {
	getValueOnDisplay();
	onDisplayStringValue += stringNum;
	showOnDisplay(onDisplayStringValue);
}

function showOnDisplay(content) {
	display.innerText = content;
}

function allClearDisplay() {
	//currentOperation = "";
	display.innerText = "";
}
function clearDisplay() {
	getValueOnDisplay();
	let value = onDisplayStringValue;
	// if (value.length == 1) {
	// 	allClearDisplay();
	// 	return;
	// }
	value = value.slice(0, -1);
	console.log(value, "asjldfhhjksaf");
	showOnDisplay(value);
}

function getValueOnDisplay() {
	onDisplayStringValue = display.innerHTML;
	onDisplayNumValue = parseFloat(onDisplayStringValue);
}

function runOperation() {
	getValueOnDisplay();
	allClearDisplay();
	switch (currentOperation) {
		case "+":
			showOnDisplay(add(storedValue, onDisplayNumValue));
			break;

		case "-":
			showOnDisplay(subtract(storedValue, onDisplayNumValue));
			break;

		case "x":
			showOnDisplay(multiply(storedValue, onDisplayNumValue));
			break;

		case "/":
			showOnDisplay(divide(storedValue, onDisplayNumValue));
			break;
	}
	getValueOnDisplay();
}

calcButtons.forEach((button) =>
	button.addEventListener("click", buttonPressed)
);
