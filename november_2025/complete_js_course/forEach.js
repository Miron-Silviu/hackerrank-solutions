'use strict';

// ============================================
// 1
//  Problem:forEach ()
//  Date: 2025-11-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Use forEach to print each number to the console

console.log(`******************************* 1 ************************`);

const nums = [1, 2, 3, 4, 5];

nums.forEach(function (elments) {
  console.log(elments);
});

// ============================================
// 2
//  Problem:forEach ()
//  Date: 2025-11-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Use forEach to print "I like <fruits>" for each fruit

console.log(`******************************* 2 ************************`);

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function (fruit) {
  console.log(`I like ${fruit}`);
});

// ============================================
// 3
//  Problem:forEach ()
//  Date: 2025-11-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use forEach to create a new array with each name in uppercase.

console.log(`******************************* 2 ************************`);

const names = ['Alice', 'Bob', 'Charlie'];
const upperCase = [];
names.forEach(function (upper) {
  upperCase.push(upper.toUpperCase());
});
console.log(upperCase);

// ============================================
// 3
//  Problem:forEach ()
//  Date: 2025-11-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use forEach to print "Passed" if the score >= 60,otherwise "Failed"

console.log(`******************************* 2 ************************`);

const scores = [50, 80, 90];

scores.forEach(function (s) {
  if (s >= 60) {
    console.log('Passes');
  } else {
    console.log('Failed');
  }
});
