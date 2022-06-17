import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import * as BooksAPI from './BooksAPI';
import SearchPage from './components/SearchPage';

const App = () => {
    // useState Hooks
    const [books, setBooks] = useState([]);

    // useEffect Hook
    useEffect(() => {
        // Retrieve books from Server
        const fetchBooks = async () => {
            // GET API Call
            const books = await BooksAPI.getAll();

            console.log(books);
            // Set
            setBooks(books);
        };
        // Call function
        fetchBooks();
    }, []);

    const updateBookShelf = async (curBook, moveBookTo) => {
        await BooksAPI.update(curBook, moveBookTo);
        const updatedBooks = await BooksAPI.getAll();
        setBooks(updatedBooks);
    };

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Home books={books} updateBookShelf={updateBookShelf} />}
            />
            <Route
                path="/search"
                books={books}
                element={<SearchPage books={books} updateBookShelf={updateBookShelf} />}
            />
        </Routes>
    );
};

export default App;
