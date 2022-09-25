/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext } from 'react';
import { PostsContext } from '../../contexts/PostContext';
import styles from './postWindow.module.scss';
import PostContainer from '../postContainer/PostContainer';
import data from '../../posts.json';

const PostWindow = () => {
  const postCtx = useContext(PostsContext);
  if (postCtx!.items.length > 0) {
    console.log(postCtx!.items);
  }
  return (
    <div className={styles.postWindow}>
      <div>post window</div>
      {postCtx!.items.reverse().map((post, index) => (
        <PostContainer
          key={index}
          _id={post._id}
          title={post.title}
          content={post.content}
          author={post.author}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
};

export default PostWindow;
