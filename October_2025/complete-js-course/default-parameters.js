'use strict';

// ============================================
// 1
//  Problem:Geeting Function
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Create a function greet (name = "Guest") that prints Hello, <name>

console.log(`************************ 1 **************`);
const greet = function (name = 'Guest') {
  //   return `Hello, ${name}!`;
  console.log(`Hello, ${name}!`);
};

// console.log(greet('Alice'));
// console.log(greet());

greet('Alice');
greet();

// ============================================
// 2
//  Problem:Calculate Area
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function calculateArea (width = 1, height =1 ) that returns the area of rectangle.

console.log(`************************ 2 **************`);

const calculateArea = function (width = 1, height = 1) {
  console.log(width * height);
};

calculateArea(5, 10);
calculateArea(7);
calculateArea();

// ============================================
// 3
//  Problem:Power Function
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function power (base, exponent = 2) that returne base raised to the power of exponent.

console.log(`************************ 3 **************`);

function power(base, exponent = 2) {
  return base ** exponent;
}
console.log(power(3, 3));
console.log(power(4));

// ============================================
// 4
//  Problem:Create Username
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function createUsername (firstName, lastName ="Doe") that returns a username like this  <firstName>_<lastName>

console.log(`************************ 4 **************`);

function createUsername(firstName, lastName = 'Doe') {
  return firstName + '_' + lastName;
}

console.log(createUsername('John', 'Smith'));
console.log(createUsername('Anna'));

// ============================================
// 5
//  Problem:Discount Calculator
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function applyDiscount(price, discount = 10) that returns the final price after applying the discout percentage.

console.log(`************************ 5 **************`);
function applyDiscount(price, discount = 10) {
  const finalPrice = price - (price * discount) / 100;
  return finalPrice;
}

console.log(applyDiscount(100, 20));
console.log(applyDiscount(100));

// ============================================
// 6
//  Problem:Combine Messages
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function sendMessage (to = "User", message = "welcome!") that prints: Sending message to <to> :"<message>"

console.log(`************************ 6 **************`);

const sendMessage = function (to = 'User', message = 'Welcome') {
  return `Sending message to ${to}: ${message}`;
};

console.log(sendMessage('Alice', 'Good morning!'));
console.log(sendMessage());

// ============================================
// Bonus
//  Problem:Default Function as parameter
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function logMessage(message, logger = console.log) that uses logger to print the message.

function logMessage(message, logger = console.log) {
  return logger(message);
}

logMessage('Hello!');
logMessage('Warning!', alert);
