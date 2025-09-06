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

const students = new Map();
students.set('George', 89);
students.set('Grace', 80);
students.set('Jasmine', 70);
students.set('Johanatan', 67);
students.set('Christine', 69);
students.set('Julia', 80);

console.log(students);

const getGrade = students.get('George');
console.log(getGrade);

// 2

const countries = new Map([
  ['Uk', 'London'],
  ['France', 'Paris'],
  ['Spain', 'Madrid'],
  ['Italy', 'Rome'],
]);
