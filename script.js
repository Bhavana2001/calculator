const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');

let expression = '';
let result = '';

inputBox.addEventListener('click', buttonClick);

//event handler for button clicks
function buttonClick(event){
    const target = event.target;
    const action = target.dataset.action;
    const value = target.dataset.value;

    //switch case
    switch(action) {
        case 'number':
            addValue(value);
            break;
        case 'clear':
            clear();
            break;
        case 'backspace':
            backspace();
            break;
        case "adition":
        case "subtraction":
        case "multiplication":
        case "division":
            if (expression == '' && result !== ''){
                startFromResult(value)
            }
    }


    updateDisplay(expression, result);
}

function addValue(value){
    expression += value;
    //console.log(expression);
}
function updateDisplay(expression, result){
    expressionDiv.textContent = expression;
    resultDiv.textContent = result;
}
function clear(){
    expression = "";
    result = "";
}

function backspace(){
    expression = expression.slice(0, -1);
}