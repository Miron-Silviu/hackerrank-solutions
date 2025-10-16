'use strict';

// ============================================
// 1
//  Problem:Understand the call method
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`*************************** 1 **************`);

const person1 = {
  name: 'Alice',
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

const person2 = { name: 'Bob' };

person1.sayHi.call(person2);

// ============================================
// 2
//  Problem:Call With arguments
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`*************************** 2 **************`);

function introduce(city, country) {
  console.log(`I'm ${this.name} from ${city}, ${country}`);
}

const person = { name: 'Emma' };

introduce.call(person, 'Paris', 'France');

// ============================================
// 3
//  Problem:apply
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`*************************** 3 **************`);

function introduction(city, country) {
  console.log(`I'm ${this.name} from ${city} ${country}`);
}

const newPerson = { name: 'Liam' };

introduction.apply(newPerson, ['London', 'Uk']);

// ============================================
// 3
//  Problem:Practice
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`*************************** 3 **************`);

const animal = {
  type: 'Dog',
};

function makeSound(sound) {
  console.log(`${this.type} says ${sound}`);
}

makeSound.call(animal, 'Woof');
makeSound.apply(animal, ['Bark']);

// ============================================
// 4
//  Problem:Person
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create an object called person. It should have properties: name(string) and age(number). It should have a method.

console.log(`*************************** 4 **************`);
const human = {
  name: 'Bob',
  age: 20,
  greed() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  },
};

const person3 = { name: 'Robert', age: 30 };

// human.greed.call(person3, 'Hello');
human.greed.apply(person3, ['Hello']);

const newGreet = human.greed.bind(person3);
console.log(newGreet);

// ============================================
// 5
//  Problem:Car
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`*************************** 4 **************`);

const car = {
  brand: 'Toyota',
  year: 2002,
  info(message, newMessage) {
    return `This is a ${this.brand} car from ${this.year} ${message} ${newMessage}`;
  },
};

const newCar = { brand: 'BMW', year: 2000 };

console.log(car.info.call(newCar, 'Very ', 'Good'));

console.log(car.info.apply(newCar, ['Very', 'Good']));

console.log(car.info.call(newCar, ...Object.values(newCar)));

// ============================================
// 6
//  Problem:Multiply
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

function multiply(num1, num2) {
  return this.num1 * this.num2;
}

const multiplyNum = { num1: 10, num2: 10 };
console.log(multiply.call(multiplyNum));

// ============================================
// 7
//  Problem:Multiply
//  Date: 2025-10-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`*************************** 7 **************`);

const student = {
  name: 'Robert',
  grade: 80,

  report() {
    return `${this.name} has ${this.grade} grade`;
  },
};

const student2 = { name: 'Vlad', grade: 85 };

console.log(student.report.call(student2));
