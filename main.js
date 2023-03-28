const operands = Array.from(document.querySelectorAll('.operand'));
const operators = Array.from(document.querySelectorAll('.operator'))
const result = document.querySelector('.result');
// const addBtn = document.querySelector('#add');
// const subBtn = document.querySelector('#sub');
// const multBtn = document.querySelector('#multiply');
// const divideBtn = document.querySelector('#divide');

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
            console.log(`${x} ${operator} ${y}`)
        }
    })
});

operators.map(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.textContent
    })
})

// addBtn.addEventListener('click', (e) => {
//     operator = e.target.textContent
// });

// subBtn.addEventListener('click', (e) => {
//     operator = e.target.textContent
// });

// multBtn.addEventListener('click', (e) => {
//     operator = e.target.textContent
// });

// divideBtn.addEventListener('click', (e) => {
//     operator = e.target.textContent
// });