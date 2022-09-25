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
  const loggedIn = (
    <>
      <NavLink className="nav" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="nav" to="/write">
        Write
      </NavLink>
      <button className="nav" onClick={clickHandler}>
        Logout
      </button>
    </>
  );

  return (
    <nav className={styles.sidebar}>
      <NavLink className="nav" to="/">
        Home
      </NavLink>

      {loginCtx!.login.isLoggedIn && loggedIn}
      {!loginCtx!.login.isLoggedIn && (
        <NavLink className="nav" to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
