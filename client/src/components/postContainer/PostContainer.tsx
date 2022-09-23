import styles from './postContainer.module.scss';
import { IPost } from '../../interfaces/post';

interface Props extends IPost {
  children?: React.ReactNode;
}

const PostContainer: React.FC<Props> = props => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <span className={styles.author}>{props.user}</span>
        <span className={styles.date}>{props.date}</span>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.body}>{props.body}</p>
    </div>
  );
};

export default PostContainer;
