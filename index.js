
function average(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }
  return sum / count;
}


// Функція для виконання математичних операцій:

function doMath(x, znak, y) {
  let result;
  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow(x, y);
      break;
    default:
      result = NaN;
  }
  return result;
}

const x = Number(prompt('Введіть перше число'));
const y = Number(prompt('Введіть друге число'));
const znak = prompt('Введіть математичний знак');
console.log(doMath(x, znak, y)); // виведе результат операції

// Функція для заповнення двомірного масиву даними користувача:

function fillArray(rows, cols) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const value = prompt(`Введіть значення для елемента [${i}][${j}]`);
      row.push(value);
    }
    arr.push(row);
  }
  return arr;
}


const rows = Number(prompt('Введіть кількість рядків'));
const cols = Number(prompt('Введіть кількість стовпців'));
const arr = fillArray(rows, cols);
console.log(arr); // виведе заповнений масив


function removeChars(str, chars) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!chars.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

const str = prompt('Введіть рядок');
const chars = prompt('Введіть символи для видалення (без пробілів)').split('');
console.log(removeChars(str, chars)); // виведе рядок без вказаних символів