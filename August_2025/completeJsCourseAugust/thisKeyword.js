'use strict';

// STARTING DAY
// ============================================
// 1
//  Problem: Object Method:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task

// Create an object car with properties brand and model and a method getInfo that returns a string like "Toyota Corolla".
// Use this inside the method to access the properties.

const car = {
  brand: 'Toyota',
  model: 'Corolla',
  getInfo: function () {
    return `${this.brand} ${this.model}`;
  },
};

console.log(car.getInfo());

// Starting DAY

// ============================================
// 2
//  Problem: Basic Object:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task

// Create an object person with a property name and a method sayName that prints the name using this.

const person = {
  name: 'Alice',
  sayName: function () {
    console.log(`${this.name}`);
  },
};
person.sayName();

// ============================================
// 3
//  Problem: Object with Age:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task
// Create an object dog with properties name and age, and a method info that prints "Dog name is Max and age is 3" using this.

const dog = {
  name: 'Max',
  age: 3,
  info: function () {
    return `Dog name is ${this.name} and the age is ${this.age} years old `;
  },
};

console.log(dog.info());
