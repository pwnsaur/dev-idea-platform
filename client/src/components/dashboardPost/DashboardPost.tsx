import { Link } from 'react-router-dom';
import { Post } from '../../interfaces/interfaces';
import styles from './postContainer.module.scss';

const DashboardPost = (props: Post) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <span className={styles.date}>{String(props.createdAt)}</span>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles['content-wrapper']}>
        <p className={styles.content}>{props.content}</p>
      </div>
      <Link className="nav" to={`/edit/${props._id}`}>
        Edit
      </Link>
    </div>
  );
};

export default DashboardPost;
