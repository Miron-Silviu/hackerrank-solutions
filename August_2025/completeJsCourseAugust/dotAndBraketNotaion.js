'use strict';

// ============================================
// 1
//  Problem: Basic Property access
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2024,
};

//  🔹 Task:

// Log the brand using dot notation.
const model = car.model;
console.log(model);

// Log the year using dot notation.
const year = car.year;
console.log(year);

// ============================================
// 2
//  Problem: Updating Values
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const person = {
  name: 'Alice',
  age: 25,
  city: 'New York',
};

//  🔹 Task:

// Change city to "Los Angeles" using dot notation.
person.city = 'Los Angeles';
console.log(person.city);

// Increase age by 1 using dot notation.
person.age++;
console.log(person.age);

// ============================================
// 3
//  Problem: Adding new property
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const laptop = {
  brand: 'Apple',
  model: 'MacBook Pro',
};

//  🔹 Task:

// Add a new property year with value 2025 using dot notation.
laptop.year = 2025;
console.log(`Result after adding year property and value`, laptop);

// Add a new property color with value "silver".
laptop.color = 'Silver';
console.log(`Result after adding color property with silver value`, laptop);

// ============================================
// 4
//  Problem: Nesting Objects
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const user = {
  username: 'coder 123',
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      city: 'Chicago',
      zip: '60601',
    },
  },
};

//  🔹 Task:

// Access and log firstName using dot notation.
user.profile.firstName;
console.log(user.profile.firstName);

// Change the city to "Boston" using dot notation.
user.profile.address.city = 'Boston';
console.log(user.profile.address.city);

// Log the zip using dot notation.
user.profile.address.zip;
console.log(user.profile.address.zip);

// ============================================
// 5
//  Problem: Access Nested Array Values
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const school = {
  name: 'Greenwood High',
  classes: [
    { subject: 'Math', teacher: 'Mr. Lee' },
    { subject: 'Science', teacher: 'Ms. Carter' },
  ],
};

//  🔹 Task:

// Log the teacher of the first class.
console.log(school.classes[0].teacher);

// Log the subject of the second class.

console.log(school.classes[0].subject);

// ============================================
// 6
//  Problem: Update Values In Nested Array
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const shop = {
  name: 'Fresh Mart',
  products: [
    { name: 'Apples', price: 2 },
    { name: 'Bananas', price: 1 },
  ],
};

//  🔹 Task:

// Change the price of Apples to 3.
console.log((shop.products[0].price = 3));

// Change the name of the second product to "Grapes".
console.log((shop.products[1].name = 'Grapes'));

// ============================================
// 7
//  Problem: Add Property to Objects Indide Arrays
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const zoo = {
  animals: [
    { species: 'Lion', age: 5 },
    { species: 'Elephant', age: 10 },
  ],
};

//  🔹 Task:

// Add a name property with "Simba" to the first animal.
console.log((zoo.animals[0].name = 'simba'));
// Add a name property with "Dumbo" to the second animal.
console.log((zoo.animals[1].name = 'Dumbo'));

// ============================================
// 8
//  Problem: Multiple Nesting levels
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const company = {
  departments: [
    {
      name: 'HR',
      employees: [
        { name: 'Alice', position: 'Manager' },
        { name: 'Bob', position: 'Recruiter' },
      ],
    },
    {
      name: 'Engineering',
      employees: [
        { name: 'Charlie', position: 'Developer' },
        { name: 'Hanna', position: 'Designer' },
      ],
    },
  ],
};

//  🔹 Task:

// Log the position of "Bob".
console.log(company.departments[0].employees[1].name);

// Change "Hanna"’s position to "Lead Designer".
console.log((company.departments[1].employees[1].position = 'Lead Designer'));
