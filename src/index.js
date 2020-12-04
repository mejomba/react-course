import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// custome import
import {books} from './books'
import Book from './Book'

function Wraper() {
  return (
    <section className="book-wraper">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}


ReactDOM.render(
  <Wraper />,
  document.getElementById('root')
);

