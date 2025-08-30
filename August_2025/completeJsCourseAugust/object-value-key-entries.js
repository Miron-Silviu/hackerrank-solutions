'use strict';

// ============================================
// 1
//  Problem: Looping Over Keys
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const user = {
  name: 'Alice',
  age: 25,
  city: 'New York',
};

// TODO  Use Objec.key(obj) to get an array of keys, then loop

// Object.keys(user).forEach((key) => {
//   console.log(key);
// });

console.log(`****************** 1 **************`);

const userkyes = Object.keys(user).forEach((key) => {
  console.log(key);
});

// ============================================
// 2
//  Problem: Object.Value
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

// TODO Print all the values of the car object.
console.log(`************************** 2 **********************`);

const carValues = Object.values(car).forEach((value) => {
  console.log(value);
});

// ============================================
// 3
//  Problem: Object.Entries
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const book = {
  title: 'The Hobbit',
  author: 'J.R.R Tolkien',
  year: 1937,
};

// TODO Print all the keys-values pairs (entries) of the book object

console.log(`************************** 3 **********************`);

console.log(Object.entries(book));

// ============================================
// 4
//  Problem: Looping with object Keys
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const student = {
  name: 'John',
  grade: 'A',
  subject: 'Math',
};

// TODO Use object.Keys and a loop to print each key

console.log(`************************** 4 **********************`);
for (const [key, value] of Object.entries(student)) {
  console.log(key, value);
}

// ============================================
// 5
//  Problem: Looping With Object value
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const product = {
  id: 101,
  name: 'Laptop',
  price: 900,
};

// TODO  Use Object.value and loop to print each value

console.log(`************************** 5 **********************`);

for (const value of Object.values(product)) {
  console.log(value);
}
// ============================================
// 6
//  Problem: Looping With Object value
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const country = {
  name: 'Japan',
  capital: 'Tokyo',
  population: 125000000,
};

// TODO Use Object.entries and a loop to print each value

console.log(`************************** 6 **********************`);
for (const [key, value] of Object.entries(country)) {
  console.log(`Key ${key}: Value ${value}`);
}

// ============================================
// 7
//  Problem: Practice Challenge
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const movie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  year: 2010,
  rating: 8.8,
};

// TODO

console.log(`************************** 7 **********************`);
// 1 Print all the key of the movie
console.log(Object.keys(movie));

// 2 Print all the values of the movie
console.log(Object.values(movie));

// 3 Print all the entries of the movie
console.log(Object.entries(movie));

// 4 Loop through the entries and print sentence like: `The key 'title'has value'Inception'`

for (const [title, value] of Object.entries(movie)) {
  console.log(`The key ${title} has value ${value}`);
}
