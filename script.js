const operation = document.getElementById('operation');
const result = document.getElementById('result');

const numbers = [...document.querySelectorAll('.row div')];
const decimal = document.getElementById('decimal');
const operators = [...document.querySelectorAll('.ops-row div')];
const equals = document.getElementById('equals');
const clear = document.getElementById('c');
const allClear = document.getElementById('ac');

let firstNum = '';
let secondNum = '';
let currentOperand = 'first';
let currentOperator = '';
let total = 0;

const updateDisplay = () => {
	operation.textContent = `${firstNum} ${currentOperator} ${secondNum}`;
};

const addOperatorEvents = operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		if (currentOperand === 'first') {
			currentOperator = operator.textContent;
			currentOperand = 'second';
		}
		updateDisplay();
	});
});

const addNumberEvent = numbers.forEach((number) => {
	number.addEventListener('click', () => {
		if (number.textContent === '.') {
			return;
		}
		if (currentOperand === 'first') {
			firstNum += number.textContent;
		} else {
			secondNum += number.textContent;
		}
		updateDisplay();
	});
});

decimal.addEventListener('click', () => {
	if (currentOperand === 'first' && !firstNum.includes('.')) {
		firstNum += '.';
	} else if (currentOperand === 'second' && !secondNum.includes('.')) {
		secondNum += '.';
	}
	updateDisplay();
});

equals.addEventListener('click', () => {
	if (firstNum && currentOperand && secondNum) {
		total = eval(`${firstNum} ${currentOperator} ${secondNum}`);
		result.textContent = total;
		secondNum = '';
		currentOperator = '';
		currentOperand = 'first';
		firstNum = total.toString();
	}
});

clear.addEventListener('click', () => {
	if (currentOperand === 'first') {
		firstNum = '';
	} else if (currentOperand === 'second' && secondNum === '') {
		console.log('clearing');
		currentOperand = 'first';
		currentOperator = '';
	} else if (currentOperand === 'second') {
		secondNum = '';
	}
	updateDisplay();
});

allClear.addEventListener('click', () => {
	firstNum = '';
	secondNum = '';
	currentOperand = 'first';
	currentOperator = '';
	result.textContent = '';
	total = 0;
	updateDisplay();
});
