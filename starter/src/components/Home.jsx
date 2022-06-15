import React from 'react';
import MyReadsHeader from './MyReadsHeader';
import Shelf from './Shelf';
import PropTypes from 'prop-types';
import Button from './Button';

const Home = ({ books, updateBookShelf }) => {
    console.log(books);
    console.log(typeof updateBookShelf);

    // Shelf 1 - Currently Reading
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');

    // Shelf 2 - Want to Read
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');

    // Shelf 3 - Read
    const read = books.filter((book) => book.shelf === 'read');

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
            <Button />
        </div>
    );
};

Home.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default Home;
