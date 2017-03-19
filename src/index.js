import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App txt="This is a prop value." anotherTxt="This is yet another prop value." num={5} />,
  document.getElementById('root')
);
