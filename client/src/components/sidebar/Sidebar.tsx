import styles from './sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import axios from 'axios';

const Navbar = () => {
  const loginCtx = useContext(LoggedInContext);
  const clickHandler = async () => {
    const response = await axios.post(
      'http://localhost:3001/auth/logout',
      {},
      { withCredentials: true },
    );
    loginCtx!.setLoggedInStatus(false, '');
    localStorage.removeItem('login');
    console.log(response);
  };
  return (
    <nav className={styles.sidebar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/write">Write</NavLink>
      {!loginCtx!.login.isLoggedIn && <NavLink to="/login">Login</NavLink>}
      {loginCtx!.login.isLoggedIn && (
        <button onClick={clickHandler}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
