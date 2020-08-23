// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(number) {
  return (number += 1);
}

// - Write a Function Expression
let addOne = function (number) {
  return (number += 1);
};

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (number) => number += 1;
// - Write an Arrow Function with curly brackets
let addOne = (number) => {
  return (number += 1);
}
// - Execute the function
addOne(1);
// - Execute the function and store the return value in a variable.
let returnValue = addOne(1);
// - What is the typeof returnValue
number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(number) {
  return (number -= 1);
}
// - Write a Function Expression
let substractOne = function (n) {
  return n - 1;
};
// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (n) => n - 1;
// - Write an Arrow Function with curly brackets
let substractOne = (n) => {
  return n - 1;
};
// - Execute the function
substractOne(5);
// - Execute the function and store the return value in a variable.
let returnValue = substractOne(5);
// - What is the typeof returnValue
number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB) {
  return numA + numB;
}
// - Write a Function Expression
let sum = function (numA, numB) {
  return numA + numB;
};
// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let sum = (numA, numB) => {
  return numA + numB;
};
// - Execute the function
sum(5, 2);
// - Execute the function and store the return value in a variable
let returnValue = sum(9, 5);
// - What is the typeof returnValue
number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
let square = function (n) {
  return n ** 2;
};
// - Write a Function Expression
let square = (n) => n ** 2;
// - Write an Arrow Function without curly brackets(if possible)
let square = (n) => n ** 2;
// - Write an Arrow Function with curly brackets
let square = (n) => {
  return n ** 2;
};
// - Execute the function
square(3);
// - Execute the function and store the return value in a variable
let returnValue = square(4);
// - What is the typeof returnValue
number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
  return x > y ? true : false;
}
// - Write a Function Expression
let isGreater = function (x, y) {
  return x > y ? true : false;
};
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => (x > y ? true : false);
// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  return x > y ? true : false;
};
// - Execute the function
isGreater(5, 2);
// - Execute the function and store the return value in a variable
let returnValue = isGreater(7, 3);
// - What is the typeof returnValue
Boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number) {
  return number % 2 == 0 ? `Number is even` : `Number is odd`;
}
// - Write an anonymous Function Expression
let oddOrEven = function (number) {
  return number % 2 == 0 ? `Number is even` : `Number is odd`;
};
// - Write an named Function Expression
let oddOrEven = function anotherOddOrEven(number) {
  return number % 2 == 0 ? `Number is even` : `Number is odd`;
};
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) =>
  number % 2 == 0 ? `Number is even` : `Number is odd`;
// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {
  return number % 2 == 0 ? `Number is even` : `Number is odd`;
};
// - Execute the function
oddOrEven(2);
// - Execute the function and store the return value in a variable
let returnValue = oddOrEven(5);
// - What is the typeof returnValue
string