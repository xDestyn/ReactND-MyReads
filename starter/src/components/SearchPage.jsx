import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';

const SearchPage = ({ updateBookShelf }) => {
    const [query, setQuery] = useState('');
    const [displayBooks, setDisplayBooks] = useState([]);

    const updateQuery = (query) => {
        setQuery(query);
        console.log(query);
        console.log(displayBooks);
        BooksAPI.search(query)
            .then((books) => {
                if (Array.isArray(books)) {
                    books.forEach((book) => {
                        books.forEach((bk) => {
                            if (book.id === bk.id) {
                                book.shelf = bk.shelf;
                            }
                        });
                    });
                    setDisplayBooks(
                        books.filter((r) => r.authors !== undefined && r.imageLinks !== undefined)
                    );
                } else {
                    setDisplayBooks([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close Search</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by Title, Author, or ISBN"
                        value={query}
                        onChange={(e) => updateQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {displayBooks.map((book) => {
                        return (
                            <li key={book.id}>
                                <Book book={book} updateBookShelf={updateBookShelf} />
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};

SearchPage.propTypes = {
    updateBookShelf: PropTypes.func,
    displayBooks: PropTypes.array,
    query: PropTypes.string,
    updateQuery: PropTypes.func
};

export default SearchPage;
