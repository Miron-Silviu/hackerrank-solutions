'use stict';

// ============================================
// 1
//  Problem: Destructuring Arrays
//  Date: 2025-08-21
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 1.1

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
// TODO  Destructure the books arrays into two variables called firstBook ans secondBook

const [firstBook, secondBook] = books;

console.log(`***********1.1**********************`);
console.log(+firstBook, secondBook);
// 1.2

// TODO Destructure the books array into a varibale called thirdBook. You must skip the first two books

const [, , thirdBook] = books;

console.log(`****************1.2******************`);
console.log(thirdBook);

// 1.3

// TODO  Below the neste ratings array that contains two other arrays. Destructure the nested rating arrays into two variables called rating and ratingsCourt. In the result of your destructuring, the ratings variables should store a numbre 4.19 and the ratingsCount variabls should store a number 144584

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;

console.log(`*************************1.3******************`);
console.log(rating, ratingsCount);

// 1.4 Below the ratingsStars array. Destrucure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0

const ratingsStars = [6340, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingsStars;

console.log(`*************************1.4******************`);
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// ============================================
// 2
//  Problem: Destructuring Objects
//  Date: 2025-08-21
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 2.1 Destructure the fist book object from the books arrays into variables called title, author ans ISBN

const { title, author, ISBN } = books[0];

console.log(`*************************2.1******************`);
console.log(title, author, ISBN);

// 2.2 Each book object has the kyword property. Destructure the first book object from the books array into variable called tags. The tags variables should be assigned with the value of the keywords property.

const { keywords: tags } = books[0];
console.log(`*************************2.2******************`);
console.log(tags);

// 2.3 The seventh book from the books arrays is missing the progammingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variables with a default valut of "unknow"

const { language, programmingLanguage = 'Unknown' } = books[6];

console.log(`*************************2.3******************`);
console.log(language, programmingLanguage);

// 2.4
// Below are two variables called bookTitle and bookAuthor.Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknow';

({ bookTitle = title, bookAuthor = author } = bookAuthor[0]);

console.log(`*************************2.4******************`);
console.log(bookTitle, bookAuthor);
// 2.5 Each book object ahs a deeply nested rating property as ilustred below

// TODO Destructure the first book object from the boos array int a variahle called bookRating. In the result or your destructureing, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads. reating property.

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(`*************************2.5******************`);

// 2.6 Write a function called printBookInfo that has three parameteres called title, author, and year.This function should work for a single object passed as an argument, and it should log to the console information about the book in this format.:"${title}by ${author},${year}"

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}
console.log(`*************************2.6******************`);
// ============================================
// 3
//  Problem: The Spreas Oprator
//  Date: 2025-08-21
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 3.1 Each book object has the author property, whith stores an array of strings (author names) if there are multiple authors, or a single string(author name) if there is jus tone author.

// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The booksAuthors array should have just one level (no nested array)

const bookAuthors = [...books[0].author, ...books[1].author];

console.log(bookAuthor);
console.log(`*************************3.1******************`);
// 3.2  Write  a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separtad by a space.

console.log(`*************************3.2******************`);
spellWord = function (str) {
  console.log(...str);
};

spellWord('JavaScript');
// ============================================
// 4
//  Problem: Rest Pattern and Parameters
//  Date: 2025-08-21
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 4.1 Destructure the keywords property(array) of the first book from the books array into variables called mainKyword and rest. The fist keyword should be assigned to mainKeyword, and the rest of the keyword should be assigned to the rest variable (it should be an array)

const [mainKeyword, ...rest] = books[0].keywords;

console.log(`*************************4.1******************`);
console.log(mainKeyword, rest);

// 4.2 Destructure the second book from the books array int a variable called bookPublisher. The bookPublisher varibale should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const [publisher = bookPublisher, ...restOfTheBook] = books[1].keywords;

console.log(`*************************4.2******************`);
console.log(publisher);

// 4.3 Write a function called printBookAuthorsCour that has two partametest called titie and authors.The authors parameter sould accespt any number or arguments. THis funtion should log to the conscole a string formated like that:"The book " ${title}" has ${authors.length} authors.

function printBookAuthorsCount(title, ...authors) {
  console.log(`
  The book " ${title}" has ${authors.length} authors`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
// ============================================
// 5
//  Problem: Short Circuiting (&& and ||)
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 5.1 Some of the book objects have the programmingLanguage property, which specifies what programming languaage us used in the book

// Write a function called hasExmaplesInJava that takes a book object fro the books arrays as an argument.This function should return true if book uses Java, or a string'no data available' if it uses other language or no programming laanguage at all.

function hasExamplesInJava(books) {
  return books.programmingLanguage === 'JAVA' || 'no data available ';
}
console.log(`*************************5.1******************`);
console.log(hasExamplesInJava(books[0]));

// 5.2 Some of the book object have the onlineContent provertry, which is eithre trye or false. Loop over the  books array and for the books that provide online content,log to the console a string in this format. "${title}" provide online content. Use shor-circuting.

console.log(`*************************5.2******************`);
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}

// ============================================
// 6
//  Problem: The Nullish Coalescing Operator (??)
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 6.1 There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format :"${title}" provide no data about its online content.

console.log(`*************************6.1******************`);
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`"${books[i].title}" provide no data about its online content`);
}

