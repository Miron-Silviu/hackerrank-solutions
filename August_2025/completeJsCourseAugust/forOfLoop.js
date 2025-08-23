'use strict';
console.log('test');

// ============================================
// 1
//  Problem:Print all elements of an array
//  Date: 2025-08-23
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

let fruits = ['apple', 'banana', 'mango'];

// TODO Use for loop to print each fruit

for (const fruit of fruits) {
  console.log(fruit);
}

// ============================================
// 2
//  Problem:Print Sum all number in the array
//  Date: 2025-08-23
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

let numbers = [5, 10, 15, 20];

// TODO Use for loop to calculate total sum

let total = 0;
for (let number of numbers) {
  total += number;
}

console.log(total);

// ============================================
// 3
//  Problem:Count Vowels in a string
//  Date: 2025-08-23
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

function getVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let countVowels = 0;

  for (let text of word.toLowerCase()) {
    if (vowels.includes(text)) {
      countVowels++;
    }
  }
  return countVowels;
}

console.log(getVowels('o'));

// ============================================
// 4
//  Problem:Find the longest word in array
//  Date: 2025-08-23
//  Language: JavaScript
//  Difficulty: Medium
// ============================================

// let words = ['pen', 'javascript', 'loop', 'code'];

// // TODO Use for of loop to fing longest word

// let wordLength = [];

// for (let word of words) {
// }

// console.log(wordLength);
