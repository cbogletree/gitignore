function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    const recentBorrow = book.borrows[0];
    return recentBorrow.returned ? acc : acc + 1;
  }, 0);
}

function getMostCommonGenres(books) {
  // Count the number of books for each genre
  const genreCounts = books.reduce((acc, book) => {
    const genre = book.genre;
    if (acc[genre]) {
      acc[genre].count += 1;
    } else {
      acc[genre] = { name: genre, count: 1 };
    }
    return acc;
  }, {});

  // Sort genres by count in descending order and limit to the top five
  const sortedGenres = Object.values(genreCounts).sort(
    (a, b) => b.count - a.count
  );

  return sortedGenres.slice(0, 5);
}



function getMostPopularBooks(books) {
  // Sort books by borrow count in descending order
  const sortedBooks = books
    .map((book) => ({
      name: book.title,
      count: book.borrows.length,
    }))
    .sort((a, b) => b.count - a.count);

  // Limit the list to the top five
  return sortedBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // Create a map of author IDs to author objects
  const authorMap = authors.reduce((acc, author) => {
    acc[author.id] = author;
    return acc;
  }, {});

  // Count the number of borrows for each author
const authorBorrowCounts = books.reduce((acc, book) => {
    const authorId = book.authorId;
    if (acc[authorId]) {
      acc[authorId].count += book.borrows.length;
    } else {
      acc[authorId] = {
        name: `${authorMap[authorId].name.first} ${authorMap[authorId].name.last}`,
        count: book.borrows.length,
      };
    }
    return acc;
  }, {});

  // Sort authors by borrow count in descending order and limit to the top five
  const sortedAuthors = Object.values(authorBorrowCounts).sort((a, b) => b.count - a.count);

  return sortedAuthors.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
