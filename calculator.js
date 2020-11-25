function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}

function operate(operator, a, b){
    switch(operator){
        case '+': return add(a,b); 
        case '-': return subtract(a,b); 
        case '*': return multiply(a, b); 
        case '÷': return divide(a, b); 
        default: console.log(`SMD`);
    }
}

function final(arr){
    let newarr = [], i = 0, number = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != ''){newarr[i-number] = arr[i]}
        else{number++;}
    }
    return newarr;
}

function calculator(operands, operators){

    for(let i = 0; i < operands.length; i++){
        if(operators[i] == '*' || operators[i] == '÷'){
            operands[i+1] = operate(operators[i], Number(operands[i]), Number(operands[i+1]));
            operators[i] = '';
            operands[i] = '';
        }
    }
    operands = final(operands);
    operators = final(operators);
    operands.map(String);
for(let i = 0; i < operands.length - 1; i++){
    operands[i+1] = operate(operators[i], Number(operands[i]), Number(operands[i+1]));
            operators[i] = '';
            operands[i] = '';
}
return operands[operators.length];    
}



const display = document.querySelector('#box');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector(`input[value = "="]`);
const clear = document.querySelector(`input[value = "AC"]`);
const nega = document.querySelector(`input[value = "-/+"]`);
const backspace = document.querySelector(`input[value = "←"]`);
let numbersarr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], counter = 0, checker = false,
    operatorsarr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], 
    fnumbers = [],
    foperators = [];

numbers.forEach(number => {
    number.addEventListener('click', event =>{
        if(event.target.value == '.' && numbersarr[counter].includes('.')){
            alert('0');
        }
        else{
            if(checker){display.value = '';checker = false;}
        numbersarr[counter] += event.target.value;
        display.value += event.target.value;
        }
    });
});
operators.forEach(operator => {
    operator.addEventListener('click', event =>{
        if(numbersarr[counter] == ''){
            alert("550");
        }
        else{
            if(numbersarr[counter] == '0' && numbersarr[counter-1] != '0' && operatorsarr[counter-1] == '÷'){
               alert('0');
            }
            else {
        operatorsarr[counter] = event.target.value;
        display.value += event.target.value;
        counter++;
        }}
    });
});

equal.addEventListener('click', () => {
    if(numbersarr[counter] == ''){
        alert('0');
    }
    else{
        fnumbers = final(numbersarr);
        foperators = final(operatorsarr);
        display.value = calculator(fnumbers, foperators);
        numbersarr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        operatorsarr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        counter = 0;
        checker = true;
        
    }
});

clear.addEventListener('click', () => {

    display.value = '';
    numbersarr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    operatorsarr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    counter = 0;

});

nega.addEventListener('click', () => {

    if(numbersarr[counter] != ''){
        if(numbersarr[counter].charAt(0) == '-'){
            numbersarr[counter] = numbersarr[counter].substring(1);
            display.value = display.value.substring(0, display.value.length - numbersarr[counter].length - 1) + numbersarr[counter];

        }
        else{ 
            numbersarr[counter] = '-' + numbersarr[counter];
            display.value = display.value.substring(0, display.value.length - (numbersarr[counter].length - 1)) + numbersarr[counter];

    }
    }
    
    
});
backspace.addEventListener('click', () => {
    if(isNaN(Number(display.value[display.value.length - 1])) && (display.value[display.value.length - 1]) != '.' ){
       display.value = display.value.substring(0, display.value.length -1);
       counter--;
       operatorsarr[counter] = "";

    }
    else {
        display.value = display.value.substring(0, display.value.length - 1);
        numbersarr[counter] = numbersarr[counter].substring(0, numbersarr[counter].length - 1);
    }
})
