import styles from './login.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name, email });
    navigate('/dashboard');
  };

  return (
    <section className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className={styles.formRow}>
          <input
            placeholder='name'
            type='text'
            className={styles.formInput}
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <input
            placeholder='email'
            type='email'
            className={styles.formInput}
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className={`${styles.btn} ${styles.btnBlock}`}>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
