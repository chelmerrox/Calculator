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