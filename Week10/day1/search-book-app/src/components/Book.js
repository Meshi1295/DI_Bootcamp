import React from 'react'

const Book = (props) => {
    const { book } = props

    return (
        <>
            <div className="card">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
                <h6>{book.volumeInfo.title}</h6>
                <small>Author: {book.volumeInfo.authors}</small>
                <small>Published: {book.volumeInfo.publishedDate}</small>
            </div>
        </>
    )
}
export default Book;
