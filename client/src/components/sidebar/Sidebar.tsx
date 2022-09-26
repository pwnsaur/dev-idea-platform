import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import styles from './sidebar.module.scss';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { server } from '../../utils/Globals';

const Navbar = () => {
  const loginCtx = useContext(LoggedInContext);
  const clickHandler = async () => {
    await axios.post(`${server}auth/logout`, {}, { withCredentials: true });
    loginCtx!.setLoggedInStatus(false, '');
    localStorage.removeItem('login');
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
