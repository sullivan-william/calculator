const operands = Array.from(document.querySelectorAll('.operand'));
const operators = Array.from(document.querySelectorAll('.operator'));
const result = document.querySelector('.result');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const posToNeg = document.querySelector('#pos-neg');
const percentage = document.querySelector('#percentage');

let x = ''; // first operand
let operator;
let y = ''; // second operand
let answer = 0;

let selectedOperator = null;
function highlightSelectedOperator() {
    operators.forEach(operator => {
        if (operator.style.backgroundColor === 'aqua' && operator !== selectedOperator) {
            operator.style.backgroundColor = 'orange'
        }
    })
};

operands.forEach(operand => {
    operand.addEventListener('click', (e) => {
        if (!operator || x === '') {
            operator = null // don't allow operator to be selected without first operand(x)
            x += e.target.textContent
            result.textContent = x // change display to match first operand(x)
        } else if (!selectedOperator && y !== '') { // if y has already been set, the equal button has already been pressed(setting selectedOperator to null), and a new operator has not been selected...reset and start at first operand(x)
            x = ''
            y = ''
            x += e.target.textContent
            result.textContent = x
        } else {
            y += e.target.textContent
            result.textContent = y
        }
    })
});

operators.forEach(button => {
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
    console.log(`${x} ${operator} ${y}`)
    if (x === '' || y === '') {
        result.textContent = x // if equal button pressed with one or less operands, return single operand or empty string
    } else { // otherwise, turn x and y into numbers and run function based on the operator
        x = Number(x)
        y = Number(y)

        switch (operator) {
            case '+':
                round(add(x, y))
                result.textContent = answer
                x = answer
                selectedOperator = null
                highlightSelectedOperator()
                break;
            case '-':
                round(sub(x, y))
                result.textContent = answer
                x = answer
                selectedOperator = null
                highlightSelectedOperator()
                break;
            case 'x':
                round(mult(x, y))
                result.textContent = answer
                x = answer
                selectedOperator = null
                highlightSelectedOperator()
                break;
            case '/':
                round(divide(x, y))
                result.textContent = answer
                x = answer
                selectedOperator = null
                highlightSelectedOperator()
                break;
        }
    }
    console.log(answer)
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

posToNeg.addEventListener('click', (e) => {
    if (!selectedOperator && x[0] === '-') {
        x = x.slice(1)
        result.textContent = x
    } else if (!selectedOperator && x[0] !== '-') {
        x = '-' + x
        result.textContent = x
    } else if (selectedOperator && y[0] === '-') {
        y = y.slice(1)
        result.textContent = y
    } else if (selectedOperator && y[0] !== '-') {
        y = '-' + y
        result.textContent = y
    }
});

percentage.addEventListener('click', () => {
    num = Number(result.textContent)
    answer = num / 100
    if (result.textContent === x) {
        x = answer
        result.textContent = x
    } else {
        y = answer
        result.textContent = y
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

function round(num) {
    return answer = Math.round(num * 100) / 100
};