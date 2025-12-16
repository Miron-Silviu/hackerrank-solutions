'use strict';

console.log(`------------------ First Challenge -------------------`);
// ============================================
// 1
//  Problem:Filter
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Filter even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter((x) => x % 2 === 0);
console.log(evens);

console.log(`------------------ Second Chllenge -------------------`);
// ============================================
// 2
//  Problem:Filter long words
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use filter to create a new array that combing only words longers than 5 characters

const words = ['apple', 'banana', 'kiwi', 'grape', 'watermelon'];

const longerThanFive = words.filter((x) => x.length > 5);
console.log(longerThanFive);

// ============================================
// 3
//  Problem:Filter Adults
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use filter  to create a new array that only contains people who are 18 or older

console.log(`------------------ Third Chllenge -------------------`);
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 15 },
  { name: 'David', age: 30 },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults);
