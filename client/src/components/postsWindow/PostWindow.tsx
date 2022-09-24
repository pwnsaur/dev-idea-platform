/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect } from 'react';
import { PostsContext } from '../../contexts/PostContext';
import styles from './postWindow.module.scss';
import PostContainer from '../postContainer/PostContainer';
import data from '../../posts.json';
import axios from 'axios';

const PostWindow = () => {
  const postsCtx = useContext(PostsContext);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:3005/post/get');
      // console.log(response.data);
      postsCtx.addPost(response.data);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(postsCtx.items);

  return (
    <div className={styles.postWindow}>
      <div>post window</div>
      {data.map((post) => (
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
