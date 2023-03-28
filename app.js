const answerDisplayEl = document.getElementById('answer-text');
const numBTNS = document.querySelectorAll('.num-button');




let num1;
let num2;
let operator;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(_num1, _operator, _num2) {
  switch(_operator) {
    case '+': add(_num1, _num2);
    break;

    case '-': subtract(_num1, _num2);
    break;

    case '*': multiply(_num1, _num2);
    break;

    case '/': divide(_num1, _num2);
    break;
  }
}

numBTNS.forEach(numBTN => {
  numBTN.addEventListener('click', (e) => {
    num1 = e.target.textContent;
    updateDisplay();
  });
});

function updateDisplay() {
  answerDisplayEl.textContent = num1;
}