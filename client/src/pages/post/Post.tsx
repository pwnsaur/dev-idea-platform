import { useParams } from 'react-router-dom';
import styles from './post.module.scss';
import { useContext } from 'react';
import { UsersContext } from '../../contexts/UserContext';
import { PostsContext } from '../../contexts/PostContext';

const Post = () => {
  const { id } = useParams();
  const postCtx = useContext(PostsContext);
  const userCtx = useContext(UsersContext);
  const post = postCtx!.items.filter((post) => post._id === id);
  if (post.length < 1) {
    return <div>Post was not found</div>;
  }
  const user = userCtx!.findUserById(post[0].author);
  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        <section className={styles.header}>
          <span
            className={styles.author}
          >{`${user.name} ${user.surname}`}</span>
          <span className={styles.date}>{String(post[0].createdAt)}</span>
        </section>
        <section className={styles.body}>
          <h3 className={styles.title}>{post[0].title}</h3>
          <p className={styles.body}>{post[0].content}</p>
        </section>
      </div>
    </div>
  );
};
export default Post;
