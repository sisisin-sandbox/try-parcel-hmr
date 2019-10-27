import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

let x = 0;
const inc = () => {
  x = x + 1;
  render();
};

function render() {
  ReactDOM.render(<App x={x} inc={inc} />, document.querySelector('#root'));
}

if (module.hot) {
  module.hot.dispose(data => {
    data.x = x;
  });
  module.hot.accept(() => {
    x = module.hot.data.x;
    render();
  });
}
render();
