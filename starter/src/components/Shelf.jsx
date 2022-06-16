import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({ books, title, updateBookShelf }) => {
    console.log(books);
    console.log(updateBookShelf);

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title"> {title} </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((curBook) => {
                        return (
                            <li key={curBook.id}>
                                <Book book={curBook} updateBookShelf={updateBookShelf} />
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default Shelf;
