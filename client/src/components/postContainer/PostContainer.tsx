import { useContext } from 'react';
import { UsersContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { Post } from '../../interfaces/interfaces';
import styles from './postContainer.module.scss';

// interface Props extends Post {
//   children?: React.ReactNode;
// }

const PostContainer = (props: Post) => {
  const userCtx = useContext(UsersContext);
  const author = userCtx!.findUserById(props.author);
  return (
    <div className={styles.postContainer}>
      <Link className={styles.postLink} to={`/post/${props._id}`}>
        <div className={styles.header}>
          <span
            className={styles.author}
          >{`${author.name} ${author.surname}`}</span>
          <span className={styles.date}>{String(props.createdAt)}</span>
        </div>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles['content-wrapper']}>
          <p className={styles.content}>{props.content}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostContainer;
