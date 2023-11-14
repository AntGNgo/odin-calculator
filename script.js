const operation = document.getElementById('operation');
const result = document.getElementById('result');

const numbers = [...document.querySelectorAll('.row div')];
const operators = [...document.querySelectorAll('.ops-row div')];
const equals = document.getElementById('equals');

let firstNum = '';
let secondNum = '';
let total = 0;
let currentOperand = '';

const triggerOperationUpdate = () => {
	operation.textContent = `${firstNum} ${currentOperand} ${secondNum}`;
};

const addOperatorEvents = operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		currentOperand = operator.textContent;
		triggerOperationUpdate();
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
		result.textContent = eval(`${firstNum} ${currentOperand} ${secondNum}`);
	}
});
