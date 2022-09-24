import * as Pages from './pages/index';
import * as Components from './components/index';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PostsContext } from './contexts/PostContext';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PostsContextProvider from './contexts/PostContext';

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState('');
  const postsCtx = useContext(PostsContext);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:3001/post/get');
      const newData = response.data.map((post: any) => {
        post.createdAt = new Date(post.createdAt).toLocaleString('en-GB');
        if (post.updatedAt) {
          post.updatedAt = new Date(post.updatedAt).toLocaleString('en-GB');
        }
        return post;
      });
      postsCtx.addPost(newData);
    };
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Components.SharedLayout />}>
            <Route index element={<Pages.Home />} />
            <Route path="dashboard" element={<Pages.Dashboard />} />
            <Route path="write" element={<Pages.Write />} />
            <Route path="login" element={<Pages.Login setUser={setUser} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
