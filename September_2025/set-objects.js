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

// ============================================
// 2
//  Problem: Basic Operation
//  Date: 2025-09-01
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********************* Exercise Number 2 *******************`);

// 1 Create a Set A with elements [1, 2, 3, 4].

const elements = new Set([1, 2, 3, 4]);
console.log(elements);

// 2 Add 5 to the set.
elements.add(5);
console.log(elements);

// 3 Check if 3 is in the set.
elements.has(3);
console.log(elements);
// 4 Remove 2 from the set.
elements.delete(2);
console.log(elements);

// 5 Print the size of the set.
console.log(elements.size);

// 6 Clear the set.
// console.log(elements.clear());

// ============================================
// 3
//  Problem: Union
//  Date: 2025-09-01
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
console.log(`********************* Exercise Number 3 *******************`);
// Create Set B = [1,2,3] and Set C = [3,4,5]
// Create a union set containing all unique elements from B and C
// Print the union
const setB = [1, 2, 3];
const setC = [3, 4, 5];
const union = new Set([...setB, ...setC]);
console.log(union);

// ============================================
// 4
//  Problem: Intersection
//  Date: 2025-09-01
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// Create setD =[1,2,3] and setE = [2,3,4]
// Create a new set containing only elements paresent in both D and E
// Print the instersction

const setD = new Set([1, 2, 3]);
const setE = new Set([2, 3, 4]);

const intersection2 = setD.intersection(setE);
console.log(intersection2);

// ============================================
// 4
//  Problem: Differece
//  Date: 2025-09-01
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
console.log(`********************* Exercise Number 4 *******************`);
// Create Set F = [1,2,3,4] and Set G = [2,3].
// Create a new set containing elements in F but not in G.
// Print the difference set

const setF = new Set([1, 2, 3, 4]);
const setG = new Set([2, 3]);

const differece = setF.difference(setG);
console.log(differece);

// ============================================
// 5
//  Problem: SymetricDyfference
//  Date: 2025-09-01
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
console.log(`********************* Exercise Number 5 *******************`);
// Create Set H = [1,2,3] and Set I = [2,3,4].
// Create a new set containing elements in H or I but not in both.
// Print the symmetric difference set.

const setH = new Set([1, 2, 3, 4]);
const setI = new Set([2, 3, 4]);

const symetric = setH.symmetricDifference(setI);
console.log(symetric);

// ============================================
// 6
//  Problem: Subset
//  Date: 2025-09-01
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
console.log(`********************* Exercise Number 6 *******************`);
// Create Set J = [1,2] and Set K = [1,2,3,4].
// Check if J is a subset of K.

const setJ = new Set([1, 2]);
const setK = new Set([1, 2, 3, 4]);

const subset = setJ.isSubsetOf(setK);
console.log(subset);
