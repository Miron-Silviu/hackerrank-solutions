function getFirstKeyword(book) {
  return book.keywords?.[0];
}
console.log(getFirstKeyword(books[0]));
