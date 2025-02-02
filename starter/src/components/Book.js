import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, updateBookShelf }) => {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 125,
                        height: 190,
                        backgroundImage: `url("${book.imageLinks.thumbnail}")`
                    }}></div>
                <div className="book-shelf-changer">
                    <select
                        defaultValue={book.shelf ? book.shelf : 'none'}
                        onChange={(e) => {
                            {
                                updateBookShelf(book, e.target.value);
                            }
                        }}>
                        <option value="move" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func
};

export default Book;
