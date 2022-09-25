import * as Pages from './pages/index';
import * as Components from './components/index';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { PostsContext } from './contexts/PostContext';
import { UsersContext } from './contexts/UserContext';
import ProtectedRoute from './utils/ProtectedRoutes';
import { LoggedInContext } from './contexts/LoggedInContext';

const App = () => {
  const postsCtx = useContext(PostsContext);
  const userCtx = useContext(UsersContext);
  const loginCtx = useContext(LoggedInContext);

  const getData = async () => {
    const responseUsers = await axios.get('http://localhost:3001/user/get');
    const responsePost = await axios.get('http://localhost:3001/post/get');
    userCtx!.addUser(responseUsers.data);

    localStorage.setItem('users', JSON.stringify(responseUsers.data));

    const newData = responsePost.data.map((post: any) => {
      post.createdAt = new Date(post.createdAt).toLocaleString('en-GB');
      if (post.updatedAt) {
        post.updatedAt = new Date(post.updatedAt).toLocaleString('en-GB');
      }
      return post;
    });
    postsCtx!.addPost(newData);

    localStorage.setItem('posts', JSON.stringify(newData));
  };

  const checkLocalLogin = () => {
    const login = localStorage.getItem('login');
    if (login) {
      const data = JSON.parse(login);
      const currDate = new Date();
      const locDate = Date.parse(data.loggedInAt);
      if (Math.abs(locDate - currDate.getTime()) / 36e5 < 1) {
        loginCtx!.setLoggedInStatus(data.isLoggedIn, data.id, data.loggedInAt);
      }
    }
  };

  const getChanges = async () => {
    const response = await axios.get('http://localhost:3001/changes/get');
    return response.data.latestChanges;
  };

  const checkChanges = async () => {
    const changes = localStorage.getItem('changes');
    if (changes) {
      const locDate = JSON.parse(changes);
      const localChanges = Date.parse(locDate);
      const apiDate = await getChanges();
      const apiChanges = Date.parse(apiDate);
      if (apiChanges !== localChanges) {
        getData();
        localStorage.setItem('changes', JSON.stringify({ date: apiChanges }));
      } else {
        const uData = localStorage.getItem('users');
        const users = JSON.parse(uData!);
        userCtx!.addUser(users);
        const pData = localStorage.getItem('posts');
        const posts = JSON.parse(pData!);
        postsCtx!.addPost(posts);
      }
    } else {
      getData();
      const apiChanges = await getChanges();
      localStorage.setItem('changes', JSON.stringify({ date: apiChanges }));
    }
  };

  useEffect(() => {
    checkLocalLogin();
    checkChanges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Components.SharedLayout />}>
            <Route index element={<Pages.Home />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute user={loginCtx!.login.isLoggedIn}>
                  <Pages.Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="write"
              element={
                <ProtectedRoute user={loginCtx!.login.isLoggedIn}>
                  <Pages.Write />
                </ProtectedRoute>
              }
            />
            <Route
              path="edit/:id"
              element={
                <ProtectedRoute user={loginCtx!.login.isLoggedIn}>
                  <Pages.Edit />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Pages.Login />} />
            <Route path="register" element={<Pages.Register />} />
            <Route path="post/:id" element={<Pages.Post />} />
            <Route path="*" element={<Pages.Error />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
