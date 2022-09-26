import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './postContainer.module.scss';
import { UsersContext } from '../../contexts/UserContext';
import { Post } from '../../interfaces/interfaces';

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
