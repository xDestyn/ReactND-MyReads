import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import * as BooksAPI from './BooksAPI';

const App = () => {
    // Book state
    const [books, setBooks] = useState([]);

    // GET Books Hook
    useEffect(() => {
        // Retrieve books from Server
        const fetchBooks = async () => {
            // GET API Call
            const books = await BooksAPI.getAll();
            // Set
            setBooks(books);
        };
        // Call function
        fetchBooks();
    }, []);

    // UPDATE books from Server
    const updateBookShelf = (curBook, moveBookTo) => {
        // Update books if need be
        const updatedBooks = books.map((book) => {
            if (book.id === curBook.id) {
                book.shelf = moveBookTo;

                return curBook;
            }

            return book;
        });

        BooksAPI.update(curBook, moveBookTo);
        setBooks(updatedBooks);
    };

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Home books={books} updateBookShelf={updateBookShelf} />}
            />
        </Routes>
    );
};

export default App;
