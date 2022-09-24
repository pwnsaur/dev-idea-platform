import styles from './postContainer.module.scss';
import { IPost } from '../../interfaces/post';
interface Post {
  _id: String;
  title: String;
  content: String;
  author: String;
  createdAt: Date;
  updatedAt?: Date;
}
interface Props extends Post {
  children?: React.ReactNode;
}

const PostContainer: React.FC<Props> = props => {
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
