'use strict';

// ============================================
// 1
//  Problem:Basic Lavel
//  Date: 2025-08-06
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO

// 1 Create a map to store the names of sutdents as key and their grades as valuse
// Add a least 5 entries
// Retrive the grade of a specific student

// 2 Check Existence

// Give a Map of countries and theri capitals, check if "Japan" exists as a key
// If it does, print the capital: otherwise add "Japan" -> "Tokyo" to the Map

// 3 Iteration Practice
// Create a Map with some fruit names as keys and theri prices as values
// Use for of to print all keys and valuse in the format :Fruite:Apple
// Price:2

// 1

// const students = new Map();
// students.set('George', 89);
// students.set('Grace', 80);
// students.set('Jasmine', 70);
// students.set('Johanatan', 67);
// students.set('Christine', 69);
// students.set('Julia', 80);

// console.log(students);

// const getGrade = students.get('George');
// console.log(getGrade);

// // 2
// ============================================
// 2
//  Problem:Basic Lavel
//  Date: 2025-08-07
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
// const countries = new Map([
//   ['Uk', 'London'],
//   ['France', 'Paris'],
//   ['Spain', 'Madrid'],
//   ['Italy', 'Rome'],
// ]);
// if (countries.has('Japan')) {
//   console.log('Japan');
// } else {
//   console.log(countries.set('Japan', 'Tokyo'));
// }

// // 3
// const fruits = new Map();

// fruits.set('apple', 23);
// fruits.set('oranges', 20);
// fruits.set('mango', 35);
// fruits.set('watermelo', 40);

// for (const [fruit, price] of fruits) {
//   console.log(`Fruit ${fruit}, Price ${price}`);
// }

// const movies = new Map([
//   ['Inception', 2010],
//   ['Tenet', 2020],
//   ['Interstelar', 2014],
// ]);

// for (const [movie, year] of movies) {
//   console.log(`Movie ${movie}, Year ${year}`);
// }

// Intermediat level

// 4 Write a function that takes a string and returns a Map where keys are words and values are thier counts

// Example "hello world, hello" {"hello " ->2 "World"->1}

// function string(str) {
//   let words = str.split(' ');

//   const frequencyMap = new Map();
//   for (const word of words) {
//     if (frequencyMap.has(word)) {
//       frequencyMap.set(word, frequencyMap.get(word) + 1);
//     } else {
//       frequencyMap.set(word, 1);
//     }
//   }
//   return frequencyMap;
// }

// const text = 'hello world hello';
// const result = wordFrequency(text);

// for (const [word, count] of result) {
//   console.log(`Word: ${word}, Count: ${count}`);
// }

// let person = [
//   {
//     George: 30,
//     Atlanta: 37,
//     Luiza: 40,
//     George: 33,
//   },
// ];

// const uniquesByName = new Map(person.map((person) => [person.name, person]));
// const duplicate = [...new Set(person)];
// console.log(duplicate);

// Create a map with 3 entries
// Print the size using.size

// const country = new Map([
//   [1, 'China'],
//   [2, 'India'],
//   [3, 'Japan'],
// ]);
// console.log(country.size);

// country.set(4, 'Indonesia');
// country.set(5, 'Thaialnd');

// console.log(country.size);

// Create a map with with 4 car brands
// Delete one car brand
// Print the Map

// const car = new Map([
//   [1, 'Land Rover'],
//   [2, 'Mercedez Benz'],
//   [3, 'Dacia Duster'],
//   [4, 'Renault'],
// ]);

// car.delete(1);
// console.log(car);

// ============================================
// 3
//  Problem:Basic Lavel
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Update a value in Map
// Create a map of 3 books authors
// Update the author of one book
// Print the map before and after the update

// const books = new Map([
//   ['William Shakspare', 'Romeo and Juliette'],
//   ['Leonardo daVinci', `Leonardo's Notebook`],
//   ['Jules Verne', 'Around the world in Eighty Days'],
// ]);
// console.log(books);

// const value = books.get('Jules Verne');
// books.set('Mircea Eliade', 'Around the World in Eighty Days');
// books.delete('Jules Verne');

// console.log(books);

// ============================================
// 4
//  Problem:Use different data types as keys
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Create a map where
// a string key ("name") maps to "Alice"
// a number key (1) maps to "one"
// a boolean key (true) map to "yes"
// Retrive each value and print it

const mapObj = new Map([
  ['name', 'Alice'],
  [1, 'one'],
  [true, 'yes'],
]);

console.log(mapObj);

const retriveValues = mapObj.values();
console.log(retriveValues);

// ============================================
// 4
//  Problem:Convert map to array
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Create a map of 3 color>->hex code
// Convet it into an array of[key,values] pairs using Array.from()
// Print the result

const colors = new Map([
  ['Red', '#F54927'],
  ['Green', '27F58E'],
  ['Blue', '275BF5'],
]);
console.log(colors);
const convertToArrayas = Array.from(colors);
console.log(convertToArrayas);

// ============================================
// 4
//  Problem:Get All keys and values
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Create a map of 3 movies rating
// Print only the keys (movi titles)
// Print only the values (rating)

const movies = new Map([
  ['Mission Imposible ', 7.6],
  ['The godfather', 9.2],
  ['ostrov', 7.8],
]);

// ============================================
// 5
//  Problem:Clear the map
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Create a map of three progamming languages -> creators
// Use .clear() to remove all entries.
// Print the zize before and after clearing

const progammingLanguages = new Map([
  ['Brendan Eich', 'JavaScript'],
  ['Denis Ritchie', 'C'],
  ['Guido Van Rossum', 'Python'],
]);

console.log(progammingLanguages);
console.log(progammingLanguages.clear());

// ============================================
// 6
//  Problem:Default Value Handaling
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Create a map of animals -> sounds.
// Try to get the sound of lion
// If it dons't exist,print "Unknown animal"

const animalSounds = new Map([
  ['lion', 'roar'],
  ['bison', 'muuu'],
  ['cat', 'miow'],
]);

console.log(animalSounds);
const getSound = animalSounds.get('lion');
console.log(getSound);

// ============================================
// 7
//  Problem:Add multiple entries at once
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Create an empty map.
// Add 3 entired using .set() one by one.
// Add 2 more entries using new Map([[key, values],...]) and merge them

const multipleEntries = new Map();
multipleEntries.set('Name', 'jack');
multipleEntries.set('Job', 'Software Developer');
multipleEntries.set('Address', '365 Avenue');

console.log(multipleEntries);

const addMultiple = new Map([
  ['First Name', 'Bob'],
  ['Date of Birth', '15/05/2002'],
]);

const merge = new Map([...addMultiple, ...multipleEntries]);
console.log(merge);

// ============================================
// 8
//  Problem:Find Key by Value
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Create a map of cities -> population
// Write a small loop to find wich city has a population of 500000

let cities = new Map([
  ['Mancester', 750000],
  ['Leeds', 500000],
  ['Sheffield', 450000],
]);

console.log(cities);

for (const [key, value] of cities.entries())
  if (value === 500000) console.log(`The citi with 500000 is ${key}`);
