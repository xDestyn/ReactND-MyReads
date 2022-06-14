import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, updateBookShelf }) => {
    <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 125,
                        height: 200,
                        backgroundImage: `url("${book.imageLinks.thumbnail}")`
                    }}></div>
                <div className="book-shelf-changer">
                    <select
                        defaultValue={book.shelf ? book.shelf : 'none'}
                        onChange={(e) => updateBookShelf(book, e.target.value)}>
                        <option defaultValue="move" disabled>
                            Move to...
                        </option>
                        <option defaultValue="currentlyReading">Currently Reading</option>
                        <option defaultValue="wantToRead">Want to Read</option>
                        <option defaultValue="read">Read</option>
                        <option defaultValue="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    </li>;
};

Book.propTypes = {
    book: PropTypes.object.isRequired
};

export default Book;
