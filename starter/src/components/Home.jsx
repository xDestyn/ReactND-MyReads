import React from 'react';
import MyReadsHeader from './MyReadsHeader';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

const Home = (books, updateBookShelf) => {
    console.log(books);
    console.log(typeof updateBookShelf);
    // Layout

    // Shelf 1
    const currentlyReading = books.books.filter((book) => book.shelf === 'currentlyReading');

    // Shelf 2
    const wantToRead = books.books.filter((book) => book.shelf === 'wantToRead');

    // Shelf 3
    const read = books.books.filter((book) => book.shelf === 'read');

    return (
        <div className="list-books">
            <MyReadsHeader />
            <div className="list-books-content">
                <Shelf
                    title="Currently Reading"
                    books={currentlyReading}
                    updateBookShelf={updateBookShelf}
                />

                <Shelf title="Want to Read" books={wantToRead} updateBookShelf={updateBookShelf} />

                <Shelf title="Read" books={read} updateBookShelf={updateBookShelf} />
            </div>
        </div>
    );
};

Home.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default Home;
