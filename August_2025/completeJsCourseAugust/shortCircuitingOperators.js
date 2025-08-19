'use strict';

// Starting DAY
// ============================================
// 1
//  Problem: Predict the output before runnig:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log('A' && 'B');
console.log('A' && '');
console.log(0 && 'Hello');
console.log(42 && 'JS Rocks!');

//  🔹 Task

// Write a function that only greets if name exists

function greet(name) {
  return name && `Hello, ${name}`;
}

console.log(greet('Alice'));
console.log(greet(''));

// Why does "A" && "B" return "B" :Because both value are true so the operand eveluate the second value and return it

// Why does 0 and "Hello" return 0: Because the && operand return falsy value.

// ============================================
// 2
//  Problem: || or short-circuting:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log('************* ||************');

console.log('A' || 'B');
console.log('' || 'Fallback');
console.log(0 || 100);
console.log(false || true);

function getUssername(userInput) {
  return userInput || 'Anonymous';
}

console.log(getUssername('Bob'));
console.log(getUssername(''));

// Why does "" || "Fallback" return "Fallback" : Because the || operator return the true value

// When would || not be a good replacement for a default value? : When both value are false

// ============================================
// 3
//  Problem: ?? Nulish Coalescing:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`************** ?? Nulish operators********`);

console.log(null ?? 'Default');
console.log(undefined ?? 'Default');
console.log(0 ?? 'Fallback');

// Function that safely sets a config value

function getConfig(option) {
  return option ?? 'Standard';
}

console.log(getConfig(null));
console.log(getConfig(0));

// How is ?? different from || when the value is 0 or""? The differece between ?? || is that the ?? operator evalute the value o nul, meaning that

// Why might ?? be safer for defaults than || : Because evalute true when the value is true and false when the valus is false

// ============================================
// 4
//  Problem: Mix Them Together:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********Problem*********`);

let user = {
  profile: {
    name: 'Eve',
    age: 0,
  },
};

//  🔹 Task

// Write an expression that prints the user's age if it exitsts,
// Otherwise "Unknow Age".

console.log(user.profile.age ?? 'Unknown Age');

// Write and expression  that only prints the name if profile exists

console.log(user.profile && user.profile.name);

// Write an expression that gets username or defaults to "Guest"

let username = user.profile?.name || 'Guest';
console.log(username);

// ============================================
// 5
//  Problem: Mix Them Together:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
