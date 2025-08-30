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

console.log(`************************** 8 **********************`);

for (const [title, value] of Object.entries(movie)) {
  console.log(`The key ${title} has value ${value}`);
}

// ============================================
// 8
//  Problem: Add new key-value Pair
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const user2 = {
  name: 'Emma',
  age: 28,
};

// TODO Add a new key city with value london using dot notation
// Then print the updated object

console.log(`************************** 9 **********************`);

user2.city = 'London';
console.log(user2);
console.log(Object.keys(user2.city));

// ============================================
// 9
//  Problem: Update a Value
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const laptop = {
  brand: 'HP',
  price: 700,
};

// TODO Update the price to 750 using brackte notation
// Then print the update object
console.log(`************************** 10 **********************`);
laptop['price'] = 750;
console.log(Object.values(laptop));

// ============================================
// 10
//  Problem: Delete key
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const phone = {
  brand: 'Samsung',
  model: 'S21',
  color: 'Black',
};

// TODO Delete the color key from the object
// Then print the upadated object

delete phone.color;
console.log(Object.keys(phone));

// ============================================
// 11
//  Problem: Check if a Key Exists
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

let fruits = {
  name: 'Apple',
  color: 'Red',
  price: 2,
};

// TODO Check if the key  color exist in the object
// Print true of false

console.log(`************************** 11 **********************`);

if (Object.keys((fruits = 'color'))) {
  console.log(true);
} else {
  console.log(false);
}

// ============================================
// 12
//  Problem: Check if a Key Exists
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const city = {
  name: 'Tokyo',
  country: 'Japan',
  population: 14000000,
};

// TODO Print how many keys and values the object has

console.log(`************************** 12 **********************`);
for (const [key, value] of Object.entries(city)) {
  console.log(key, value);
}

// ============================================
// 13
//  Problem: Combine Keys and Values into String
//  Date: 2025-08-30
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const student2 = {
  name: 'Liam',
  grade: 'B',
  subject: 'Science',
};

// TODO Loop throught the object and print sentences like:
// "Liam studies Science and got grade B"

console.log(
  `${student2.name} studies ${student2.subject} and got grade ${student2.grade}.`
);
