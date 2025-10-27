'use strict';
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?

// Test data for bonus:

// Data 1: [5, 2, 3]
// Data 2: [1,5,3,9,6,1]

// 1.1

// const poll = {
//   question: 'What is your favourite progamming language?',
//   options: ['0: JavaScripit', '1: Python', '2: Rust', '3:C++'],

//   //   This generates [0,0,0,0].More in the next section!

//   answers: new Array(4).fill(0),

//   regesterNewAnswer() {
//     const input = Number(
//       prompt(
//         `${this.question}\n${this.options[0]}\n ${this.options[1]}\n ${this.options[2]}\n ${this.options[3]}\n(write option number)  `
//       )
//     );

//     if (input === 0) {
//       console.log(`javaScript`);
//     } else if (input === 1) {
//       console.log(`Python`);
//     } else if (input === 2) {
//       console.log(`Rust`);
//     } else if (input === 3) {
//       console.log(`C++`);
//     } else {
//       console.log(`Wong answer`);
//     }

//     // 1.2
//     if (typeof input === 'number') {
//       this.answers[input]++;
//     }
//     this.displayResults();
//     this.displayResults('string');
//   },

//   // 3

//   displayResults(type) {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are
//         ${this.answers.join(' ')}`);
//     }
//   },
// };

// // 2

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.regesterNewAnswer.bind(poll));

// poll.regesterNewAnswer();

// poll.displayResults('string');

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// ============================================
// 1
//  Problem:Restaurant feedback system
//  Date: 2025-10-17
//  Language: JavaScript
//  Difficulty: Easy
// ============================================

// TODO
// 1  Create a method called collectFeedback inside restaurantFeedback
// it should:
// 1.1 Display a prompt like this:

// How would you rate your dining experice?
// 0: Excelent
// 1: Good
// 2:Average
// 3: Poor
// (write option number)

// 1.2 Validate the user's input
// make sure it's a number
// Make sure it's one of the valid options(0-3)
// if valid, increase the count in the feedback array at that index by 1
// if not valid, show an alert message:"Invalid choice. Please enter a number between 0 and 3"

// 2 Call collectFeedback ever time the user click a button with the id submitFeedback

// 3 Create another method called showResults, which takes one argument
// format that can be "array" or "sting"
// if "array", log the feedback array directly (default behavior)
// if "string", log a format string like

// Feedback result are 10, 4,2,1

// 4 Call showResult automatically at the end of colectFeedback to display the update results each time  a user shubits feedback

// 5 Bonus Challenge Use the showResults method with test data (not inside the object) for these arrays

// const testData1 = [3,5,2]
// const testData2 = [7,1,4,9,2]

// Call restaurantFeedback.showResults.call({feedbacks: testData1}, "array")and
// restaurantFeedback.showResuts.call({feedbacks: testData2}, "string")

const restaurantFeedback = {
  question: 'How would you rate your dining experiece?',
  options: ['0: Excelent', '1:Good', '2: Average', '3:Poor'],
  feedback: new Array(4).fill(0),

  collectFeedback() {
    const number = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    if (
      Number.isInteger(number) &&
      number >= 0 &&
      number < this.feedback.length
    ) {
      this.feedback[number]++;
      console.log('Thank you for your feedback!');
      this.showResults('string');
    } else {
      alert('Invalid choice. Please enter a number between 0 and 3.');
    }
  },

  showResults(format = 'array') {
    if (format == 'array') {
      console.log(this.feedback);
    } else if (format == 'string')
      console.log(`Feed back results are ${this.feedback.join(', ')}`);
  },
};

restaurantFeedback.collectFeedback();
restaurantFeedback.showResults();

const testData1 = [3, 5, 2];
const testData2 = [7, 1, 4, 9, 2];

restaurantFeedback.showResults.call({ feedback: testData1 }, 'array');
restaurantFeedback.showResults.call({ feedback: testData2 }, 'string');
