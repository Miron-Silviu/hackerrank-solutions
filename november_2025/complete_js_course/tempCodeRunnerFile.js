const stock = new Map([
  ['pens', 15],
  ['notebooks', 8],
  ['earsers', 4],
]);

stock.forEach(function (val) {
  console.log(val < 10);
});
