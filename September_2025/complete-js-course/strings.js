'use strict';

// ============================================
// 1
//  Problem: Extract domain from email
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Given a string with an email, e.g "user@example.com", write a function that returns the domain("example.com")

function domain(user) {
  const x = user.indexOf('@');
  return user.slice(x);
}
console.log(domain('user@example.come'));

// ============================================
// 2
//  Problem:Extract first and last name
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Given a string "Jhon Doe" return an object :{firstName: "Jhon", lastName:"Doe"}

function nameObj(fullName) {
  const space = fullName.indexOf(' ');
  const firstName = fullName.slice(0, space);
  const lastName = fullName.slice(space + 1);
  return { firstName, lastName };
}
console.log(nameObj('John Doe'));

// ============================================
// 3
//  Problem:Extract file extension
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Given "photo.jpeg" or "document.pdf" return "Jpeg" or "pdf"

function fileExtraction(file) {
  const dot = file.lastIndexOf('.');
  const documentSlice = file.slice(dot + 1);
  return documentSlice;
}
console.log(fileExtraction('photo.jpeg'));
console.log(fileExtraction('document.pdf'));

// ============================================
// 4
//  Problem:Mask middle of a string
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const stringNumber = function (string) {
  const sliceFirst = string.slice(0, 2);
  const sliceLast = string.slice(-2);
  const repeat = '*'.repeat(string.length);

  const stringPassword = `${sliceFirst}${repeat}${sliceLast}`;
  return stringPassword;
};
console.log(stringNumber('1234567890'));

// ============================================
// 5
//  Problem:Extract substring between two characters
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Given the string "Hello [World]" extract "World"

// const str = 'Hello [World]';

// const removeFirst = str.indexOf('[');
// const removeSecond = str.indexOf(']');

// const getString = str.slice(removeFirst + 1, removeSecond);

// console.log(removeFirst);
// console.log(removeSecond);
// console.log(getString);

const getString = function (str) {
  const removeFirst = str.indexOf('[');
  const removeSecond = str.indexOf(']');
  const getFinalString = str.slice(removeFirst + 1, removeSecond);
  return getFinalString;
};

console.log(getString('Hello [World]'));

// ============================================
// 6
//  Problem:Last occurrence of a word
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Given "one two three two one ", find the last occurrence of "two " and return its starting index

const startingIndex = function (str) {
  const lastIndex = str.lastIndexOf('two');
  return lastIndex;
};
console.log(startingIndex('one two three two one'));

// ============================================
// 7
//  Problem:Remove everting after a character
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Give "username@", remove everthing after "@" and return "username"

function removeEverghing(str) {
  const findIndex = str.indexOf('@');
  const remove = str.slice(0, findIndex);
  return remove;
}

console.log(removeEverghing('username@example.com'));
