'use strict';
// console.log('test');

// ============================================
// 1
//  Problem:Print all elements of an array
//  Date: 2025-08-23
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`************ 1 **************`);
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

console.log(`************ 2 **************`);

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

console.log(`************ 3 **************`);

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

console.log(`************ 4 **************`);

let words = ['pen', 'javascript', 'loop', 'code'];

// TODO Use for of loop to fing longest word

let wordLength = [];

for (let word of words) {
  // Find the length of each element
  console.log(word.length);
  // Find the longest element in the array

  wordLength = words.reduce((acc, curr) =>
    acc.length > curr.length ? acc : curr
  );
}

console.log(wordLength);

// ============================================
// 5
//  Problem:Reverse a string
//  Date: 2025-08-24
//  Language: JavaScript
//  Difficulty: Medium
// ============================================

console.log(`************ 5  **************`);

let text = 'This is crazy';

// TODO Use a for of loop to reverse it "olleh"
let reverse;
for (let str of text) {
  reverse = text.split('').reverse(' ').join('');
}
console.log(reverse);

// ============================================
// 6
//  Problem:Filter even numbers
//  Date: 2025-08-24
//  Language: JavaScript
//  Difficulty: Medium
// ============================================

console.log(`************ 6 **************`);

let numbers2 = [1, 2, 3, 4, 5, 6];

// TODO Use for of loop to create a new array of even numbers

let evenNumbers = [];
for (let even of numbers2) {
  evenNumbers = numbers2.filter((even) => even % 2 == 0);
}
console.log(evenNumbers);

// ============================================
// 7
//  Problem:Flatten nested arrays(level 1 deep)
//  Date: 2025-08-24
//  Language: JavaScript
//  Difficulty: Hard
// ============================================

console.log(`************ 7 **************`);

let arr = [[1, 2], [3, 4], [5]];

// TODO Use for of loop to flatten -> [1,2,3,4,5]

let flatArray = [];
for (let flat of arr) {
  flatArray = arr.flat();
}
console.log(flatArray);
