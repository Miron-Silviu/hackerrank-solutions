'use strict';

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
