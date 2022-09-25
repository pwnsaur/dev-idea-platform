// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './dashboard.module.scss';
import { useContext } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { NavLink } from 'react-router-dom';
const Dashboard: React.FC = () => {
  const loginCtx = useContext(LoggedInContext);

  if (!loginCtx!.login.isLoggedIn) {
    return (
      <div>
        <p>You need to login</p>
        <NavLink to="/login" >Go to login</NavLink>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <section className="section">
        <h2>Dashboard</h2>
      </section>
    </div>
  );
};

export default Dashboard;
