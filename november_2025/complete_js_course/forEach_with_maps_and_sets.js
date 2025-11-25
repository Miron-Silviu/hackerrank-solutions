'use strict';

// ============================================
// 1
//  Problem:Array for Each exercise
//  Date: 2025-11-25
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Given an array of numbers, use forEach to compute the total sum

console.log(`******************************* 1 ************************`);

const numbers = [3, 7, 1, 9];
let sum = 0;
numbers.forEach(function (num) {
  sum += num;
});
console.log(sum);

// ============================================
// 2
//  Problem:Convert to upperCase
//  Date: 2025-11-25
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use forEach to create a new array that contanin the uppercase of each string

console.log(`******************************* 2 ************************`);

const words = ['hello', 'world', 'javascript'];

words.forEach(function (upper) {
  console.log(upper.toUpperCase());
});

// ============================================
// 3
//  Problem:Count occurrence of a letter
//  Date: 2025-11-25
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Count how many times the letter "a" appears in the array

console.log(`******************************* 3 ************************`);

const letters = ['a', 'b', 'a', 'c', 'a', 'd'];

let letter = '';
letters.forEach(function (e) {
  if (e == 'a') {
    letter += e;
  }
});

console.log(letter);

// ============================================
// 4
//  Problem:Print unique values
//  Date: 2025-11-25
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use for each to print all unique values in a Set

console.log(`******************************* 4 ************************`);

const uniqueNums = new Set([1, 2, 3, 2, 1, 4]);

let uniquVlaues = '';

uniqueNums.forEach(function (val) {
  uniquVlaues += val;
});

console.log(uniquVlaues);

// ============================================
// 5
//  Problem:Filter every number into a new array
//  Date: 2025-11-25
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use forEach o a Set to build an arrya containeg only even values

console.log(`******************************* 5 ************************`);

const values = new Set([10, 13, 8, 22, 7, 14]);

let evenNumbers = [];

values.forEach(function (even) {
  if (even % 2 == 0) {
    evenNumbers.push(even);
  }
});

console.log(evenNumbers);

// ============================================
// 6
//  Problem:Count values grater than 50
//  Date: 2025-11-25
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Count how many numbers in the Set are greater than 50

console.log(`******************************* 6 ************************`);

const scores = new Set([40, 55, 60, 75, 30, 80]);

scores.forEach(function (e) {
  if (e > 50) {
    console.log(e);
  }
});

// ============================================
// 7
//  Problem:Map + forEach
//  Date: 2025-11-25
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
console.log(`******************************* 7 ************************`);

// TODO Print key-value pairs

const useAges = new Map([
  ['Alice', 25],
  ['Bob', 30],
  ['Carol', 27],
]);

useAges.forEach(function (key, value) {
  console.log(`${key}, ${value}`);
});

// ============================================
// 8
//  Problem:Increase all values
//  Date: 2025-11-25
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use forEach to increase each values in the Map by 1 and store result in a new Map.
console.log(`******************************* 7 ************************`);

const inventory = new Map([
  ['apples', 10],
  ['bananas', 5],
  ['oranges', 8],
]);

let newValues = new Map([]);

inventory.forEach(function (key, values) {
  key += 1;
  newValues.push(key, values);
});

console.log(newValues);
