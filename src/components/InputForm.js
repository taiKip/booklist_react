import React, { useState } from "react";
import classes from "./InputForm.module.css";
const InputForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    console.log({title:title,author:author})
props.handleNewBook({id:Math.random(),title:title,author:author})
    setTitle('');
    setAuthor('');
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        name="title"
        onChange={titleHandler}
        placeholder="book title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={authorHandler}
        name="author"
        placeholder="author name"
        required
      />
      <button type="submit">add book</button>
    </form>
  );
};

export default InputForm;
