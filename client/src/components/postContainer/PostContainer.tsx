import styles from './postContainer.module.scss';

// type Post = {
//   id: number;
//   user: string;
//   title: string;
//   body: string;
//   date: string;
// };

interface Props {
  title: string;
  body: string;
  author: string;
  date: string;
  children?: React.ReactNode;
}

const PostContainer: React.FC<Props> = props => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <span className={styles.author}>{props.author}</span>
        <span className={styles.date}>{props.date}</span>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.body}>{props.body}</p>
    </div>
  );
};

export default PostContainer;
