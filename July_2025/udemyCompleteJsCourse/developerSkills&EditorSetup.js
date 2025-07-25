'use strict';

//

// ============================================
//  Problem: Coding Challenge #1
//  Date: 2025-07-16
//  Language: JavaScript
//  Difficulty: Fundamental Part 2
// ============================================

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// 🔹 Task:

// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

const printforcast = function (arr) {
  let degree = '°C in ';
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += `...${arr[i]}${degree} ${i + 1} days `;
  }
  return result + '...';
};

console.log(printforcast([17, 21, 23]));
console.log(printforcast([-1, 0, 20, 30, 12]));
