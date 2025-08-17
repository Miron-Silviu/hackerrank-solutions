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

// Starting DAY

// ============================================
// 4
//  Problem: this in a Object Method:
//  Date: 2025-08-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task

// Create an object user with:
// a property name (your name)
// a method sayName() that logs "My name is ___" using this.name.
// Call the method.

const user = {
  name: 'Jhon',
  sayName: function () {
    console.log(`My name is ${this.name}`);
  },
};

user.sayName();

// ============================================
// 5
//  Problem: this with multiple properties:
//  Date: 2025-08-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task

// Make an object rectangle with:
// width = 5
// height = 10
// a method area() that uses this.width and this.height to return the area.
// Call the method and log the result.

const rectangle = {
  width: 5,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.area());

// ============================================
// 5
//  Problem: update properties with this:
//  Date: 2025-08-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task

// Create an object counter with:
// a property count = 0
// a method increment() that adds 1 to this.count
// a method reset() that sets this.count back to 0
// Test the methods.

const counter = {
  count: 0,
  increment: function () {
    return ++this.count;
  },
  reset: function () {
    return --this.count;
  },
};

console.log(counter.increment());
console.log(counter.reset());
