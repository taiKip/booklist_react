import React from 'react'

const Header = (props) => {
    return (
        <>
         <h1>Tai Reading List</h1>  
         <p>Currently you have {props.bookCount}  to get through...</p> 
        </>
    )
}

export default Header
