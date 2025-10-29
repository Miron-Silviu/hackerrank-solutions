'use strict ';

// ============================================
// 1
//  Problem: Return the inner function
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function outer that reutrns an inner function
// The inner function should log "Hello Closure"

const inner = function () {
  const string = 'Hello Closure';

  return function () {
    console.log(string);
  };
};

const message = inner();
message();

// ============================================
// 2
//  Problem: Increment a private variable
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function makeCounter that returnes a function which increments a private variable count by 1 each time it is called

// Test it by calling the returned function multiple times.

const makeCounter = function () {
  let counter = 0;

  return function () {
    const increment = counter++;
    console.log(increment);
  };
};

const invrementResult = makeCounter();
invrementResult();
invrementResult();
invrementResult();

// ============================================
// 3
//  Problem: Full Name
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function greet(name) that returns a funtction taking a message paramerte
// The inner function should log "message, name!"
// Exampel: greet("Alice")("Hi") logs "Hi Alice!"

function greet(name) {
  return function (message) {
    console.log(message, name);
  };
}
greet('Alice!')('Hi,');
greet('Bob!')('Hi,');

// ============================================
// 4
//  Problem: Add
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a function createAdder(x) that returns a function which adds x to its arguments
// Example: const add5 = createAdder(5);add5(5) should return 8

function createAdder(x) {
  return function (y) {
    console.log(x + y);
  };
}

const add5 = createAdder(5);
add5(3);

// ============================================
// 5
//  Problem: Increment
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Make a function counterObject() that returns an object with two methods:
// increment() increase a private variable count.
// decrement() decrease the private variable count
// Demonstrate that count is not accessible directly

const counterObject = function () {
  let count = 0;
  return (counting = {
    increment() {
      const increase = count++;
      console.log(increase);
    },
    decrement() {
      const decrease = count--;
      console.log(decrease);
    },
  });
};

const finalResult = counterObject();
finalResult.increment();
finalResult.increment();
finalResult.increment();

// ============================================
// 6
//  Problem: same value
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Create a function remberValue(val) that returns a function.

// The returned function should always long the val it "rembers"
// Test multiple remembered values

const remberValue = function (val) {
  return function () {
    console.log(val);
  };
};
const returnResult = remberValue();
returnResult('Val');
returnResult('Val');
returnResult('Val');

// ============================================
// 7
//  Problem: multiply argument
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Write a function multiplyBy(x) that returns a function
// The returned function multiplies its arguments by x
// Example const double = multipylBy(2); double(4) -> 8

// const multiplyBy = function (x) {
//   return function () {
//     console.log(x * x);
//   };
// };

// const double = multiplyBy(2);
// double(4);
