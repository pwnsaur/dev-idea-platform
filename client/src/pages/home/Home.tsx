import styles from './home.module.scss';
import PostWindow from '../../components/postsWindow/PostWindow';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <section className='section'>
        <h2>Homepage</h2>
        <PostWindow />
      </section>
    </div>
  );
};
export default Home;
