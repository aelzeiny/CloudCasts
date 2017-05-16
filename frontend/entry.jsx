
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as RSS from './util/rss_utils';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<h1>React is kinda working</h1>, root);
  window.RSS = RSS;
});
