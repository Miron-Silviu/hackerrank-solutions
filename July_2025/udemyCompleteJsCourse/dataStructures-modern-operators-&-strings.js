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

// 🔹 Task:

// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// 1

const [player1, players] = game.players;
console.log(player1, players);

// 2

const [[gk1, ...fieldPlayers1], [gk2, ...fieldPlayers2]] = game.players;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

// 3
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// 4

const [players1Final] = game.players;
players1Final.push('Thiago', 'Coutinho', 'Persic');
console.log(players1Final);

// 5

const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);
