import { useContext, useState } from 'react';
import { PostsContext } from '../../contexts/PostContext';
import styles from './postWindow.module.scss';
import PostContainer from '../postContainer/PostContainer';
import { JsxElement } from 'typescript';

const PostWindow = () => {
  const [parsedPosts, setParsedPosts] = useState(2);
  const postCtx = useContext(PostsContext);
  let posts: Array<JSX.Element> = [];
  postCtx!.items.forEach((post, index) => {
    if (index <= parsedPosts) {
      posts.push(
        <PostContainer
          key={index}
          _id={post._id}
          title={post.title}
          content={post.content}
          author={post.author}
          createdAt={post.createdAt}
        />,
      );
    }
  });
  const handleClick = () => {
    setParsedPosts((prev) => prev + 3);
  };
  return (
    <div className={styles.postWindow}>
      {postCtx!.items.length > 0 ? (
        posts
      ) : (
        <h1>There are no posts yet, Go and create some!</h1>
      )}
      {parsedPosts < postCtx!.items.length && (
        <button className="nav" onClick={handleClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default PostWindow;
