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

function useDecimalPointOperator(e){
    if (e.currentTarget === decimalPoint || e.keyCode === 190){
        if(operators === [] && matchNumbersToStringExpression() === true){
            numbers[0] += ".";
            result = numbers[0];
            displayOperation();
        } else if (operators !== [] && numbers.length === 2 ){
            numbers[1] += "."
            result = numbers[1];
            displayOperation();
        }
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

function useBackSpaceOperator(e){
    if (e.currentTarget || e.keyCode === 8){
    }
}

/* function returnLastIndexOfFirstString (){
    let q = numbers.lastIndexOf(numbers[0]);

    if (numbers[0][q] === "."){
        return true;
    }
} */

/* function returnLastIndexOfSecondString(){
    let r = numbers.lastIndexOf(numbers[1]);

    if (numbers[1][r] === "."){
        return true;
    }
} */

//functions for numbers
function useZero(e){
    if (e.target === zero || e.keyCode === 48 || e.keyCode === 96){
        value = "0";

        numbers.push(value); 
        result += value;
        displayOperation();
    }
}

function useOne(e){
    if (e.target === one || e.keyCode === 49 || e.keyCode === 97){  
        value = "1";

      /*if (matchNumbersToStringExpression() === true && operators === []){
            result += value;
            displayOperation();
        } else if (returnLastIndexOfFirstString() === "." && operators === []){
            result += value;
            displayOperation();
        } else if (matchNumbersToStringExpression() === true && operators !== []){
            result += value;
            displayOperation();
        } else if (returnLastIndexOfSecondString() === true && operators !== []){
            result += value;
        } else {
            numbers.push(value);

            result = value;

            displayOperation();
        } */

        numbers.push(value);
        result += value;
        displayOperation();
    }
}

function useTwo(e){
    if (e.target === two || e.keyCode === 50 || e.keyCode === 98){
        value = "2";

        numbers.push(value);

        result += value;

        displayOperation();
    }
}

function useThree(e){
    if (e.target === three || e.keyCode === 51 || e.keyCode === 99){
        value = "3";

        numbers.push(value);

        result += value;

        displayOperation();
    }
}

function useFour(e){
    if (e.target === four || e.keyCode === 52 || e.keyCode === 100){
        value = "4";

        numbers.push(value);
    
        result += value;

        displayOperation();
    }
}

function useFive(e){
    if (e.target === five || e.keyCode === 53 || e.keyCode === 101){
        value = "5";

        numbers.push(value);

        result += value;

        displayOperation();
    }
}

function useSix(e){
    if (e.target === six || e.keyCode === 54 || e.keyCode === 102){
        value = "6";

        numbers.push(value);

        result += value;

        displayOperation();
    }
}

function useSeven(e){
    if (e.target === seven || e.keyCode === 55 || e.keyCode === 103){
        value = "7";

        numbers.push(value);

        result += value;

        displayOperation();
    }
}

function useEight(e){
    if (e.target === eight || e.keyCode === 56 || e.keyCode === 104){
        value = "8";

        numbers.push(value);

        result += value;

        displayOperation();
    }
}

function useNine(e){
    if (e.target === nine || e.keyCode === 57 || e.keyCode === 105){
        value = "9";

        numbers.push(value);

        result += value;

        displayOperation();
    }
}  

function changeCalculatorColor(e){
    if (darkLightMode.style.backgroundColor === 'white'){
        darkLightMode.style.backgroundColor = "black";
        darkLightMode.style.color = "grey";
        darkLightMode.style.textContent = "Light Mode";

        thirdContainer.style.backgroundColor = "black";
        thirdContainer.style.borderWeight = "2px";
        thirdContainer.style.borderStyle = "solid";

        displayScreen.style.backgroundColor = "black";
        displayScreen.style.borderColor = "rgb(36,36,36)";
        displayScreen.style.borderWeight = "2px";
        displayScreen.style.borderStyle = "solid";
        displayScreen.style.boxShadowColor = "rgb(36,36,36)";
        displayScreen.style.boxShadowHOffset = "1px";
        displayScreen.style.boxShadowVOffset = "1px";
        displayScreen.style.boxShadowBlur = "10px";
        display.style.color = "white";

        zero.style.backgroundColor = "black";
        one.style.backgroundColor = "black";
        two.style.backgroundColor = "black";
        three.style.backgroundColor = "black";
        four.style.backgroundColor = "black";
        five.style.backgroundColor = "black";
        six.style.backgroundColor = "black";
        seven.style.backgroundColor = "black";
        eight.style.backgroundColor = "black";
        nine.style.backgroundColor = "black";

        zero.style.color = "white";
        one.style.color = "white";
        two.style.color = "white";
        three.style.color = "white";
        four.style.color = "white";
        five.style.color = "white";
        six.style.color = "white";
        seven.style.color = "white";
        eight.style.color = "white";
        nine.style.color = "white";

        clearEntry.style.backgroundColor = "rgb(14,13,13)";
        clear.style.backgroundColor = "rgb(14,13,13)";
        add.style.backgroundColor = "rgb(14,13,13)";
        subtract.style.backgroundColor = "rgb(14,13,13)";
        multiply.style.backgroundColor = "rgb(14,13,13)";
        divide.style.backgroundImage = "url('../images/divide_black.png')";
        negate.style.backgroundColor = "rgb(14,13,13)";
        equal.style.backgroundColor = "rgb(14,13,13)";

        clearEntry.style.color = "white";
        clear.style.color = "white";
        add.style.color = "white";
        subtract.style.color = "white";
        multiply.style.color = "white";
        divide.style.color = "white";
        negate.style.color = "white";
        equal.style.color = "white";
        
        backspace.style.backgroundImage = "url('../images/backspace_black.png')";
        decimalPoint.style.backgroundColor = "rgb(14,13,13)";
    } else {
        darkLightMode.style.backgroundColor = "white";
        darkLightMode.style.color = "lightgrey";
        darkLightMode.style.textContent = "Dark Mode";

        thirdContainer.style.backgroundColor = "white";

        displayScreen.style.backgroundColor = "white";
        displayScreen.style.borderColor = "lightgrey";
        displayScreen.style.borderWeight = "2px";
        displayScreen.style.borderStyle = "solid";
        displayScreen.style.boxShadowColor = "rgb(36,36,36)";
        displayScreen.style.boxShadowHOffset = "1px";
        displayScreen.style.boxShadowVOffset = "1px";
        displayScreen.style.boxShadowBlur = "10px";
        display.style.color = "grey";

        zero.style.backgroundColor = "rgb(238,235,235)";
        one.style.backgroundColor = "rgb(238,235,235)";
        two.style.backgroundColor = "rgb(238,235,235)";
        three.style.backgroundColor = "rgb(238,235,235)";
        four.style.backgroundColor = "rgb(238,235,235)";
        five.style.backgroundColor = "rgb(238,235,235)";
        six.style.backgroundColor = "rgb(238,235,235)";
        seven.style.backgroundColor = "rgb(238,235,235)";
        eight.style.backgroundColor = "rgb(238,235,235)";
        nine.style.backgroundColor = "rgb(238,235,235)";

        zero.style.color = "grey";
        one.style.color = "grey";
        two.style.color = "grey";
        three.style.color = "grey";
        four.style.color = "grey";
        five.style.color = "grey";
        six.style.color = "grey";
        seven.style.color = "grey";
        eight.style.color = "grey";
        nine.style.color = "grey";

        clearEntry.style.backgroundColor = "white";
        clear.style.backgroundColor = "white";
        add.style.backgroundColor = "white";
        subtract.style.backgroundColor = "white";
        multiply.style.backgroundColor = "white";
        divide.style.backgroundImage = "url(images/divide_white.png)";
        negate.style.backgroundColor = "white";
        equal.style.backgroundColor = "white";

        clearEntry.style.color = "grey";
        clear.style.color = "grey";
        add.style.color = "grey";
        subtract.style.color = "grey";
        multiply.style.color = "grey";
        divide.style.color = "grey";
        negate.style.color = "grey";
        equal.style.color = "grey";

        backspace.style.backgroundImage = "url(images/backspace_white.png)";
        decimalPoint.style.backgroundColor = "white";
    }
}

//Event listeners for the numeric buttons
zero.addEventListener('click', useZero);
zero.addEventListener('keypress', useZero);

one.addEventListener('click', useOne);
one.addEventListener('keypress', useOne);

two.addEventListener('click', useTwo);
two.addEventListener('keydown', useTwo);

three.addEventListener('click', useThree);
three.addEventListener('keydown', useThree);

four.addEventListener('click', useFour);
four.addEventListener('keydown', useFour);

five.addEventListener('click', useFive);
five.addEventListener('keydown', useFive); 

six.addEventListener('click', useSix);
six.addEventListener('keydown', useSix);

seven.addEventListener('click', useSeven);
seven.addEventListener('keydown', useSeven);

eight.addEventListener('click', useEight);
eight.addEventListener('keydown', useEight);

nine.addEventListener('click', useNine);
nine.addEventListener('keydown', useNine); 

//event listeners for operators
equal.addEventListener('click', operate);
equal.addEventListener('keypress', operate); 

operator = add.addEventListener('click', useAdditionOperator);
operator = add.addEventListener('keypress', useAdditionOperator);

operator = subtract.addEventListener('click', useSubtractionOperator);
operator = subtract.addEventListener('keypress', useSubtractionOperator);

operator = multiply.addEventListener('click', useMultiplicationOperator);
operator = multiply.addEventListener('keypress', useMultiplicationOperator);

operator = divide.addEventListener('click', useDivisionOperator);
operator = divide.addEventListener('keypress', useDivisionOperator);

operator = decimalPoint.addEventListener('click', useDecimalPointOperator);
operator = decimalPoint.addEventListener('keypress', useDecimalPointOperator); 

operator = negate.addEventListener('click', useNegateOperator);
operator = negate.addEventListener('keypress', useNegateOperator); 

operator = clear.addEventListener('click', useClearButton);

operator = clearEntry.addEventListener('click', useClearEntryButton);

operator = backspace.addEventListener('click', useBackSpaceOperator);
operator = backspace.addEventListener('keypress', useBackSpaceOperator);  

darkLightMode.addEventListener('click', changeCalculatorColor);