const input = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const decimalButton = document.getElementById('decimal');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.getAttribute('data-value');
    });
});

clearButton.addEventListener('click', () => {
    input.value = '';
});

equalsButton.addEventListener('click', () => {
   calculate(input.value);
   input.value = calculate(input.value);
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

addButton.addEventListener('click', () => {
    input.value += '+';  
});

subtractButton.addEventListener('click', () => {
    input.value += '-';   
});



multiplyButton.addEventListener('click', () => {
    input.value += '*'; 
});

 

divideButton.addEventListener('click', () => {
    input.value += '/';
});

decimalButton.addEventListener('click', () => {
    input.value += '.';
});

function calculate(expression) {
    try {
        const tokens = expression.match(/(\d+\.?\d*|[+\-*/])/g);
        if (!tokens){
           return 'Error'; 
        } 
        let total = parseFloat(tokens[0]);
        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const nextNumber = parseFloat(tokens[i + 1]);
            if (isNaN(nextNumber)) return 'Error'; 
            switch (operator) {
                case '+':   
                    total = add(total, nextNumber);
                    break;
                case '-':
                    total = subtract(total, nextNumber);
                    break;
                case '*':
                    total = multiply(total, nextNumber);
                    break;
                case '/':
                    if (nextNumber === 0) return 'Error';
                    total = divide(total, nextNumber);
                    break;
                default:
                    return 'Error'; 
            }
        }
        return total;
    } catch {
        return 'Error';
    }
}
    