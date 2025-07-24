'use strict';

// JavaScript Fundamentals – Part 1

// ============================================
//  Problem: Coding Challenge #1
//  Date: 2025-07-15
//  Language: JavaScript
//  Difficulty: Fundamental Part 1
// ============================================
//
//  🔹 Task:

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

const markMass = 68;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBMI);

// ============================================
//  Problem: Coding Challenge #2
//  Date: 2025-07-15
//  Language: JavaScript
//  Difficulty: Fundamental Part 1
// ============================================

// 🔹 Task:

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

if (markBmi > johnBmi) {
  console.log(`Mark's ${markBmi} BMI is higher than Jon's`);
} else {
  console.log(`Jon's ${johnBmi} BMI is higher than Mark's`);
}

// ============================================
//  Problem: Coding Challenge #3
//  Date: 2025-07-15
//  Language: JavaScript
//  Difficulty: Fundamental Part 1
// ============================================

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// 🔹 Task:

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

const dolphinAverage = (96 + 108 + 89) / 3;

const koalasAverage = (88 + 91 + 110) / 3;

console.log(
  `Dolphins average score is ${dolphinAverage}
  and koalas average score is
   ${koalasAverage}`
);

if (dolphinAverage > koalasAverage) {
  console.log(`The winner  is dolphins 🥇 with ${dolphinAverage} points `);
} else {
  console.log(`The winner is koalas 🥇 with ${koalasAverage} points`);
}

// Bonus 1

const score = 100;

const bonusOneDolphinAverage = (97 + 112 + 101) / 3;
const bonusOneKoalasAverage = (109 + 95 + 123) / 3;

if (bonusOneDolphinAverage > score) {
  console.log(
    `Bonus dolphis score is the winner 🥇 with ${bonusOneDolphinAverage}`
  );
} else if (bonusOneKoalasAverage > score) {
  console.log(
    `Bonus koalas score it the winner 🥇 with ${bonusOneKoalasAverage}`
  );
} else {
  console.log(`No winner`);
}

// Bonus 2

const bonusTwoDolphinAverage = (97 + 112 + 101) / 3;
const bonusTwoKoalasAverage = (109 + 95 + 106) / 3;

if (
  bonusTwoDolphinAverage === bonusOneDolphinAverage &&
  bonusTwoDolphinAverage >= score &&
  bonusTwoKoalasAverage >= score
) {
  console.log(`Is a draw`);
} else {
  console.log(`No team wins the trophy`);
}

// ============================================
//  Problem: Coding Challenge #4
//  Date: 2025-07-15
//  Language: JavaScript
//  Difficulty: Fundamental Part 1
// ============================================

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// 🔹 Task:

// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

// if (bill >= 50 && bill <= 300) {
//   console.log(
//     `The bill was ${bill}, the tip was ${tip} and the total value was ${
//       bill + tip
//     } `
//   );
// } else if (bill != 300 && bill != 50) {
//   console.log(
//     `The bill was ${bill}, the tip was ${tip} and the total value was ${
//       bill + tip
//     } `
//   );
// } else {
//   console.log(`No tip and bill`);
// }

const bill = 40;
const tip = 0.2 * bill;

const tipCalculaor =
  bill >= 50 && bill <= 300
    ? console.log(
        `The bill was ${bill}, the tip was ${tip} and the total value was ${
          bill + tip
        } `
      )
    : console.log(
        `The bill was ${bill}, the tip was ${tip} and the total value was ${
          bill + tip
        } `
      );

// JavaScript Fundamentals – Part 2
