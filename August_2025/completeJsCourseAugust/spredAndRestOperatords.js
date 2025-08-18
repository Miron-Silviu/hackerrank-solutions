'use strict';

// Starting DAY
// ============================================
// 1
//  Problem: Copying an Object (Spread):
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const person = { name: 'Alica', age: 25 };

//  🔹 Task

// Make a new obect called `personalCopy `using the spread operator and log it.

const personalCopy = { ...person };
console.log(personalCopy);

// ============================================
// 2
//  Problem: Adding properties with Spread:
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const car = { brand: 'Toyota', model: 'Corolla' };

//  🔹 Task

//  Create a new object `carWithYear`
// that has all properties of `car` plus `year: 2024`.

const carWithYear = { ...car, year: 2024 };
console.log(carWithYear);

// ============================================
// 3
//  Problem: OVerriding Properties with Spread:
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const book = { title: 'JS Guide', pages: 300 };

//  🔹 Task

// Make a copy of `book` called `shortBook`
// but override `pages` to 100.

const shortBook = { ...book, pages: 100 };
console.log(shortBook);

// ============================================
// 4
//  Problem: Combining Objects with Spread:
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//  🔹 Task

// Create a new object `combined` that merges both.

const combined = { ...obj1, ...obj2 };
console.log(combined);

// ============================================
// 5
//  Problem: Using Rest to Exclude Properties:
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task

const user = { id: 1, username: 'John_doe', password: '12345' };

//  🔹 Task

//  Use rest to extract `password` separately
// and keep the rest in another object called `safeUser`.

const { password, ...safeUser } = user;
console.log(password, safeUser);

// ============================================
// 6
//  Problem: Function Parameters with Rest:
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  🔹 Task

function showUser({ name, age, ...rest }) {
  console.log(name, age, rest);
}

showUser({ name: 'Bob', age: 30, city: 'Paris', country: 'France' });

// ============================================
// 7
//  Problem: Nested Spread
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const profile = {
  name: 'Eve',
  details: { age: 22, country: 'USA' },
};
//  🔹 Task

// 👉 Create `profileCopy` with spread.
// Change `name` to "Eva", but keep `details` the same.

const profileCopy = { ...profile, name: 'Eva' };
console.log(profileCopy);

// ============================================
// 7
//  Problem: Copy Object
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const fruit = { name: 'Apple', color: 'Red' };

//  🔹 Task
// Make a copy of a fruit using spread

const fruitCopy = { ...fruit };
console.log(fruitCopy);

// ============================================
// 8
//  Problem: Add property
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const phone = { brand: 'Samsung', model: 'S21' };

//  🔹 Task
// Add price: 800 using spread

const phoneWithPrice = { ...phone, price: 800 };
console.log(phoneWithPrice);

// ============================================
// 9
//  Problem: Override Property
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const laptop = { brand: 'Dell', ram: '8GB' };

//  🔹 Task

// Change the ram to "16 GB" using spread

const upgradedLaptop = { ...laptop, ram: '16 GB' };
console.log(upgradedLaptop);

// ============================================
// 9
//  Problem: Exclude Property
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const account = { id: 1, username: 'alice123', password2: 'querty' };

//  🔹 Task

// Remove passord using rest

const { password2, ...safeAccount } = account;

console.log(safeAccount);
console.log(password);

// ============================================
// 10
//  Problem: Merge Objects
//  Date: 2025-08-18
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const a = { x: 1 };
const b = { y: 2 };

//  🔹 Task

// Merge a and b int c

const c = { ...a, ...b };
console.log(c);
