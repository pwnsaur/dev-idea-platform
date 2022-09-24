import { Post } from '../../interfaces/interfaces';
import styles from './postContainer.module.scss';
interface Props extends Post {
  children?: React.ReactNode;
}

const PostContainer: React.FC<Props> = (props) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <span className={styles.author}>{props.author}</span>
        <span className={styles.date}>{String(props.createdAt)}</span>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.body}>{props.content}</p>
    </div>
  );
};

export default PostContainer;
