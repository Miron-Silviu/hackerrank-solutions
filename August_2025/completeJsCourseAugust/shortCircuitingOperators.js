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

let profileUser = {
  profile: {
    name: 'Eve',
    age: 0,
  },
};

//  🔹 Task

// Write an expression that prints the profileUserr's age if it exitsts,
// Otherwise "Unknow Age".

console.log(profileUser.profile.age ?? 'Unknown Age');

// Write and expression  that only prints the name if profile exists

console.log(profileUser.profile && profileUser.profile.name);

// Write an expression that gets profileUserrname or defaults to "Guest"

let profileUsername = profileUser.profile?.name || 'Guest';
console.log(profileUsername);

// ============================================
// 5
//  Problem: Nested Objects:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const settings = {
  theme: null,
  notificatoins: {
    email: false,
    sms: true,
  },
};

console.log(`**************5*****************`);
//  🔹 Task
// 1. Print the theme if it exists, otherwise "light"
console.log(settings.theme && 'light');

// 2. Print "Email enabled" only if email notifications are true
console.log(settings.notificatoins.email || 'Email enabled');

// 3. Print "SMS enabled" only if sms notifications exist and are true
console.log(settings.notificatoins.sms && 'SMS enabled');

// ============================================
// 6
//  Problem: User login:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const user = {
  name: '',
  role: null,
  perferecens: {
    language: 'en',
  },
};

console.log(`************** 6 *****************`);
//  🔹 Task

// 1. Print the username or "Guest" if it’s empty
console.log(user.name || 'Guest');

// 2. Print the role or "Member" if role is null or undefined
console.log(user.role ?? 'Member');

// 3. Print the preferred language or "fr" if it doesn’t exist
console.log(user.language ?? 'fr');

// 4. Print "Admin access" only if role exists and equals "Admin"

console.log(user.role && 'Admin access');

// ============================================
// 7
//  Problem: Combining Operators:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const input = {
  value: 0,
  extra: null,
};

console.log(`************** 7 *****************`);
//  🔹 Task

// 1. Print input.value if it’s not null or undefined, otherwise 42
console.log(input.value && 42);

// 2. Print input.extra if truthy, otherwise "No extra"
console.log(input.extra || 'No extra');

// 3. Print "Valid input" only if input.value exists and is truthy
console.log(input.value && 'Valid input');

// 4. Print input.extra, or input.value, or 100 — whichever exists first

console.log(input.extra ?? input.value ?? 100);

// ============================================
// 8
//  Problem: Shopping Cart:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const cart = {
  items: [],
  coupon: null,
};

console.log(`************** 8 *****************`);
//  🔹 Task

// 1. Print the first item in the cart, or "Cart empty" if none
console.log(cart.items || 'Cart empty');

// 2. Print a discount message only if a coupon exists
console.log(cart.coupon && 'Discount');

// 3. Print coupon code or "No coupon" if it doesn’t exist
console.log(cart.coupon ?? 'No Coupon ');

// 4. Print "Checkout allowed" only if there are items in the cart
console.log(cart.items.length && 'Checkout allowed');

// ============================================
// 9
//  Problem: Shopping Cart:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const profile = {
  name: 'Alice',
  contact: {
    phone: null,
    email: 'alice@example.com',
  },
};

console.log(`************** 9 *****************`);
//  🔹 Task

// 1. Print the phone number, or "No phone" if it doesn’t exist
console.log(profile.contact.phone || 'No phone');

// 2. Print "Email exists" only if email is truthy
console.log(profile.contact.email && 'Email exists');

// 3. Print "Age unknown" if profile.age is missing or falsy
console.log(profile.age ?? 'Age unknown');

// 4. Print "Profile complete" only if both name and email exist
console.log(profile.contact && 'Profile complete');

// ============================================
// 10
//  Problem: API Response:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const response = {
  data: {
    user: null,
    settings: {
      notificatoins: true,
    },
  },
};

console.log(`************** 10 *****************`);
//  🔹 Task

// 1. Print the user name, or "Unknown User" if it doesn’t exist
console.log(response.data.user || 'Unknon User');

// 2. Print "Notifications ON" only if notifications exist and are true
console.log(response.data.settings.notificatoins && 'Notification ON');

// 3. Print "User exists" only if data.user exists
console.log(response.data.user && 'user exists');

// ============================================
// 11
//  Problem: Form Inputs:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const form = {
  email: '',
  phone: '1234567890',
  newletter: null,
};

console.log(`************** 11 *****************`);
//  🔹 Task

// 1. Print the email or "No Email" if empty
console.log(form.email || 'No email');

// 2. Print phone only if it exists
console.log(form.phone && form.phone);

// 3. Print newsletter preference or "No preference" if null or undefined
console.log(form.newletter || 'No preference');

// 4. Print "Contact info provided" only if either email or phone exists

console.log(form.email.phone || 'Contact info');

// ============================================
// 12
//  Problem: Shopping Cart Extension:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const cart2 = {
  items: [null, 'items'],
  cupon: 'DISCOUNT10',
  delivery: undefined,
};

console.log(`************** 12 *****************`);
//  🔹 Task

// 1. Print the first item, or "No items" if it’s null/undefined
console.log(cart2.items[0] ?? 'No items');

// 2. Print coupon code or "No coupon"
console.log(cart2.cupon || 'No coupon');

// 3. Print delivery option or "Standard delivery" using nullish coalescing
console.log(cart2.delivery ?? 'Standard delivery');

// 4. Print "Ready to checkout" only if there are items and coupon exists

console.log(cart2.items.length || 'Reade to checkout');

// ============================================
// 13
//  Problem: Nested Optional Chaining:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const account = {
  profile: {
    name: 'Bob',
    address: {
      city: null,
      country: 'USA',
    },
  },
};

console.log(`************** 13 *****************`);
//  🔹 Task

// 1. Print city or "Unknown city
console.log(account.profile.address.city ?? 'Unknon City');

// 2. Print country only if it exists
console.log(account.profile.address.country && account.profile.address.country);

// 3. Print "Profile complete" only if both name and country exist
console.log(
  account.profile.name && account.profile.address.country && 'Profile complete'
);
// 4. Print "City and country known" only if both city and country exist

console.log(
  account.profile.address.city &&
    account.profile.address.country &&
    'City and country known'
);

// ============================================
// 14
//  Problem: Mixed Values:
//  Date: 2025-08-19
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

const values = {
  a: 0,
  b: '',
  c: null,
  d: false,
  e: 'Hello',
};

console.log(`************** 14 *****************`);
//  🔹 Task

// 1. Print `a` or 100 using nullish coalescing
console.log(values.a ?? 100);

// 2. Print `b` or "Default" using OR
console.log(values.b || 'Default');

// 3. Print "Value exists" only if `c` is truthy
console.log(values.c && 'Value exists');

// 4. Print "Valid" only if `d` AND `e` are truthy
console.log(values.d && values.e && 'Valid Only');

// 5. Print first non-nullish value among `c`, `a`, `b`, `e`
console.log(values.a ?? values.b ?? values.c ?? values.d ?? values.e);
