 dogs.forEach((num, age) => {
    num >= 3
      ? console.log(`Dog number ${age + 1} is an adult and is ${num} years old`)
      : console.log(`Dog number ${num} is still a puppuy 🐶`);
  });