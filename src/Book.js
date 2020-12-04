import React from 'react'

const Book = ({img, title, author}) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e)=> {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexClick = (author)=> {
    console.log(author);
  };
  return (
    <article className="book" onMouseOver={()=> {
      console.log(title);
    }}>
      <img src={img} alt="book"/>
      <h3 onClick={()=> console.log(title)}>{title}</h3>
      <h5>{author}</h5>
      <button type='button' onClick={clickHandler}>click me</button>
      <button type='button' onClick={()=> complexClick(author)}>complex click</button>
    </article>
  );
}


export default Book
