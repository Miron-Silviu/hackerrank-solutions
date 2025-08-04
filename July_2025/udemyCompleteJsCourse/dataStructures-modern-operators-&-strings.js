'use strict';

// Data Structures Modern Operators And Strings

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
console.log(player1, players2);

// 2. From players1, extract the goalkeeper (gk) and the array of field players (fieldPlayers1).

const [gk, ...fieldPlayers] = player1;

console.log(gk, fieldPlayers);

// 3. Create an array allPlayers containing all players from both teams.

const allPlayers = [...player1, ...players2];
console.log(allPlayers);
// 4. Real Madrid used 2 substitutes during the game: 'Camavinga' and 'Joselu'. Create a new array players1Final with all the original team1 players plus these two.

const players1Final = [...player1, 'Camavinga', 'Joselu'];
console.log(players1Final);
// 5. Destructure the odds from game.odds into three variables: team1, draw, and team2.
const {
  odds: { team1, draw, team2 },
} = game;

console.log(team1, draw, team2);
// 6. Write a function printGoals(...players) that prints the number of goals and who scored them.

const printGoals = function (...players) {
  console.log(players);
};
printGoals(...game.scored);
// 7. Log to the console which team is more likely to win without using if/else or ternary operators.
console.log(team1 < team2 && `Team 1 winn`);
