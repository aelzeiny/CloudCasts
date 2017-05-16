
import React from 'react';
import ReactDOM from 'react-dom';
import * as RSS from './utils/rss_utils';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>React is kinda working</h1>, rootEl);
  window.RSS = RSS; 
});
