let result = document.getElementById('result');
let expression = '';

function appendToResult(value) {
    expression += value;
    result.value = expression;
}

function appendOperator(operator) {
    if (expression !== '' && !isNaN(expression[expression.length - 1])) {
        expression += operator;
        result.value = expression;
    }
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        result.value = expression;
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    expression = '';
    result.value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    result.value = expression;
}
