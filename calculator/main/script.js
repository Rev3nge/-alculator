let display = document.getElementById("display");
let firstOperand = null;
let currentOperation = null;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    firstOperand = null;
    currentOperation = null;
}

function setOperation(operator) {
    if (currentOperation !== null) calculate();
    firstOperand = display.value;
    currentOperation = operator;
    display.value += ` ${operator} `;
}

function calculate() {
    if (currentOperation === null) return;
    let parts = display.value.split(' ');
    if (parts.length !== 3) return; 
    let secondOperand = parseFloat(parts[2]);
    let result;

    switch (currentOperation) {
        case '+':
            result = parseFloat(parts[0]) + secondOperand;
            break;
        case '-':
            result = parseFloat(parts[0]) - secondOperand;
            break;
        case '*':
            result = parseFloat(parts[0]) * secondOperand;
            break;
        case '/':
            result = parseFloat(parts[0]) / secondOperand;
            break;
        default:
            return;
    }
    display.value = result; 
    firstOperand = result;
    currentOperation = null;
}