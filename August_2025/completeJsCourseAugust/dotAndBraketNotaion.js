'use strict';

// DAY

// LESSON DOT NOTATION
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

// LESSON BRACKET NOTATION

// ============================================
// 8
//  Problem: Acess property with space
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const movie = {
  'release date': '2023-12-15',
  director: 'Sofia Lee',
};

//  🔹 Task:

// Log "release date" using bracket notation.
console.log(movie['release date']);

// Log director using bracket notation.
console.log(movie['director']);

// ============================================
// 9
//  Problem: Acess with dynamic keys
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const device = {
  brand: 'Pixel',
  model: '6a',
};

const keyName = 'model';

//  🔹 Task:

// Log model using the variable keyName and bracket notation.

console.log(device[keyName]);

// ============================================
// 10
//  Problem: Update property with special characters:
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const song = {
  'song-title': 'Imagine',
  artist: 'John Lennon',
};

//  🔹 Task:

// Change "song-title" to "Hey Jude" using bracket notation.
song['song-title'] = 'Hey Jude';
console.log(song['song-title']);

// DAY STARTING
// ============================================
// 11
//  Problem: Update property with special characters:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const userProfile = {};
const newKey = 'hobby';

//  🔹 Task:
// Add a property "hobby" with value "painting" using bracket notation and newKey.

userProfile[newKey] = 'painting';
console.log(userProfile);

// ============================================
// 12
//  Problem: Acces object properties using brackte notation:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const movieName = {
  title: 'Inception',
  director: 'Christopher Nolan',
  yearReleased: 2010,
};

//  🔹 Task

// Use bracket notation to get the value of the "director" property and store it in a variable called directorName
// console.log directorName

const directorName = movieName['director'];
console.log(directorName);

// ============================================
// 13
//  Problem: Use variable to acces object properties:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const laptopMachine = {
  brand: 'Dell',
  model: 'xps 15',
  processor: 'Intel i7',
};

const property = 'processor';

//  🔹 Task

// Use bracket notation and the variable 'property' to access the laptop's processor and print it
console.log(laptopMachine[property]);

// ============================================
// 14
//  Problem: Add new property using bracket notation:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const city = {
  name: 'Toko',
  country: 'Japan',
};

//  🔹 Task

// Add a new property called "population" with value 14000000 using bracket notation
// Then print the updated city object

city['population'] = 1400000;

console.log(city);

// ============================================
// 15
//  Problem: Update property values using bracket notation:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const athlets = {
  name: 'Serana Williams',
  sport: 'Tenis',
};

//  🔹 Task

// Update the sport to "Professional Tennis Player" using bracket notation
// Print the updated athlete object

athlets['sport'] = 'Profesional Tennis Player';

console.log(athlets);

// ============================================
// 16
//  Problem: Access nested object properties using brackte notation:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const library = {
  section: {
    fiction: {
      booksAvailable: 120,
      popularBook: '1984',
    },
  },
};

//  🔹 Task

// Access the popularBook using bracket notation and print it

console.log(library['section']['fiction']['popularBook']);

// ============================================
// 17
//  Problem: Access nested object properties using brackte notation:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const phone = {
  brand: 'Apple',
  model: 'iPhone 13',
  color: 'Midnight',
};

//  🔹 Task

// Use bracket notation to delete the "color" property
// Then print the updated phone object

delete phone['color'];

console.log(phone);

// ============================================
// 18
//  Problem: Check if a property exist using bracket notation:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const recipe = {
  name: 'Pancakes',
  serving: '4',
  ingradients: ['four', 'milk', 'eggs'],
};

//  🔹 Task

// Use bracket notation and an if statement to check if the "servings" property exists
// Print "Found" if it exists, otherwise "Not Found"

if (recipe['serving']) {
  console.log('Found!');
} else {
  console.log('Not found!');
}

// ============================================
// 19
//  Problem: Use varibale key to dinamicaly add property:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const country = {
  name: 'Canada',
  continent: 'Noth America',
};

const oldKey = 'population';
const newValue = '38000000';

//  🔹 Task

// Add a new property to country using newKey and newValue with bracket notation
// Print the updated country object

country[oldKey] = newValue;

console.log(country);

// ============================================
// 20
//  Problem: Access array element inside an object using brackte notation:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const playlist = {
  name: 'Chill Hits',
  songs: ['Sunset Lover', 'Lose It', 'Electric Feel'],
};

//  🔹 Task

// Access the second song using bracket notation and print it

console.log(playlist['songs'][1]);

// ============================================
// 21
//  Problem: Use bracket notation ro rename a property:
//  Date: 2025-08-12
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const employees = {
  id: 101,
  fullName: 'Jane Smith',
  position: 'Developer',
};

//  🔹 Task

// Rename the property 'fullName' to 'name' using bracket notation
// Print the updated employee object

employees['name'] = employees['fullName'];
delete employees['fullName'];
console.log(employees);
