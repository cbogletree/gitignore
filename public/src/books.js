function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}
function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = [];
  const returnedBooks = [];

  books.forEach(book => {
    const recentBorrow = book.borrows[0];
    if (recentBorrow.returned) {
      returnedBooks.push(book);
    } else {
      borrowedBooks.push(book);
    }
  });

  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
    return { ...account, returned: borrow.returned };
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
