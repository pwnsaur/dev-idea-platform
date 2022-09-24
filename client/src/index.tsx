import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import PostsContextProvider from './contexts/PostContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <PostsContextProvider>
    <App />
  </PostsContextProvider>,
);
