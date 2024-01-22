function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    return acc + book.borrows.filter(borrow => borrow.id === account.id).length;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => {
    const recentBorrow = book.borrows[0];
    if (recentBorrow.id === account.id && !recentBorrow.returned) {
      book.author = authors.find(author => author.id === book.authorId);
      return true;
    }
    return false;
  });
}

/*// Helper function 
function isBookAvailableForBorrowing(book) {
  const recentBorrow = book.borrows[0];
  return !recentBorrow || recentBorrow.returned;
}

// getBooksPossessedByAccount function 
function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => {
    if (isBookAvailableForBorrowing(book)) {
      return false;
    }

    const recentBorrow = book.borrows[0];
    if (recentBorrow.id === account.id && !recentBorrow.returned) {
      book.author = authors.find(author => author.id === book.authorId);
      return true;
    }
    return false;
  });
}*/ 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
