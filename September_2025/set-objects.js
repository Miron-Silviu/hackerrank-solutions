'use strict';

// ============================================
// 1
//  Problem: Set
//  Date: 2025-09-01
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO

// LEVEL 1

console.log(`********************* Level 1 *******************`);
// 1 Crete a set that stores your 5 favorite fruits
// Print the size

const fruits = new Set(['mango', 'orange', 'watermelo', 'banana', 'avocado']);
console.log(fruits.size);

// 2 Add and Check
// Add Pears to the set
// Check if Apple exists in the set

fruits.add('Pears');
console.log(fruits);

fruits.has('Apple');
console.log(fruits);

// 3 Delete from Set
// Remove Banana from the set
// Print the set again

fruits.delete('banana');
console.log(fruits);

// LEVEL 2 Iterating

console.log(`********************* Level 2 *******************`);

// 4 Loop through a Set
// Iterate over the set  and print each fruit

for (const fruit of new Set(fruits)) {
  console.log(fruit);
}

// Convert Set to Array
// Convert your set into an array using the sperad operator
// Print the new array

const array = [...new Set(fruits)];
console.log(array);

// Level 3
console.log(`********************* Level 3 *******************`);

// 6 Remove duplicates

let numbers = [1, 2, 2, 3, 4, 4, 5];
let remove = new Set(numbers);
console.log(remove);

// 7 Find Intersection
// Find the common elements using set

let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

let c = new Set(a);
let d = b.filter((element) => c.has(element));
console.log(d);

// 8 Find Union
// Using the same arrays, create a union(all uniques elements from both arrays)

let e = new Set([1, 2, 3, 4]);
let f = new Set([3, 4, 5, 6]);
console.log(e.union(f));

// 9 Challenge Unique Characters
// Write a function that takes a string and returns the count of uniques characters using a Set.

function string(str) {
  return new Set(str);
}

console.log(string('Hello'));
