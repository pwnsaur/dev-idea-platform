import * as Pages from './pages/index';
import * as Components from './components/index';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PostsContextProvider from './contexts/PostContext';

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState('');

  return (
    <PostsContextProvider>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Components.SharedLayout />}>
              <Route index element={<Pages.Home />} />
              <Route path='dashboard' element={<Pages.Dashboard />} />
              <Route path='write' element={<Pages.Write />} />
              <Route path='login' element={<Pages.Login setUser={setUser} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </PostsContextProvider>
  );
};

export default App;
