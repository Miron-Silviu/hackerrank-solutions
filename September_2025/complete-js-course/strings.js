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

// ============================================
// 8
//  Problem:Length of a string
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a program that asks user for thier name and prints how many characters it has.

function nameLenght(name) {
  return name.length;
}
console.log(nameLenght('Silviu Miron'));

// ============================================
// 9
//  Problem:Upper and lowercase
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Convert "hello world" into all uppercase, all lowercase

console.log('hello world'.toUpperCase());
console.log('hello world'.toLowerCase());

// ============================================
// 10
//  Problem:Find Position of a word
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO  Find the position(index) of the word "JavaScript"

let sentence = 'I love JavaScript progamming';

console.log(sentence.indexOf('JavaScript'));

// ============================================
// 11
//  Problem:Extract part of a string
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Extract part of a string from "I love coding" extract only the word "coding"

const coding = 'I love coding in JavaScript';

console.log(coding.slice(7, 13));
console.log(coding.substring(7, 13));

// ============================================
// 12
//  Problem:Replace a word
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Change "I like python" to "I like JavaScript"

const programmingLanguage = 'I like Python';

console.log(
  programmingLanguage.replace(programmingLanguage, 'I like JavaScript')
);

// ============================================
// 13
//  Problem:Check if word exists
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a program that check it"apple" esist in this sentence

let text = 'I ate a red apple yesterday.';

console.log(text.includes('apple'));

// ============================================
// 14
//  Problem:Split into Words
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Turn this string into array.

const string = 'Learn JavaScript step by step';

console.log(string.split());

// ============================================
// 15
//  Problem:Remove extra spaces
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Remove extra spaces

const removSpaces = '  JavaScript is fun!         ';

console.log(removSpaces.trim());

// ============================================
// 16
//  Problem:Repeat string
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Pring "hi" 5 times

const repetaString = 'hi';
console.log(repetaString.repeat(5));

// ============================================
// 17
//  Problem:Combine Methods
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Given " hello WORLD"
// -remove spaces
// -make it lowercase
// -then make the first letter uppercase

const str = ' hello WORLD';

const combineMethods = function (methods) {
  const newStr = str.trim().toLowerCase();

  const firstUpper = newStr.slice(0, 1).toUpperCase() + newStr.slice(1);
  console.log(firstUpper);
};

combineMethods();
