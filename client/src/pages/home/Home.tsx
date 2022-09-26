import styles from './home.module.scss';
import PostWindow from '../../components/postsWindow/PostWindow';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <section className="section">
        <PostWindow />
      </section>
    </div>
  );
};
export default Home;
