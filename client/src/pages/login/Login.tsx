import styles from './login.module.scss';
import { useState, useContext } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      await axios.post('http://localhost:3001/auth/login', data, {
        withCredentials: true,
      });
      loginCtx!.setLoggedInStatus(true);
      navigate('/dashboard');
    } catch (error: any) {
      console.log(error.response.data);
      loginCtx!.setLoggedInStatus(false);
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
      </form>
    </section>
  );
};
export default Login;
