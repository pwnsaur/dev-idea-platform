import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import PostsContextProvider from './contexts/PostContext';
import UsersContextProvider from './contexts/UserContext';
import LoggedInContextProvider from './contexts/LoggedInContext';
import Compose from './utils/Compose';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Compose
    components={[
      PostsContextProvider,
      UsersContextProvider,
      LoggedInContextProvider,
    ]}
  >
    <App />
  </Compose>,
);
