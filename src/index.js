import React from 'react';
import ReactDOM from 'react-dom';

function Gretting() {
  return <h2>hello React</h2>;
}

ReactDOM.render(
  <Gretting />,
  document.getElementById('root')
);

