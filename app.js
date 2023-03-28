// to get multiple digit numbers: 
// num1 is a string, concat the next numBTN press with num1 
// and make that the new num1

const answerDisplayEl = document.getElementById('answer-text');
const numBTNS = document.querySelectorAll('.num-button');
const operatorBTNS = document.querySelectorAll('.operator-button');
const equalBTN = document.getElementById('equal-button');


let num1 = null;
let num2 = null;
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
}

numBTNS.forEach(numBTN => {
  numBTN.addEventListener('click', (e) => {
    operator == null 
      ? num1 = Number(e.target.textContent) 
      : num2 = Number(e.target.textContent);

    updateDisplay();
  });
});

operatorBTNS.forEach(operatorBTN => {
  operatorBTN.addEventListener('click', (e) => {
    operator = e.target.textContent;
  });
});

equalBTN.addEventListener('click', operate);

function updateDisplay() {
  operator == null
    ? answerDisplayEl.textContent = num1
    : answerDisplayEl.textContent = num2;

  if (answer != null) answerDisplayEl.textContent = answer;
}