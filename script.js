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

const triggerOperationUpdate = () => {};

const addOperatorEvents = operators.forEach((operator) => {
	operator.addEventListener('click', () => {});
});

const addNumberEvent = numbers.forEach((number) => {
	number.addEventListener('click', () => {});
});

decimal.addEventListener('click', () => {});

equals.addEventListener('click', () => {});

clear.addEventListener('click', () => {});

allClear.addEventListener('click', () => {});
