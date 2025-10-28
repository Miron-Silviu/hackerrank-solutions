'use strict';

// ============================================
//1
//  Problem: IIFE return string
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a simple IIFE that prints a sting to the console

console.log(`*********************** 1 **********************`);

(function () {
  console.log('Hello world!');
})();

// ============================================
//2
//  Problem: IIFE return string
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write an IIFE that returns the number 42 and store the result in a variable named answer.

console.log(`*********************** 2 **********************`);
(function () {
  const answer = 42;
  console.log(answer);
})();

// ============================================
//3
//  Problem: Log the sum
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Make an IIFE that takes two numbers as parameters and logs thier sum

console.log(`*********************** 3 **********************`);

(function (num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
})(2, 3);

// ============================================
//4
//  Problem: Secret message
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Inside an IIFE, declare a variable message = "secret".Try  logging outside the IIFE and observer what happen

console.log(`*********************** 4 **********************`);

// (function () {
//   const message = 'secret';
// })();

// console.log(message);

// ============================================
//5
//  Problem: Arrow function
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Rewite Exercise 1 using and arrow function IIFE

// (function () {
//   console.log('Hello world!');
// })();

console.log(`*********************** 5 **********************`);

(() => {
  console.log('Hello World!');
})();

// ============================================
//6
//  Problem: Counter
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use an IIFE to create a counter that starts at 0 and imediatley logs "Counter initialized"

console.log(`*********************** 5 **********************`);
(() => {
  const counter = 0;
  console.log(`Counter initialized ${counter}`);
})();

// ============================================
//7
//  Problem: Nested IIFE
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a nested IIFE
// outline IIFE define a variable name = "Outer"
// Inner IIFE logs "Hello from " + name

(function () {
  const name = 'Outer';
  (function () {
    console.log(`Hello from ${name}`);
  })();
})();

// ============================================
//8
//  Problem: Object settings
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write an IIFE that initializes an object settings with properties theme:"dark" and language:"en", then logs it

(function () {
  const settings = {
    theme: 'dark',
    language: 'en',
  };
  console.log(settings);
})();

// ============================================
//9
//  Problem: Factorial of 5
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use an IIFE to calculate and immeditaly log the factorial fo 5

(function () {
  let number = 5;
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`The factorial of ${number} is ${factorial}`);
})();

// ============================================
//
//  Problem: Reverse a string
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Make an IIFE that takes a string as an agrument and returns its reversed form

(function () {
  const string = 'Hello';
  const reverse = string.split('').reverse().join('');
  //  string.split('').reverse().join('');
  console.log(reverse);
})();
