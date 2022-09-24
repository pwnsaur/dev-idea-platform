import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import PostsContextProvider from './contexts/PostContext';
import UsersContextProvider from './contexts/UserContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <UsersContextProvider>
    <PostsContextProvider>
      <App />
    </PostsContextProvider>
  </UsersContextProvider>,
);
