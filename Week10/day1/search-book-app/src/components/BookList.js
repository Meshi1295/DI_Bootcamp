import React, { Component } from 'react'
import { connect } from 'react-redux'
import Book from './Book'

class BookList extends Component {

    render() {
        const { books } = this.props
        return (
            <div className="container">
                {
                    books.items === undefined || this.props.search === ""
                        ? "Please search a book"
                        : books.items.map((book, i) => {
                            return <Book book={book} key={i} />
                        })
                }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        search: state.search
    }
}
export default connect(mapStateToProps)(BookList);
