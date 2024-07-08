// script.js

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.button');
  let currentInput = '';
  let previousInput = '';
  let operator = null;

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const value = button.getAttribute('data-value');
          
          if (value === 'C') {
              currentInput = '';
              previousInput = '';
              operator = null;
              display.innerText = '0';
          } else if (value === '=') {
              if (operator && previousInput !== '' && currentInput !== '') {
                  currentInput = calculate(previousInput, currentInput, operator);
                  display.innerText = currentInput;
                  operator = null;
                  previousInput = '';
              }
          } else if (['+', '-', '*', '/'].includes(value)) {
              if (currentInput !== '') {
                  operator = value;
                  previousInput = currentInput;
                  currentInput = '';
              }
          } else {
              currentInput += value;
              display.innerText = currentInput;
          }
      });
  });

  function calculate(a, b, operator) {
      const num1 = parseFloat(a);
      const num2 = parseFloat(b);
      switch (operator) {
          case '+':
              return (num1 + num2).toString();
          case '-':
              return (num1 - num2).toString();
          case '*':
              return (num1 * num2).toString();
          case '/':
              return (num1 / num2).toString();
          default:
              return '';
      }
  }
});
