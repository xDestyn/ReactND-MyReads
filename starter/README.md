# MyReads Project

This projects represents a real world book shelf for users.
A user will receive books from the database and will have the option to categorize the books in 3 shelves. (Currently Reading, Want to Read, Read).
On the home page, the books will be displayed based on the category that the user has picked.
Navigating to the search page by clicking on the button in the bottom right, the user will be able to search for other books that they may be interested in.
Books that are already placed on shelves will show that based on selecting the book.
Otherwise, a user will be able to place new books to their respective shelf based on their interest.

# Components

- App
  - Home
    - MyReadsHeader
    - Shelf
      - Book
    - Button
  - Search Page
    - Book

# Author

Omar Flores

## Installation

To get started developing right away:

- install all project dependencies with `yarn install`
- start the development server with `yarn start`

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
