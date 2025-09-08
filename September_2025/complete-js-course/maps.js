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

let person = [
  {
    George: 30,
    Atlanta: 37,
    Luiza: 40,
    George: 33,
  },
];

const uniquesByName = new Map(person.map((person) => [person.name, person]));
const duplicate = [...new Set(person)];
console.log(duplicate);

// Create a map with 3 entries
// Print the size using.size

const country = new Map([
  [1, 'China'],
  [2, 'India'],
  [3, 'Japan'],
]);
console.log(country.size);

country.set(4, 'Indonesia');
country.set(5, 'Thaialnd');

console.log(country.size);

// Create a map with with 4 car brands
// Delete one car brand
// Print the Map

const car = new Map([
  [1, 'Land Rover'],
  [2, 'Mercedez Benz'],
  [3, 'Dacia Duster'],
  [4, 'Renault'],
]);

car.delete(1);
console.log(car);
