import classes from "./App.module.css";
import {useState} from 'react'
import BookList from "./components/BookList";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
const BOOKS = [
  { id: 1, title: "name of the wind", author: "simeon tigra" },
  { id: 2, title: "The way of the kings", author: "dave santan" },
];


function App() {
const [books, setBooks] = useState(BOOKS)
  const addBookHandler = (book)=>{
setBooks([book,...books])
  }
  return (
    <div className={classes.App}>
      <header>
        <Header bookCount={3} />
      </header>
      <main>
        <BookList books={books}/>
       
        <InputForm  handleNewBook = {addBookHandler}/>
      </main>
    </div>
  );
}

export default App;
