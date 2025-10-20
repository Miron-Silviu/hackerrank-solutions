'use strict';

// ============================================
// 1
//  Problem:Fix this inside the function
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO There is a function that logs a person's name, but when you pass it to another functoin, this gets lost

// Use bind to fix it

console.log(`******************* 1 *****************`);

const person = {
  name: 'Alice',
  sayName(name) {
    console.log(name || this.name);
  },
};

const say = person.sayName;

const mention = say.bind(person);
mention();

// ============================================
// 2
//  Problem:Pre-bind to another object
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const user1 = {
  name: 'Tom',
  geet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const user2 = { name: 'Jerry' };
const newUser = user1.geet.bind(user2);

newUser();

// ============================================
// 3
//  Problem:Bind the with agrumets
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use bind () method to preset one or more arguments of a function

function multiply(a, b) {
  console.log(a * b);
}

const double = multiply.bind(null, 2);
double(5);

function personName(fullName) {
  console.log(`My name is ${fullName}`);
}

const name = personName.bind(undefined, 'Joshep');
name();

// ============================================
// 4
//  Problem:Event handler fix
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use bind () to make sure this refers to the object inside the event handler.

// const counter = {
//   count: 0,
//   increment() {
//     this.count++;
//     console.log(this.count);
//   },
// };

// document
//   .getElementById('btn')
//   .addEventListener('click', counter.increment.bind(counter));

// ============================================
// 5
//  Problem:Borrow a method
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use bind to make one object use another's method

const car = {
  brand: 'Toyota',
  show() {
    console.log(`Brand:${this.brand}`);
  },
};

const bike = { brand: 'Yamaha' };

const show = car.show.bind(bike);

show();

// ============================================
// 6
//  Problem:Bind this to and object
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use bind to make speak work correctly

const person2 = {
  name: 'Ali',
  sayName() {
    console.log(this.name);
  },
};

const sayMyName = person2.sayName.bind(person2);
sayMyName();

// ============================================
// 7
//  Problem:Bind a functoin to another object
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Bind a function to another object

const cat = { name: 'kitty' };
function printName() {
  console.log(this.name);
}

const catName = printName.bind(cat);
catName();

// ============================================
// 7
//  Problem:Bind with number
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use bind() to create a new function that always adds 5 to a number

function add(a, b) {
  console.log(a + b);
}

const adds = add.bind(null, 5);
adds(3);

// ============================================
// 8
//  Problem:Borrow a method
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Borrow a method

const dog = { name: 'Rex' };
const showName = function () {
  console.log(this.name);
};

const dogName = showName.bind(dog);
dogName();

// ============================================
// 9
//  Problem:Basic Object binding
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Use bind so that calling sayName prints "Buddy"

const lion = { name: 'Simba' };

function lionName() {
  console.log(this.name);
}

const kingOfTheJungle = lionName.bind(lion);
kingOfTheJungle();
