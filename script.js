const display = document.querySelector("#display");
let onDisplayValue = 0;
let storedValue = 0;
let currentOperation;
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const calcButtons = document.querySelectorAll(button);

function buttonPressed() {
	let type = this.innerHTML;
	if (numbers.includes(type)) {
		addToDisplay(type);
	} else {
	}
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

function addToDisplay(num) {
	let value = getValueOnDisplay();
	showOnDisplay(value + num);
}

function showOnDisplay(content) {
	display.innerText = content;
}
function allClearDisplay() {
	currentOperation = "";
	display.innerText = "";
}
function clearDisplay() {
	let value = getValueOnDisplay();
	value[-1] = "";
	showOnDisplay(value);
}
function getValueOnDisplay() {
	onDisplayValue = display.innerHTML;
}

calcButtons.addEventListener("click", buttonPressed);