// ============================================
// 7
//  Problem: Logical Assignments Operators
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 7.1 Some of the book objects from the books arrays are missing the edition property. Loop over the books, and assign this property with a number 1 (if it doesn't already exist).Use logical assignment operators.

console.log(`*************************7.1******************`);
for (let i = 0; i < books.length; i++) {
  console.log((books[i].edition ||= 1));
}

// 7.2 Some of the book objects from the books array have the highlighted property, wich by default is set to true. Iteate over the books array, and if the thirdParty.goodreads.rating property is less tha 4.2 reassign it with false.

console.log(`*************************7.2******************`);
for (let i = 0; i < books.length; i++) {
  console.log(
    (books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2))
  );
}

// ============================================
// 7
//  Problem: For of loop
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 8.1 Use the for-of loop to loop over the books arrays and sum the pages of all books. Use the pageSum variable below, and the pages propeerty of the book object

console.log(`*************************8.1******************`);

let pageSum = 0;
for (let book of books) {
  console.log((pageSum += book.pages));
}

// 8.2 Bellow is the all Authors varibales which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array

console.log(`*************************8.2******************`);

const allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}

console.log(allAuthors);

console.log(`*************************8.3******************`);

// 8.3 Use the for-of loop together with Array's entries() methord to log each author from allAuthors to the console together with its index. Make the index start from 1 insted of 0

for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}

// ============================================
// 8
//  Problem: Sum of Array
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//  TODO use a for of loop to calculate the sum of all numbers in the array

let numbers = [2, 4, 6, 8, 10];

let sum = 0;
for (let total of numbers) {
  sum += total;
}
console.log(sum);

// ============================================
// 8
//  Problem: Count Vowels
//  Date: 2025-08-22
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO Write a program that counts how many vowels are in the string "Hello World"

// const str = 'Hello World';

// let vowelsCount = 0;
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// for (const string of str) {
//   console.log(string.split(''));
//   if (vowels.includes(string)) {
//     vowels++;
//   }
// }

// console.log(vowels);

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount('Hello World'));

// ASSIGNMENT
// Enhanced object literals
// ============================================
//
//  Problem: Enhanced Object literals:
//  Date: 2025-08-26
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

//9.1

// Below the boodData array that contains other arrays.Each inner array considts of the property name (first element), and the value(second element).For example, in ["title","Computer Netwoking: A Top-Down Approch"],'title' is the property name, 'Computer Networking: A Top-Down Approch'is mean to be the value assigned to that property name.

// Using computed properies, file the newBook object with the propoerties and values from the bookData array. The first one is done alreaday.

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);
// 9.2

// Below is the pags variables. Add it as property of the newBook2 object .Use the shorter way.

const pages = 800;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kerighan', 'Denis M. Rithche'],
  pages,
};

console.log(newBook2);

// ASSIGNMENT OPTIONAL CHAINING

// ============================================
//
//  Problem: Optional chaining:
//  Date: 2025-08-27
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 10.1

// TODO Wrtite a function called getFirstKeyword that takes the book object as an agument . This function shourld return the first keywrd from the book;s keyword property(arrya) or undefined (if they keyword property doesn't exits). It shouldn't throw an error. Use optional chaining for that.

// function getFirstKeyword(book) {
//   return book.keywords?.[0];
// }
// console.log(getFirstKeyword(books[0]));

// ///////////////////////////////////////////////////////////////////
// ASSIGNMENT lOOPING Objects: Object keys, Values and Entries

// Below is the entries variables that stores an smplty array. Use the for-of loop together with the Object. keys() method to loop over the thirdParty. goodreads property(array) of the first book object from the  book array. For each key, push a new array tath contains they key to the entries array.

// In the end, the entries arrays should be filled with array containing keys:

// 11.1
console.log(`*********************************11.1***********************`);

// [
//   ['rating'],
//   ['ratingCount'],
//   ['reviewsCount'],
//   ['fiveStarRatingCount'],
//   ['oneStarRatingCount'],
// ];

const entries = [];

for (const party of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([party]);
}

console.log(entries);

// 11.2 The Object.values() method returns an array, whch means you can call the Array's entries() method on it, for example,
// Object.entries(book[0].thirdParty.goodreads).entries().The Array's entries() method returns [index, value] arrays for each element in the array.

// Use the for-of loop together with the Object. values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

// Push each value to the appropiat inner arrray in the entries array(use inded from entries())

console.log(`*********************************11.2***********************`);

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
  console.log(index, value);
}

console.log(`*********************************11.3***********************`);

// 11.3 Use Object.entries() method on the thirdParty.goodreads property of the first book from books arrays. Assign the return value to the varibale called entries 2

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries);

console.log(`*********************************11.3***********************`);
console.log(entries, entries2);
