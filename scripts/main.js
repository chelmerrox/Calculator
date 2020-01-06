//Variable declarations
let i = 0;
let j = 0;
/*let k = 0;
let l = 0;
let m = 0; */

let x_1;
let x;

let operationResult;
let evaluation;

let operator;
let operators = [];
let numbers = [];
let value;
let result = "";

//numeric buttons
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

//operator buttons
const equal = document.getElementById('equal-to');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const decimalPoint = document.getElementById('decimal-point');
const negate = document.getElementById('negate-sign');
const clear = document.getElementById('clear');
const clearEntry = document.getElementById('clear-entry');
const backspace = document.getElementById('backspace');

const display = document.querySelector('p');

const darkLightMode = document.getElementById('dark-light-mode');
const thirdContainer = document.getElementById('third-container');
const displayScreen = document.getElementById('display-screen');

//Function declarations
function operate(e){
    if (e.currentTarget === equal || (e.keyCode === 187 && e.shiftKey === false )){
        
        for (i = 0; i < numbers.length; i++){
            
            result += numbers[i];
            
            if(i < operators.length){
                result += operators[i];
            } 
        
            if (i >= 1){
                evaluation = checkOperator(numbers, operators);
                result += " = " + evaluation;
                displayOperation();
            } else {
                evaluation = checkOperator(numbers, operators);
                result = evaluation;
                displayOperation();
            }
        }
      /*   result += "=" + evaluation;
        displayOperation(); */
    }
}

/*function checkOperatorTwo(operators, numbers){
    for (j = 0; j < operators.length, j < numbers.length; j++){
        if (operators[j] === "/" && x !== 0){           
             x_1 = parseFloat(numbers[j]);
             x = parseFloat(numbers[j + 1]);
             operationResult = x_1/x;
            
            if(j === 0){
                numbers.shift(numbers[j]);
                numbers.shift(numbers[j + 1]);
                operators.shift(operators[j]);
                operationResult = operationResult.toString();
                numbers.unshift(operationResult);
                operationResult = 0;
                x_1 = 0;
                x = 0;
            } else if (j === operators.length - 1){
                numbers.pop(numbers[j]);
                numbers.pop(numbers[j + 1]);
                operators.pop(operators[j]);
                operationResult = operationResult.toString();
                numbers.push(operationResult);
                operationResult = 0;
                x_1 = 0;
                x = 0;
            } else {
                operationResult = operationResult.toString();
                numbers.splice(j,2,operationResult); //starting at index j, remove 2 elements and add operationResult to the new available space in array without creating a new array
                operators.splice(j, 1);
                operationResult = 0;
                x_1 = 0;
                x = 0;
            }
        } else if (operators[j] === "/" && x === 0){
            operationResult = "Result is undefined.";
        } else if (operators[j] !== "/" && j < operators.length){
            continue;
        } else {
            for (k = 0; k < operators.length, k < numbers.length; k++){
                if (operators[k] === "*"){
                    x_1 = parseFloat(numbers[k]);
                    x = parseFloat(numbers[k + 1]);
                    operationResult = x_1 * x;

                    if(k === 0){
                        numbers.shift(numbers[k]);
                        numbers.shift(numbers[k + 1]);
                        operators.shift(operators[k]);
                        operationResult = operationResult.toString();
                        numbers.unshift(operationResult);
                        operationResult = 0;
                        x_1 = 0;
                        x = 0;
                    } else if (k === operators.length - 1){
                        numbers.pop(numbers[k]);
                        numbers.pop(numbers[k + 1]);
                        operators.pop(operators[k]);
                        operationResult = operationResult.toString();
                        numbers.push(operationResult);
                        operationResult = 0;
                        x_1 = 0;
                        x = 0;
                    } else {
                        operationResult = operationResult.toString();
                        numbers.splice(k,2,operationResult); 
                        operators.splice(k, 1);
                        return operationResult;
                        operationResult = 0;
                        x_1 = 0;
                        x = 0;
                    }
                } else if (operators[k] !== "*" && k < operators.length){
                    continue;
                } else {
                    for (l = 0; l < operators.length, l < numbers.length; l++){
                        if (operators[l] === "+"){        
                             x_1 = parseFloat(numbers[l]);
                             x = parseFloat(numbers[l + 1]);
                             operationResult = x_1 + x;

                            if(l === 0){
                                numbers.shift(numbers[l]);
                                numbers.shift(numbers[l + 1]);
                                operators.shift(operators[l]);
                                operationResult = operationResult.toString();
                                numbers.unshift(operationResult);
                                operationResult = 0;
                                x_1 = 0;
                                x = 0;
                            } else if (l === operators.length - 1){
                                numbers.pop(numbers[l]);
                                numbers.pop(numbers[l + 1]);
                                operators.pop(operators[l]);
                                operationResult = operationResult.toString();
                                numbers.push(operationResult);
                                operationResult = 0;
                                x_1 = 0;
                                x = 0;
                            } else {
                                operationResult = operationResult.toString();
                                numbers.splice(l,2,operationResult);
                                operators.splice(l, 1);
                                operationResult = 0;
                                x_1 = 0;
                                x = 0;
                            }
                        } else if (operators[l] !== "+" && l < operators.length){
                            continue;
                        } else {
                            for (m = 0; m < operators.length, m < numbers.length; m++){
                                if (operators[m] === "-"){    
                                     x_1 = parseFloat(numbers[m]);
                                    x = parseFloat(numbers[m + 1]);
                                    operationResult = x_1 - x;

                                    if(m === 0){
                                        numbers.shift(numbers[m]);
                                        numbers.shift(numbers[m + 1]);
                                        operators.shift(operators[m]);
                                        operationResult = operationResult.toString();
                                        numbers.unshift(operationResult);
                                        operationResult = 0;
                                        x_1 = 0;
                                        x = 0;
                                    } else if (j === operators.length - 1){
                                        numbers.pop(numbers[m]);
                                        numbers.pop(numbers[m + 1]);
                                        operators.pop(operators[m]);
                                        operationResult = operationResult.toString();
                                        numbers.push(operationResult);
                                        operationResult = 0;
                                        x_1 = 0;
                                        x = 0;
                                    } else {
                                        operationResult = operationResult.toString();
                                        numbers.splice(m,2,operationResult); 
                                        operators.splice(m, 1);
                                        operationResult = 0;
                                        x_1 = 0;
                                        x = 0;
                                    }
                                } else if (operators[m] !== "-" && m < operators.length){
                                    continue;
                                } else {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }  
    }     
    let lastElementOfNumbersArray = numbers[numbers.length - 1];

    return lastElementOfNumbersArray; 
}  */

