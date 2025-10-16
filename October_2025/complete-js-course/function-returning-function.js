'use strict';

// ============================================
//1
//  Problem:Multiplier
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function mulitplyBy (x) that returns a function taking y.
// The inner function returns x * y.

console.log(`*********************** 1 ******************`);

function mulitplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = mulitplyBy(2);
console.log(double(5));

// ============================================
//2
//  Problem:Adder
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function add (x) that returns a function taking y.

// The inner function returns x + y

console.log(`*********************** 2 ******************`);
function add(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = add(5);
console.log(addFive(3));

// ============================================
//3
//  Problem:Getting
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function greet (greetting that returns a ) that fucntion taking
//  name . The inner function returns the full gettting string

console.log(`*********************** 3 ******************`);
function geet(getting) {
  return function (name) {
    return `${getting} ${name}`;
  };
}

const sayHello = geet('Hello');
console.log(sayHello('Alice'));

// ============================================
// 4
//  Problem:Range Checker
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function inRange(min, max) that returns a function thaking a number. The inner function returns true if the number is between min and max,otherwise false

console.log(`*********************** 4 ******************`);
const inRange = function (min, max) {
  return function (num) {
    return num > min && num < max;
  };
};

const isAdultAge = inRange(18, 100);
console.log(isAdultAge(17));
console.log(isAdultAge(40));

// ============================================
// 5
//  Problem:String Prefixer
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function addPrefix(prefix) that returns a function taking a sting . The inner function returen the string with the prefix added

console.log(`*********************** 5 ******************`);

const addPrefix = (prefix) => {
  return function (str) {
    return `${prefix} ${str}`;
  };
};

const addMr = addPrefix('Mr.');
console.log(addMr('Smith'));

// ============================================
// 5
//  Problem:String Prefixer
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function repeat(n ) that returns a function taking a string. The inner function returns the string repeated n times

function repeat(n) {
  return function (str) {
    let string = '';
    for (let i = 0; i < n; i++) {
      string += str;
    }
    return string;
  };
}

const triple = repeat(3);
console.log(triple('Hi'));

// const newName = 'Alice';

// for (let i = 0; i < newName.length; i++) {
//   console.log(newName);
// }
