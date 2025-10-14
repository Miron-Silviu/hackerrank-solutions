'use strict';

// ============================================
// 1
//  Problem: Callback Practice
//  Date: 2025-10-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO   Create a function called processNumeber that:

// 1 Creates two arguments:

// - a number, and
// - a callback function

// 2 Perform some processing using the callback

// 3 logs the result

console.log('*************** First Challenge ********** ');

function processNumber(num, callback) {
  const result = callback(num);
  console.log('Result', result);
}

function double(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

function half(n) {
  return n / 2;
}
processNumber(10, double);
processNumber(10, square);
processNumber(10, half);

// Bonus  Pass a list of numbers. The function applies the callback to each number in the list

function processNumbers(arr, callback) {
  const results = arr.map(callback);
  console.log('Processed ', results);
}

processNumbers([1, 2, 3, 4, 5], (n) => n * 3);

const ticket = function (total, fn) {
  const price = fn(total);
  console.log('Total Price: ', price);
};

const reducedTicket = function (reduced) {
  return reduced / 2;
};

const totalPrice = function (price) {
  return price * 2;
};

ticket(28, totalPrice);
ticket(35, reducedTicket);

// ============================================
//
//  Problem: apple juice
//  Date: 2025-10-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log('*************** Second  Challenge ********** ');
const appleJuice = function (apple, fn) {
  const fruits = fn(apple);
  console.log('Apple juice of: ', fruits);
};

function totalFruiuits(apple) {
  return apple * 4;
}

appleJuice(10, totalFruiuits);

// ============================================
//3
//  Problem: Cooking Steps
//  Date: 2025-10-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function boilWater(callback), use setTimeout to simulate boiling time. After it boils, call the callback. The callback should long the next cooking step.

console.log('*************** Third  Challenge ********** ');
function boilWater(water, callback) {
  setTimeout(function () {
    console.log('Start boiling after 3 seconds ');
    const boil = callback(water);
    console.log(`Boiling at : ${boil} C degree`);
  }, 3000);
}

function boiling(temp) {
  return temp * temp;
}

boilWater(10, boiling);
