const operands = Array.from(document.querySelectorAll('.operand'));
const result = document.querySelector('.result')

operands.map(operand => {
    operand.addEventListener('click', (e) => {
        console.log(e.target.textContent)
        result.textContent = e.target.textContent
    })
});