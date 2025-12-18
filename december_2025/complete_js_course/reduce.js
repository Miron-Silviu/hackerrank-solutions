'use script';

// ============================================
// 1
//  Problem:Sum all Numbers in an Array
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Return the sum of all numbers.

console.log(`------------------- First Challenge ----------------`);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

// ============================================
// 2
//  Problem:Multiplay all Numbers
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Return the product of all values

console.log(`------------------- Second Challenge ----------------`);

const values = [2, 3, 4];

const finalProduct = values.reduce((acc, curr) => acc * curr);
console.log(finalProduct);

// ============================================
// 3
//  Problem:Find the Larges Number
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`------------------- Third Challenge ----------------`);

// TODO Return the maximum value

const num = [10, 5, 20, 8];

const maximumValue = num.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, num[0]);

console.log(maximumValue);

// ============================================
// 4
//  Problem:Cont total items
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`------------------- Fourth Challenge ----------------`);

// TODO Count how many elemetns are in the array using reduce

const items = ['apple', 'banana', 'orange'];
// console.log(items.length);

const itemsCount = items.reduce((acc) => acc + 1, 0);
console.log(itemsCount);

// ============================================
// 5
//  Problem:Count Even numbers
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`------------------- Fourth Challenge ----------------`);

// TODO Count how many numbers are even

const nums = [1, 2, 3, 4, 6];

const evenNumbers = nums.reduce((acc, curr) => {
  return curr % 2 === 0 ? acc + 1 : acc;
}, 0);
console.log(evenNumbers);

// ============================================
// 6
//  Problem:Add only positive numbers
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`------------------- Sixth Challenge ----------------`);

// TODO  Sum only numbers greater then 0

const positives = [-2, 5, -1, 7, 0];
const positiveNumbers = positives.reduce((acc, curr) => {
  return curr > 0 ? acc + curr : acc;
}, 0);

console.log(positiveNumbers);

// ============================================
// 7
//  Problem:Flatten a Simple Array
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`------------------- Seventh Challenge ----------------`);

// TODO Convert a nasted array into a single array.

const arr = [[1, 2], [3, 4], [5]];

const singleArray = arr.reduce((acc, curr) => {
  return acc.concat(curr);
});
console.log(singleArray);

// ============================================
// 8
//  Problem:Convert array of String into one string
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`------------------- Eight Challenge ----------------`);

// TODO Join all words into one sentence

const words = ['Hello', 'World', 'from', 'reduce'];

const oneWord = words.reduce((acc, curr) => {
  return acc + ' ' + curr;
});

console.log(`"${oneWord}"`);

// ============================================
// 9
//  Problem:Count occurrence of Values
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`------------------- Ninth Challenge ----------------`);

// TODO Return an object showing how many times each values appears.

const fruits = ['apple', 'banana', 'apple', 'orage', 'banana'];

const timesAppears = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(timesAppears);

// ============================================
// 10
//  Problem:Sum Price from Objects
//  Date: 2025-12-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`------------------- Tenth Challenge ----------------`);

// TODO Calculate the total price

const cart = [
  { item: 'Book', price: 10 },
  { item: 'Pen', price: 2 },
  { item: 'Notebook', price: 5 },
];

const calculatePrice = cart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log(calculatePrice);
