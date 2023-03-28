const operands = Array.from(document.querySelectorAll('.operand'));
const operators = Array.from(document.querySelectorAll('.operator'))
const result = document.querySelector('.result');
const equal = document.querySelector('#equal')

let x = ''; // first operand
let operator;
let y = ''; // second operand
let answer = 0;

operands.map(operand => {
    operand.addEventListener('click', (e) => {
        if (!operator || x === '') {
            operator = null // don't allow operator to be selected without first operand(x)
            x += e.target.textContent
            result.textContent = x // change display to match first operand(x)
        } else { // if there is an operator and a first operand(x) selected move on to second operand(y)
            y += e.target.textContent
            result.textContent = y
        }
    })
});

operators.map(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.textContent
    })
});

equal.addEventListener('click', (e) => {
    x = Number(x)
    y = Number(y)
    
    switch (operator) {
        case '+':
            add(x, y)
            result.textContent = answer
            break;
        case '-':
            sub(x, y)
            result.textContent = answer
            break;
        case 'x':
            mult(x, y)
            result.textContent = answer
            break;
        case '/':
            divide(x, y)
            result.textContent = answer
            break;
    }
});

function add(x, y) {
    return answer = x + y
};

function sub(x, y) {
    return answer = x - y
};

function mult(x, y) {
    return answer = x * y
};

function divide(x, y) {
    return answer = x / y
};