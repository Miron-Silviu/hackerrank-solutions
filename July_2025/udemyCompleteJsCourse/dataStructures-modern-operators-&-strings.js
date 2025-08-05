'use strict';

// Data Structures Modern Operators And Strings

// 1. Destructure the first and second values into variables a and b:
const fruits = ['apple', 'banana', 'cherry'];

const [a, b] = fruits;
console.log(a, b);

// 2. Destructure the first three numbers into variables x, y, z:
const nums = [1, 2, 3, 4, 5];

const [x, y, z] = nums;
console.log(x, y, z);

// 3. Destructure the first color into a variable 'firstColor':
const colors = ['red', 'green', 'blue'];

const [firstColor] = colors;
console.log(firstColor);

// 4. Use array destructuring to assign the values into variables p and q:
const values = [true, false];

const [p, q] = values;
console.log(p, q);

// 5. Destructure this array so that you get the third item into a variable 'third':
const animals = ['dog', 'cat', 'lion', 'elephant'];

const [, , third] = animals;
console.log(third);

// 6. Destructure only the second item into a variable 'secondItem':
const things = ['one', 'two', 'three'];

const [, second] = things;
console.log(second);

// 7. Use array destructuring with the rest operator (...) to get 'first' and 'others':
const items = ['first', 'second', 'third', 'fourth'];

const [first, ...others] = items;
console.log(first, others);

// Continue

// 1. Destructure the first and last names into separate variables:
const fullName = ['John', 'Doe'];

const [name, familiName] = fullName;
console.log(name, familiName);

// 2. Destructure the first three elements into a, b, and c:
const letters = ['f', 'o', 'c', 'd', 'e'];

const [f, o, c] = letters;
console.log(f, o, c);

// 3. Destructure the first item into 'firstAnimal' and ignore the rest:
const zoo = ['zebra', 'monkey', 'giraffe'];

const [firstAnimal] = zoo;
console.log(firstAnimal);

// 4. Destructure the second and third numbers into 'second' and 'third':
const numbers = [10, 20, 30, 40];

const [, seconds, thirds] = numbers;
console.log(seconds, thirds);

// 5. Destructure the array so that 'head' gets the first item and 'tail' gets the rest:
const tools = ['hammer', 'screwdriver', 'wrench', 'drill'];

const [head, , , tail] = tools;
console.log(head, tail);

// 6. Destructure the values into variables x, y and use '_' to skip the middle value:
const data = [1, 99, 2];

const [g, , h] = data;
console.log(x, y);

// 7. Destructure to get the last item using length - 1:
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const lastDay = days[days.length - 1];
console.log(lastDay);
// ============================================
//  Problem: Coding Challenge #1
//  Date: 2025-07-17
//  Language: JavaScript
//  Difficulty: Data Structures, Modern Operators and Strings
// ============================================

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.

// Data

const game = {
  team1: 'Real Madrid',
  team2: 'Barcelona',
  players: [
    [
      'Courtois',
      'Carvajal',
      'Militao',
      'Alaba',
      'Mendy',
      'Modric',
      'Kroos',
      'Valverde',
      'Vinicius',
      'Rodrygo',
      'Benzema',
    ],
    [
      'Ter Stegen',
      'Araujo',
      'Kounde',
      'Christensen',
      'Balde',
      'Pedri',
      'De Jong',
      'Gavi',
      'Raphinha',
      'Lewandowski',
      'Ferran',
    ],
  ],
  score: '2:1',
  scored: ['Benzema', 'Vinicius', 'Lewandowski'],
  date: 'Oct 1st, 2025',
  odds: {
    team1: 1.75,
    draw: 3.25,
    team2: 2.1,
  },
};

// 🔹 Task:

// 1. Create one array for each team’s players (players1, players2).

const [player1, players2] = game.players;
// console.log(player1, players2);

// 2. From players1, extract the goalkeeper (gk) and the array of field players (fieldPlayers1).

const [gk, ...fieldPlayers] = player1;

// console.log(gk, fieldPlayers);

// 3. Create an array allPlayers containing all players from both teams.

const allPlayers = [...player1, ...players2];
// console.log(allPlayers);
// 4. Real Madrid used 2 substitutes during the game: 'Camavinga' and 'Joselu'. Create a new array players1Final with all the original team1 players plus these two.

const players1Final = [...player1, 'Camavinga', 'Joselu'];
// console.log(players1Final);
// 5. Destructure the odds from game.odds into three variables: team1, draw, and team2.
const {
  odds: { team1, draw, team2 },
} = game;

// console.log(team1, draw, team2);
// 6. Write a function printGoals(...players) that prints the number of goals and who scored them.

const printGoals = function (...players) {
  // console.log(players);
};
printGoals(...game.scored);
// 7. Log to the console which team is more likely to win without using if/else or ternary operators.
// console.log(team1 < team2 && `Team 1 winn`);
