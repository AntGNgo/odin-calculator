const operation = document.getElementById('operation');
const result = document.getElementById('result');

const numbers = [...document.querySelectorAll('.row div')];
const operators = [...document.querySelectorAll('.ops-row div')];
const equals = document.getElementById('equals');
const clear = document.getElementById('c');
const allClear = document.getElementById('ac');

let firstNum = '';
let secondNum = '';
let total = 0;
let currentOperand = '';

const triggerOperationUpdate = () => {
	if (firstNum.length === 0) {
		operation.textContent = '';
	}
	operation.textContent = `${firstNum} ${currentOperand} ${secondNum}`;
};

const addOperatorEvents = operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		if (firstNum.length !== 0) {
			currentOperand = operator.textContent;
			triggerOperationUpdate();
		}
	});
});

const addNumberEvent = numbers.forEach((number) => {
	number.addEventListener('click', () => {
		if (currentOperand.length === 0 || firstNum.length === 0) {
			firstNum += number.textContent;
			triggerOperationUpdate();
		} else {
			secondNum += number.textContent;
			triggerOperationUpdate();
		}
	});
});

equals.addEventListener('click', () => {
	if (firstNum.length !== 0 && secondNum.length !== 0) {
		total = eval(`${firstNum} ${currentOperand} ${secondNum}`);
		result.textContent = total;
		currentOperand = '';
		// secondNum = '';
		firstNum = total.toString();
	}
});

clear.addEventListener('click', () => {
	if (secondNum.length === 0) {
		firstNum = '';
		result.textContent = '';
		triggerOperationUpdate();
	} else {
		secondNum = '';
		result.textContent = '';
		triggerOperationUpdate();
	}
});

allClear.addEventListener('click', () => {
	firstNum = '';
	currentOperand = '';
	secondNum = '';
	total = 0;
	result.textContent = '';
	triggerOperationUpdate();
});
