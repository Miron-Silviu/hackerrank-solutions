'use strict';

// ============================================
// 1
//  Problem: Property Shorthand
//  Date: 2025-08-26
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const name = 'Alice';
const age = 25;

// TODO Create an object person using property shorthand so that it look like:

// {name:"Alice",age:25}
name, age;
const person = {
  name,
  age,
};

console.log(person);

// ============================================
// 2
//  Problem: Method Shorthand
//  Date: 2025-08-26
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Create an object calculator that has:
// a method add(a,b) that returns the sum
// a method multiple (a,b) that return the product

const calculator = {
  add(a, b) {
    return a + b;
  },
  multipy(a, b) {
    return a * b;
  },
};

console.log(calculator.add(2, 2), calculator.multipy(3, 4));

// ============================================
// 3
//  Problem: Compound Properties
//  Date: 2025-08-26
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function makeObject(key,values) that returns an object with
// The propery name equal to key
// The value equal to value

function makeObject(key, value) {
  return {
    [key]: value,
  };
}

console.log(makeObject('City', 'paris'));

// ============================================
// 4
//  Problem: Combining Features
//  Date: 2025-08-26
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function createUser(name, age, role) that return an object:
// Use property shorthand for name and age.
// Has a method shorthand greet() that logs "Hello, my name is <name>"
// Has a coumpund property for the role, e.g if role = "admin", the object should have {admin:true}

function createUser(name, age, role) {
  return {
    name,
    age,
    role,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
    admin: {
      [role]: true,
    },
  };
}

const user = createUser('Bob', 24, 'editor');
console.log(user);
user.greet();

// ============================================
// 5
//  Problem: Chalenge
//  Date: 2025-08-26
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function make Counter(label) that return an object with
// A lable property using shor hand
// A private count variable inside (closure)
// Methods
// increment() -> incresse count by 1
// decrement ()-> decrease count by 1
// getCount() -> return "lable : count"

function makeCounter(label) {
  let count = 0;
  return {
    label,
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return `${this.label}:${count}`;
    },
  };
}

const counter = makeCounter('Apples');
console.log(counter);
counter.increment();
counter.increment();
console.log(counter.getCount());

// ============================================
// 6
//  Problem: Dynamic key with Function
//  Date: 2025-08-27
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function makeCounter(key) that return an object
// The object should have:
// - a dynamic property name based on the argument `key`
// -a count initialized a 0
// - a methor increment () that increse the count
// - a method getCount() that returns the current count

function makeCounter2(key) {
  let count2 = 0;
  return {
    [key]: count2,
    increment2() {
      count2++;
      this[key] = count2;
    },
    getCount2() {
      return count2;
    },
  };
}

const userCounter = makeCounter2('users');
userCounter.increment2();
userCounter.increment2();
console.log(userCounter.users);
console.log(userCounter.getCount2());

// ============================================
// 7
//  Problem: Object Factories with Shorthand + Method
//  Date: 2025-08-27
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function createPerson (name, age) that returns an object
// using shorthang properties, and includes metods
// - greet() -> "Hi , I'm {name} and I'm {age} years old"
// -birthday()->increase age by 1

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    },
    birthday() {
      this.age++;
    },
  };
}
const p = createPerson('Emma', 20);
p.greet();
p.birthday();
p.greet();

// ============================================
// 8
//  Problem: Nested Objects with super
//  Date: 2025-08-27
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Create an object vehicel with method move
// Vehicle is moving
// Then create another object car that inherits from vehicle and overrides move to ->Car is driving but also call the parent move () using super

const vehicle = {
  move() {
    return 'Vehicle is moving';
  },
};

const car = {
  move() {
    return 'Car is driving and ' + super.move();
  },
};

Object.setPrototypeOf(car, vehicle);

console.log(car.move());
