import { Post } from '../../interfaces/interfaces';
import styles from './postContainer.module.scss';

const DashboardPost = (props: Post) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <span className={styles.date}>{String(props.createdAt)}</span>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.body}>{props.content}</p>
    </div>
  );
};

export default DashboardPost;
