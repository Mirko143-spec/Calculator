const calculator = document.querySelector('.table')
const keys = calculator.querySelector('.buttons')
const display = document.querySelector('.display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }

        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {

            key.classList.add('is-depressed')

            calculator.dataset.previousKeyType = 'operator';

            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        const calculate = (n1, operator, n2) => {
            let result = ''

            if (operator === 'add') {
                result = parseInt(n1) + parseInt(n2);
            } else if (operator === 'subtract') {
                result = parseInt(n1) - parseInt(n2);
            } else if (operator === 'multiply') {
                result = parseInt(n1) * parseInt(n2);
            } else if (operator === 'divide') {
                result = parseInt(n1) / parseInt(n2);
            }
                
            return result;
            
        }

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))

        if (action === 'equal') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            display.textContent = calculate(firstValue, operator, secondValue);
        }

        if (action === 'clear') {
        }
    }
})