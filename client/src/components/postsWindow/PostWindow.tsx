import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostContext';
import styles from './postWindow.module.scss';
import PostContainer from '../postContainer/PostContainer';

const PostWindow = () => {
  const postCtx = useContext(PostsContext);
  return (
    <div className={styles.postWindow}>
      {postCtx!.items.length > 0 ? (
        postCtx!.items.map((post, index) => (
          <PostContainer
            key={index}
            _id={post._id}
            title={post.title}
            content={post.content}
            author={post.author}
            createdAt={post.createdAt}
          />
        ))
      ) : (
        <h1>There are no posts yet, Go and create some!</h1>
      )}
    </div>
  );
};

export default PostWindow;
