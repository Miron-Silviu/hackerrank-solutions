'use stict';

// ============================================
// 1
//  Problem: Destructuring Objects
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
//
//  🔹 Task:

//  Use object destructuring to extract name, age, and job into variables
// Then console.log into a single sentence like:
// "Alex is 25 year old and works as Developer"function.

const user = {
  name: 'Alex',
  age: 25,
  location: 'New York',
  job: 'Developer',
};

const { name, age, job } = user;
console.log(`${name} is ${age} years old and works as ${job}  `);

// Extra Challenge
const { location: city } = user;
console.log(city);

const { hobby = ['Reading'] } = user;
console.log(hobby);

// ============================================
// 2
//  Problem: Basic Extraction
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// Extract brand and year, then log
// "This car is 2020 Toyota"

const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

const { brand, year } = car;
console.log(`This car is ${year} ${brand}`);

// ============================================
// 3
//  Problem: Renaming While Destucturing
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

//  Extract title as bookTitle, pages as totalPages
// Log: "The Hobbit has 310 pages"

const book = {
  title: 'The Hobit',
  author: 'J.R.R. Tolkin',
  pages: 310,
};

const { title: bookTitle, pages: totalPages } = book;
console.log(`The ${bookTitle} has ${totalPages} pages.`);

// ============================================
// 4
//  Problem: Default Values
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// Extract theme and fontSize (default 14)
// Log: "Theme: dark, Font Size: 14"

const settings = {
  theme: 'Dark',
};

const { theme, fontSize = 14 } = settings;

console.log(`Theme : ${theme}, Font Size: ${fontSize}`);

// ============================================
// 5
//  Problem: Nested Destructuring
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// Extract name, city, and country
// Log: "Maria lives in Barcelona, Spain"

const person = {
  Fullname: 'Maria',
  address: {
    Capitalcity: 'Madrid',
    country: 'Spain',
  },
};

const {
  Fullname,
  address: { Capitalcity, country },
} = person;

console.log(`${Fullname} lives in ${Capitalcity}, ${country}`);

// ============================================
// 6
//  Problem: Desturcturig in Function parameters
//  Date: 2025-08-09
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// Write a function printProduct that uses destructuring
// directly in its parameters to log:
// "Laptop costs $1200"

const product = {
  name: 'Laptop',
  price: 1200,

  printProduct: function () {
    console.log(`${this.name} costs ${this.price}`);
  },
};

product.printProduct();

// ============================================
// 7
//  Problem: Multipe defaults and renaming
//  Date: 2025-08-10
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// TODO: Extract username, rename country to location, and set default for age = 18
// Log: "coder123 from USA is 18 years old"

const profile = {
  handle: 'skywalker77',
  region: 'Outer Rim',
};

const { handle, region: sector, rank = 'Padawan' } = profile;
console.log(`${handle} from ${sector} is ${rank}`);

// ============================================
// 8
//  Problem: Nested With Renaming
//  Date: 2025-08-10
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// TODO: Extract name, and artist's first as givenName, last as familyName
// Log: "Starry Night was painted by Vincent van Gogh"

const painting = {
  lastname: 'Starry Night',
  artist: {
    first: 'Vicent',
    last: 'Van Gogh',
  },
};

const {
  lastname,
  artist: { first, last },
} = painting;

console.log(`${lastname} was painted by ${first} ${last}`);

// ============================================
// 9
//  Problem: Depply nested
//  Date: 2025-08-10
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// TODO: Extract fullName and phone in one destructuring statement
// Log: "Evelyn Harper can be reached at +44 1234 567890"

const companyDate = {
  employee: {
    details: {
      fullName: 'Evelin Harper',
      contact: {
        phone: '+44 1234 567890',
      },
    },
  },
};

const {
  employee: {
    details: {
      fullName,
      contact: { phone },
    },
  },
} = companyDate;

console.log(`${fullName} can not be reached at ${phone}`);

// ============================================
// 10
//  Problem: Destructurin with rest properies
//  Date: 2025-08-10
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// TODO: Extract model, and put the rest into a variable called specs
// Log model, then log specs

const spaceship = {
  model: 'X-Wing',
  class: 'Starfingher',
  crew: 1,
  armament: 'Laser cannons',
  hyperdrive: true,
};

const { model, ...specs } = spaceship;

console.log(model, specs);

// ============================================
// 11
//  Problem: funtion parameter with defaults
//  Date: 2025-08-10
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task:

// Call introduceCharacter with:
// 1. { alias: "Shadow Fox", affiliation: "Rebels" }
// 2. {}

function introduceCharacter({ alias = 'Unknow', affiliation = 'Neutral' }) {
  console.log(`Alias : ${alias} (Affiliation: ${affiliation})`);
}

introduceCharacter({ alias: 'Shadow Fox', affiliation: 'Rebels' });
introduceCharacter({});
