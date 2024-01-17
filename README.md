Functions
1. Account Functions
findAccountById(accounts, id)
This function takes an array of accounts and an account ID as parameters. It returns the account object with the specified ID, allowing easy retrieval of account information.

sortAccountsByLastName(accounts)
This function sorts an array of accounts alphabetically by last name. It can be useful for displaying a sorted list of accounts based on last names.

getTotalNumberOfBorrows(account, books)
Given an account and an array of books, this function calculates the total number of times the account has borrowed books. It considers the borrowing history of each book.

getBooksPossessedByAccount(account, books, authors)
This function filters an array of books to find those currently possessed by a specific account. It considers the most recent borrowing information and retrieves author details for each book.

2. Book Functions
findAuthorById(authors, id)
This function finds and returns the author object with the specified ID from an array of authors.

findBookById(books, id)
This function finds and returns the book object with the specified ID from an array of books.

partitionBooksByBorrowedStatus(books)
This function categorizes books into two arrays: borrowed books and returned books, based on their borrowing status.

getBorrowersForBook(book, accounts)
Given a book and an array of accounts, this function retrieves information about the first 10 borrowers of the book, including whether the book has been returned.

3. Library Statistics Functions
getTotalBooksCount(books)
This function returns the total number of books in the library.

getTotalAccountsCount(accounts)
This function returns the total number of accounts in the library.

getBooksBorrowedCount(books)
This function calculates the total number of books currently borrowed from the library.

getMostCommonGenres(books)
This function identifies and returns the top five most common genres in the library based on book counts.

getMostPopularBooks(books)
This function identifies and returns the top five most popular books in the library based on borrow counts.

getMostPopularAuthors(books, authors)
This function identifies and returns the top five most popular authors in the library based on the total number of borrows for their books.
