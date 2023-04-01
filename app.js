const answerDisplayEl = document.getElementById('answer-text');
const numBTNS = document.querySelectorAll('.num-button');
const operatorBTNS = document.querySelectorAll('.operator-button');
const equalBTN = document.getElementById('equal-button');
const resetBTN = document.getElementById('reset-button');
const decimalBTN = document.getElementById('decimal-button');
const deleteBTN = document.getElementById('delete-button');

let num1 = '';
let num2 = '';
let operator = null;
let answer = null;

function add(a, b) {
  return answer = a + b;
}

function subtract(a, b) {
  return answer = a - b;
}

function multiply(a, b) {
  return answer = a * b;
}

function divide(a, b) {
  return answer =  a / b;
}

function operate() {
  // incase not all variables entered
  if (num1 == '' || num2 == '' || operator == null) {
    answerDisplayEl.textContent = 'ERROR';
  } else {
    num1 = Number(num1);
    num2 = Number(num2);
  
    switch(operator) {
      case '+': add(num1, num2);
      break;
  
      case '-': subtract(num1, num2);
      break;
  
      case '*': multiply(num1, num2);
      break;
  
      case '/': divide(num1, num2);
      break;
    }
  
    updateDisplay();
    num1 = '';
    num2 = '';
    operator = null;
    answer = null;
    removeActiveOperatorStyle();
  }
}

function updateDisplay() {
  operator == null
    ? answerDisplayEl.textContent = num1
    : answerDisplayEl.textContent = num2;

  if (answer != null) answerDisplayEl.textContent = answer;
}

function addDecimal() {
  if (operator == null && num1.includes('.') || operator != null && num2.includes('.')) {
    answerDisplayEl.textContent = 'ERROR';
  } else {
    operator == null 
    ? num1 += '.'
    : num2 += '.';

    updateDisplay();
  }
}

function deleteCurrentInput() {
  operator == null
  ? num1 = ''
  : num2 = '';

  updateDisplay();
}

function resetCalc() {
  operatorBTNS.forEach(operatorBTN => operatorBTN.setAttribute('disabled', 'true'));
  answerDisplayEl.textContent = '';
  removeActiveOperatorStyle();
  num1 = '';
  num2 = '';
  operator = null;
  answer = null;
}

function removeActiveOperatorStyle() {
  operatorBTNS.forEach(operatorBTN => operatorBTN.classList.remove('active-operator-button'));
}

numBTNS.forEach(numBTN => {
  numBTN.addEventListener('click', (e) => {
    operatorBTNS.forEach(operatorBTN => operatorBTN.removeAttribute('disabled'));
    operator == null
      ? num1 += e.target.textContent
      : num2 += e.target.textContent;

    updateDisplay();
  });
});

operatorBTNS.forEach(operatorBTN => {
  operatorBTN.addEventListener('click', (e) => {
    // if user wants to continue calc without pressing equal, instead pressing another operator
    if (num1 != '' && num2 != '' && operator != null) operate()

    // if user wants to continue calc with answer after pressing equal
    if (num1 == '') num1 = answerDisplayEl.textContent;

    removeActiveOperatorStyle();
    operator = e.target.textContent;
    e.target.classList.add('active-operator-button');
  });
});

decimalBTN.addEventListener('click', addDecimal)

deleteBTN.addEventListener('click', deleteCurrentInput)

equalBTN.addEventListener('click', operate);

resetBTN.addEventListener('click', resetCalc);