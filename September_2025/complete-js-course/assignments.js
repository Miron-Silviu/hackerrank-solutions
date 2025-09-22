'use strict';

// ASSIGNMENT
// ============================================
// 1
//  Problem: Map fundamentals
//  Date: 2025-08-03
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

// 13.1 Create a new book, but this time,as a Map. Assign it to the bookMap variable. Use this array as initial data:

// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);

// console.log(bookMap);

// 13.2  Set a new key in bookMap called page, and assign it with a number 464

// bookMap.set('pages', 464);
// console.log(bookMap);

// 13.4 Get the size of bookMap, and log it to the console

// console.log(bookMap.size);

// 13.5 Check if bookMap has the author key. and if so, log "The author of the book is known " to the console

// console.log(
//   bookMap.has('author') ? 'The author of the book is known ' : 'No author'
// );

// ASSIGNMENT
// ============================================
// 2
//  Problem: Map Iteration
//  Date: 2025-08-03
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 14.1 Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

// const fistBookMap = new Map(Object.entries(books[0]));
// console.log(fistBookMap);

// 14.1 Use the for-of loop to iterate over fisrtBookMap, and log to the console keys that have numbers as values.

// for (const [key, value] of fistBookMap) {
//   if (typeof value === 'number') console.log(key);
// }

// ASSIGNMENT
// ============================================
// 3
//  Problem: Working with Strings-Part 1
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 15.1
// Take the ISBN properyt of the first book from the books array, and log to the console characteres at index 6,4,9 and 8. Use bracket notation to access individual characters

console.log(books[0].ISBN[6]);
console.log(books[0].ISBN[4]);
console.log(books[0].ISBN[9]);
console.log(books[0].ISBN[8]);

// 15.2

// Below is the quote variable that stores a sting. Find the index of the word "chess", and log it to the console.

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

// 15.3 Extract the word"boxing" from the same quote string, and log it to the console.

console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 15.4 Some authors are noted as "(Contributor)", for example "Julie Sussan (Contributor) " .Create a function called isContributor that takes an author's name as an agurment, and returns either true (if he's contributor) or false (if he's not a contributor). The sting "Contributor" is alwaysthe last part of the author's name stirng

function isContributor(name) {
  const tag = name.slice(name.lastIndexOf('('));
  return tag === '(Contributor)';
}
console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Harold Abelson'));

// ASSIGNMENT
// ============================================
// 3
//  Problem: Working with Strings -Part 2
//  Date: 2025-08-11
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// 16.1 Write a function called normalizeAuthorName that takes an author's name(string) as an argument, and return the same string, but the first name and the last name are capitalized,and the "(Contributor)" part is removed(if exists)

// You can be sure that the author name always consists ot two words separtated b a space and possibly ends with"(Contributor)". The string may also contain trailing spaces

const normalizAuthorName = function (name) {
  const tolowercase = name.toLowerCase().split(' ');
  const [first, second] = tolowercase;
  const firstuppercase = first.charAt([0]).toUpperCase() + first.slice(1);
  const seconstUpper = second.charAt(0).toUpperCase() + second.slice(1);
  return `${firstuppercase} ${seconstUpper}`;
};

console.log(normalizAuthorName('JuliE sussMan (Contributor)'));
console.log(normalizAuthorName('gefrine mcguire'));

// 16.2 Take the title of the second book(book[1]) from the boos array, and replace the word "Program" with " Software". Assign the new string to the newBookTitle variable

const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

console.log(`************************** 16.3************************`);

// 16.3 Write a function called logBookTheme that takes book's title (sting), and logs to the console " This book is about computers" if the title starts with the word "Computers"

// "This book is about algorithms and data structures" if the title includes both the "algorithma " and "structures"words,

// and "THis book is about som systems, but definitely not about operating systems" if the title ends with word "system" or "systems", but doesn't include the word "operating"

const logBookTHeme = function (booksArray) {
  booksArray.forEach((book) => {
    const title = book.title;

    if (title.startsWith('Computer')) {
      console.log(`${title}:This book is about computers`);
    } else if (title.includes('algorithms') && title.includes('structures')) {
      console.log(
        ` ${title}: This book is about algorithms and data structures`
      );
    } else if (
      (title.endsWith('system') || title.endsWith('systems')) &&
      !title.includes('operating')
    ) {
      console.log(
        `${title}: This book is about some systems, but definitely not about operating systmes`
      );
    }
  });
};
logBookTHeme(books);

// ASSIGNMENT

// 17.1 Below is the bookCategory variable that stores a string of categories. Each category is separtated with a semicolon, for example, in a string"science; computing", "science" and 'computing' are separted categories.

// Write a function called logBookCategories that takes a string of categories separted with semicolons, and lgos each category to the console(as separte strings)

console.log(`************************** 17.1************************`);
const logBookCategories = function (string) {
  const categories = string.split(';');

  for (let category of categories) {
    console.log(category);
  }
};
console.log(
  logBookCategories(
    'science;computing;computer science;algorithms;business;operating systems;network'
  )
);

console.log(`************************** 17.2************************`);

// 17.2 Now, the opposite. Each book from the books arrays has the keywords property. Write a function called getKeywordsAsStrings that takes the books arrays as an arougmen, collects keywords from each book, removes duplicates, and joins them to create a single string where keywords are separated by a semicolon.

const getKeywordsAsStrings = function (books) {
  const unique = [...new Set(books)];
  return unique.join(' ');
};

console.log(
  getKeywordsAsStrings([
    'computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development',
  ])
);

// 17.3 Below is the bookChapters arrays that contains inner arrays. Each inner array consistes of chapter's titiel, and the number of a page, for example, in ['The Basics', 14], "The Basics's"is the chapter's title, and 14 is the number of a page.

// Write a function called logBookChapter that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number . The page number should be separted from the chapter's name with underscore(take a look at the example below)

console.log(`************************** 17.3************************`);
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
const logBookChapter = function (chapters) {
  for (const [chapter, pages] of chapters) {
    console.log(chapter.padEnd(20, '_') + '' + pages);
  }
};

console.log(logBookChapter(bookChapters));
