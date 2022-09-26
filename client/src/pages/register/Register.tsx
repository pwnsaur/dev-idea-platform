import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './register.module.scss';
import { server } from '../../utils/Globals';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setUser((prev) => {
      return { ...prev, [field]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const isEmpty = Object.values(user).some((field) => field === '');
    if (isEmpty) return;
    const data = {
      username: user.username,
      password: user.password,
      name: user.name,
      surname: user.surname,
      email: user.email,
    };
    try {
      await axios.post(`${server}auth/register`, data, {
        withCredentials: true,
      });
      console.log(data);
      navigate('/login');
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <section className={styles.register}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h5>Register</h5>
        <div className={styles.formRow}>
          <label htmlFor="userName">Username:</label>
          <input
            placeholder="username"
            type="text"
            className={styles.formInput}
            id="username"
            value={user.username}
            required
            onChange={(e) => handleOnChange(e, 'username')}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="password">Password:</label>
          <input
            placeholder="password"
            type="password"
            className={styles.formInput}
            id="password"
            value={user.password}
            required
            onChange={(e) => handleOnChange(e, 'password')}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="name"
            type="text"
            className={styles.formInput}
            id="name"
            value={user.name}
            required
            onChange={(e) => handleOnChange(e, 'name')}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="surname">surname:</label>
          <input
            placeholder="surname"
            type="text"
            className={styles.formInput}
            id="surname"
            value={user.surname}
            required
            onChange={(e) => handleOnChange(e, 'surname')}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="email"
            type="text"
            className={styles.formInput}
            id="email"
            value={user.email}
            required
            onChange={(e) => handleOnChange(e, 'email')}
          />
        </div>
        <button type="submit" className={`${styles.btn} ${styles.btnBlock}`}>
          register
        </button>
      </form>
    </section>
  );
};
export default Register;
