'use strict';

// ============================================
//  Problem: Day 0 - Hello, World!
//  Link: https://www.hackerrank.com/challenges/js10-hello-world/problem?isFullScreen=true
//  Date: 2025-07-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
//
//  🔹 Task:
//   1. Use console.log() to print "Hello, World!" on a new line.
//   2. Use console.log() to print the contents of the argument passed to the function.
//

function getting(parameterVariable) {
  console.log('Hello, World!');
  console.log(parameterVariable);
}
getting('Welcome to 10 Days of JavaScript!');

// ============================================
//  Problem: Day 0 - Data type
//  Link: https://www.hackerrank.com/challenges/js10-data-types/problem?isFullScreen=true
//  Date: 2025-07-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
//
//  🔹 Task:
//   1 Convert  to an integer (Number type), then sum it with  and print the result on a new line using console.log.
//
//    2 Convert  to a floating-point number (Number type), then sum it with  and print the result on a new line using console.log.
//
// 3 Print the concatenation of  and  on a new line using console.log. Note that  must be printed first.

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = 'Hackerrank';

  console.log(firstInteger + Number(secondInteger));

  console.log(firstDecimal + Number(secondDecimal));

  console.log(firstString + ' ' + secondString);
}

performOperation(12, 13.0, 'Is the best!');

// ============================================
//  Problem: Day 1 - Arithmetic Operators
//  Link: https://www.hackerrank.com/challenges/js10-data-types/problem?isFullScreen=true
//  Date: 2025-07-15
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
//
//  🔹 Task:
//   1. getArea(length, width)
//      → Calculate and return the area of a rectangle.
//
//   2. getPerimeter(length, width)
//      → Calculate and return the perimeter of a rectangle.
//
//  📌 Note:
//   The values returned by these functions are printed to stdout
//   by locked stub code in the HackerRank editor.

function getArea(length, width) {
  let area = length * width;

  return area;
}

console.log(getArea(3, 1));

function getPerimeter(length, widht) {
  let perimeter = 2 * (length + widht);
  return perimeter;
}

console.log(getPerimeter(2, 3));
