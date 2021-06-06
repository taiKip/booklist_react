import React from 'react'
import classes from './BookItem.module.css'
const BookItem = (props) => {
    return (
        <li id={props.id} className={classes.bookItem}>
          <h2>{props.title}</h2>  
          <p>{props.author}</p>
        </li>
    )
}

export default BookItem
