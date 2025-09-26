'use strict';

// CHALLENGE
// ============================================
// 1
//  Problem: Map Iteration
//  Date: 2025-08-03
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL
// GOOD LUCK 😀

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// console.log(`******************** 1 *********************`);
// const events = [`Unique game eventis`, ...new Set(gameEvents)];
// console.log(events);

// 2
// console.log(`******************** 2 *********************`);

// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// console.log(`******************** 3 *********************`);

// const numerOfEvnts = gameEvents.size;
// const averageMinutes = 90 / numerOfEvnts;
// console.log(averageMinutes);

// console.log(`An event happend, on average, every ${averageMinutes} minutes`);

// // 4
// console.log(`******************** 4 *********************`);

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`${half} ${min} : ${event}`);
// }

// ============================================
// 2
//  Problem: Map Iteration
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
