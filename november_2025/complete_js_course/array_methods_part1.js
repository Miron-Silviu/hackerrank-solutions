'use strict';

// ============================================
// 1
//  Problem:Slice ()
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Given the fruit array, extract banana and cherry using slice.

console.log(`******************************* 1 ************************`);

const fruits = ['apple', 'banana', 'charry', 'date', 'elderberry'];
console.log(fruits.slice(1, 3));

// ============================================
// 2
//  Problem:Slice ()
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use slice to copy the last 2 elements

console.log(`******************************* 2 ************************`);

const nums = [10, 20, 30, 40, 50];
console.log(nums.slice(3, nums.length));

// ============================================
// 3
//  Problem:Slice ()
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use slice to create a new array
console.log(`******************************* 3 ************************`);

const colors = ['red', 'green', 'blue', 'yellow'];
console.log(colors.slice(1, colors.length));

// ============================================
// 4
//  Problem:Splice ()
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use splice  method to remove "rabbit"

console.log(`******************************* 4 ************************`);

let animals = ['cat', 'dog', 'rabbit', 'lion'];
animals.splice(2, 1);
console.log(animals);
