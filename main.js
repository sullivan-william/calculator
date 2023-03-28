const operands = Array.from(document.querySelectorAll('.operand'));
const operators = Array.from(document.querySelectorAll('.operator'));
const result = document.querySelector('.result');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

let x = ''; // first operand
let operator;
let y = ''; // second operand
let answer = 0;

let selectedOperator;
function highlightSelectedOperator() {
    operators.forEach(operator => {
        if (operator.style.backgroundColor === 'aqua' && operator !== selectedOperator) {
            operator.style.backgroundColor = 'orange'
        }
    })
}

operands.map(operand => {
    operand.addEventListener('click', (e) => {
        if (!operator || x === '') {
            operator = null // don't allow operator to be selected without first operand(x)
            x += e.target.textContent
            result.textContent = x // change display to match first operand(x)
        } else {
            y += e.target.textContent
            result.textContent = y
        }
    })
});

operators.map(button => {
    button.addEventListener('click', (e) => {
        if (x !== '') {
            operator = e.target.textContent
            y = '' // resets y if starting a new operation with current answer as the first operand(x)
            selectedOperator = e.target
            selectedOperator.style.backgroundColor = 'aqua'
            highlightSelectedOperator()
        }
    }) 
});

equal.addEventListener('click', (e) => {
    if (x === '' || y === '') {
        result.textContent = x // if equal button pressed with one or less operands, return single operand or empty string
    } else { // otherwise, turn x and y into numbers and run function based on the operator
        x = Number(x)
        y = Number(y)

        switch (operator) {
            case '+':
                add(x, y)
                result.textContent = answer
                x = answer
                break;
            case '-':
                sub(x, y)
                result.textContent = answer
                x = answer
                break;
            case 'x':
                mult(x, y)
                result.textContent = answer
                x = answer
                break;
            case '/':
                divide(x, y)
                result.textContent = answer
                x = answer
                break;
        }
    }
    
});

clear.addEventListener('click', () => {
    x = ''
    operator = null
    y = ''
    answer = 0
    result.textContent = ''
    selectedOperator = null
    highlightSelectedOperator()
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