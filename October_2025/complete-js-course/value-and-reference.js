'use strict';

// ============================================
//
//  Problem: Passing primtives (by values)
//  Date: 2025-10-07
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// 1 Predict what prints inside and outside the function .
// 1 Explain why num outside the funcntion did not change.

console.log(`*********************** 1 *************`);

function changeNumber(x) {
  x = x + 10;

  console.log('Inside function:', x);
}

let num = 5;
changeNumber(num);
console.log('Outside function:', num);

//  The number outside did not changed, because is primitve

// ============================================
//2
//  Problem: Passing objects (by reference)
//  Date: 2025-10-07
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`************************** 2 ********************`);

function addProperty(obj) {
  obj.newProp = 'Hello';
  console.log('Inside function:', obj);
}

const myObj = { name: 'Alice' };
addProperty(myObj);
console.log(`Outside function:`, myObj);

// TODO
// 1 Predict the outputs
// 2 Why does myObj outside the function also have new Prop?

// The object outside the function has new prop is because is passed by referece

// ============================================
// 3
//  Problem: Reassigning objects indide functions
//  Date: 2025-10-07
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********************** 3 ***********************`);
function reassignObject(obj) {
  obj = { name: 'Bob' };
  console.log('Inside function', obj);
}

const originalObj = { name: 'Alice' };
reassignObject(originalObj);
console.log('Outside function: ', originalObj);

// TODO Predict what prints inside and outside

// 2 WHy did't the original object change this time?

// The original object did not changed this time is because is reasigned

// ============================================
// 4
//  Problem: Nested Objects
//  Date: 2025-10-07
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********************** 4 ***********************`);

function modifyNested(obj) {
  obj.inner.value = 100;
  console.log('Inside function:', obj);
}

const nestedObj = { inner: { value: 10 } };
modifyNested(nestedObj);
console.log(`Outside function:`, nestedObj);

// TODO

// 1 Predict the output
// The output is 100

//  2 Explain why the inner. value changed outside the function even thougth the outer object wasn't reassigned.

// The inner value changed outside the functions is because nestedObj referece the same nested object, so change propagate.

// ============================================
// 5
//  Problem: Copying objects inside functions
//  Date: 2025-10-07
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********************** 5 ***********************`);
function safeModify(obj) {
  const newObj = { ...obj };
  newObj.newProp = 'Safe';
  console.log('Inside function:', newObj);
  return newObj;
}

const user = { name: 'Alice' };
const updateUser = safeModify(user);

console.log(`Original :`, user);
console.log(`Updated:`, updateUser);

// ============================================
// 6
//  Problem: testing each concept
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********************** 6 ***********************`);

function myFunction(param) {
  param.username = 'Brian';
  console.log(`Inside Function:`, param);
}

const data = { name: 'Bob' };
myFunction(data);

console.log(`Outside Function :`, data);

// TODO Predint the output

// ============================================
// 7
//  Problem: testing each concept
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********************** 7 ***********************`);
const testing = function (par) {
  par = { name: 'Alan', age: 30 };
  console.log(`Inside Function:`, par);
};

const newData = { name: 'Alice', age: 35 };
testing(newData);
console.log(`Outside Function:`, newData);

// ============================================
// 8
//  Problem: nested concept
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********************** 8 ***********************`);
const nestedProperty = function (param) {
  param.obj = { name: 'Username' };
  console.log(`Inside Function:`, param);
};

const nested = { inside: { name: 'name' } };

nestedProperty(nested);
console.log(`Outside Function:`, nested);

// ============================================
// 9
//  Problem: copying object inside function
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

console.log(`********************** 9 ***********************`);

const copyingOBject = function (param) {
  const copying = { ...param };
  console.log(`Inside Function:`, copying);
};

const username = { firstName: 'Alan', secondName: 'Turning' };
copyingOBject(username);
console.log(`Outside Function:`, username);

// ============================================
// 10
//  Problem: base
//  Date: 2025-10-08
//  Language: JavaScript
//  Difficulty: Easy
// ============================================
console.log(`********************** 9 ***********************`);
function testFunc(param) {
  param = { changed: true };
  console.log(`Inside Function`, param);
}

const data2 = { pesonalNumber: 10 };
testFunc(data2);
console.log(`Outside Function:`, data2);

console.log(`********************** 10 ***********************`);

const testingAll = function (param) {
  param.number = true;
  console.log(`Mutate `, param);

  param = { changed: true };

  console.log(`Reasign:`, param);

  const copy = { ...param };
  copy.changed = true;
  console.log(`Copy`, copy);
};

const testingObj = { 'lucky number': 10 };
testingAll(testingObj);
console.log(`Outside Function:`, testingObj);