function checkOperator(numbers, operators){
    for (j = 0; j < numbers.length, j < operators.length; j++){ 
         x_1 = parseFloat(numbers[0]);
         x = parseFloat(numbers[1]);
         
         if (operators[0] === "/" && x !== 0){
             operationResult = x_1/x;
             x_1 = operationResult;
             x = 0;
             operationResult = operationResult.toString();
             numbers.shift(numbers[0]);
             numbers.shift(numbers[1]);
             numbers.unshift(operationResult);
             operationResult = 0;
             operators.shift(operators[0]);
             return numbers[0];
         } else if (operators[0] === "/" && x === 0) {
             operationResult = "Result is undefined.";
             return operationResult;
         } else if (operators[0] === "x"){
             operationResult = x_1 * x;
             x_1 = operationResult;
             x = 0;
             operationResult = operationResult.toString();
             numbers.shift(numbers[0]);
             numbers.shift(numbers[1]);
             numbers.unshift(operationResult);
             operationResult = 0;
             operators.shift(operators[0]);
             return numbers[0];
         } else if (operators[0] === "+"){
             operationResult = x_1 + x;
             x_1 = operationResult;
             x = 0; 
             operationResult = operationResult.toString();
             numbers.shift(numbers[0]);
             numbers.shift(numbers[1]);
             numbers.unshift(operationResult);
             operationResult = 0;
             operators.shift(operators[0]);
             return numbers[0];
         } else if (operators[0] === "-"){
             operationResult = x_1 - x;
             x_1 = operationResult;
             x = 0;
             operationResult = operationResult.toString();
             numbers.shift(numbers[0]);
             numbers.shift(numbers[1]);
             numbers.unshift(operationResult);
             operationResult = 0;
             operators.shift(operators[0]);
             return numbers[0];
          } 
      } 
 }

function displayOperation(){
    display.textContent = result;
    display.style.position = "relative";
    display.style.right = "1000px";
}

function useAdditionOperator(e){
    if (e.currentTarget === add  || (e.keyCode ===  187 && e.shiftKey === true)){
         operator = "+";
         operators.push(operator);
         result += operator;
         displayOperation();
    }
}

function useSubtractionOperator(e){
    if (e.currentTarget === subtract || (e.keyCode === 189 && e.shiftKey === false)){
        operator = "-";
        operators.push(operator);
        result += operator;
        displayOperation();
    } 
} 

function useMultiplicationOperator(e){
    if (e.currentTarget === multiply || (e.keyCode === 56 && e.shiftKey === true)){
        operator = "x";
        operators.push(operator);
        result += operator;
        displayOperation();
    }
}

function useDivisionOperator(e){
    if (e.currentTarget === divide || (e.keyCode === 191 && e.shiftKey === false)){
        operator = "/";
        operators.push(operator);
        result += operator;
        displayOperation();
    }
}

function matchNumbersToStringExpression(){
    let y = [/^[0-9]+$/g];

    return ((numbers[0].match(y))? true : false);
}

function useNegateOperator(e){
    if (e.currentTarget === negate){
        
        operator = "-"
    }
} 

function useClearButton(e){    //clears all entries and all functions to start fresh
    if (numbers !== [] && operators !== []){
        numbers = [];
        operators = [];
        evaluation = 0;
        x_1 = 0;
        x = 0;
        operationResult = 0;
        value = "0";
        result = "";
        result = value;

        displayOperation();
    }
}

function useClearEntryButton(e){  //clears the most recent entry and sets its value to zero
    if (numbers.length === 2 || operators.length === 1){
        numbers[1] === "0";
        x = parseFloat(numbers[1]);
        result += evaluation + numbers[1];
        displayOperation();
    } 
} 