import { useState, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './login.module.scss';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { server } from '../../utils/Globals';

const Login = () => {
  const loginCtx = useContext(LoggedInContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !password) return;
    const data = {
      username: name,
      password: password,
    };
    try {
      const response = await axios.post(`${server}auth/login`, data, {
        withCredentials: true,
      });
      const newDate = new Date();
      loginCtx!.setLoggedInStatus(true, response.data.id, newDate);
      console.log(loginCtx!.login);
      localStorage.setItem(
        'login',
        JSON.stringify({
          isLoggedIn: true,
          id: response.data.id,
          loggedInAt: newDate,
        }),
      );
      navigate('/dashboard');
    } catch (error: any) {
      console.log(error.response.data);
      // loginCtx!.setLoggedInStatus(false, '');
    }
  };

  return (
    <section className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className={styles.formRow}>
          <input
            placeholder="name"
            type="text"
            className={styles.formInput}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <input
            placeholder="password"
            type="password"
            className={styles.formInput}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={`${styles.btn} ${styles.btnBlock}`}>
          login
        </button>
        <NavLink className={styles.register} to="/register">
          Register
        </NavLink>
      </form>
    </section>
  );
};
export default Login;
