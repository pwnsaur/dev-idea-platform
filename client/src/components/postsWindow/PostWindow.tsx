/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import styles from './postWindow.module.scss';
import PostContainer from '../postContainer/PostContainer';
import data from '../../posts.json';

const PostWindow: React.FC = () => {
  // const { posts } = useContext(PostContext);

  return (
    <div className={styles.postWindow}>
      <div>post window</div>
      {data.map(post => (
        <PostContainer
          key={post.id}
          title={post.title}
          body={post.body}
          user={post.user}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default PostWindow;
