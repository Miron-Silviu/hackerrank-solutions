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

// ============================================
// 5
//  Problem:Splice ()
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO insert numbers 4,5,6 after 3 useing splice

console.log(`******************************* 5 ************************`);

let numbers = [1, 2, 3, 7, 8];
numbers.splice(3, 0, 4, 5, 6);
console.log(numbers);

// ============================================
// 6
//  Problem:Splice ()
//  Date: 2025-11-14
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Add "B" in the correct place using splice

console.log(`******************************* 6 ************************`);

let letters = ['A', 'B', 'D'];
letters.splice(1, 0, 'B');
console.log(letters);
