import React from 'react'
import BookItem from './BookItem'
import classes from './BookList.module.css'
const BookList = (props) => {
    return (
        <ul className={classes.bookList}>
           {props.books.map((book) => (
          <BookItem key={book.id} title={book.title} author={book.author} />
        ))}  
        </ul>
    )
}

export default BookList
