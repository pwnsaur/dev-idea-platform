import { Link } from 'react-router-dom';
import styles from './error.module.scss';

const Error: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>get rekt lmao</h2>
      <br />
      <Link to="/" className={styles.getRekt}>
        Home
      </Link>
    </div>
  );
};
export default Error;
