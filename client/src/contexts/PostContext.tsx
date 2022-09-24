import { createContext, useState } from 'react';
import { Post } from '../interfaces/interfaces';

type PostsContextObj = {
  items: Post[];
  addPost: (posts: Post[]) => void;
};

export const PostsContext = createContext<PostsContextObj>({
  items: [],
  addPost: (posts: Post[]) => {},
});
type Props = { children: React.ReactNode };
const PostsContextProvider: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const addPostHandler = (posts: Post[]) => {
    const newPosts: Post[] = posts;
    setPosts((prevPosts) => {
      return (prevPosts = [...prevPosts, ...newPosts]);
    });
  };
  const contextValue: PostsContextObj = {
    items: posts,
    addPost: addPostHandler,
  };
  return (
    <PostsContext.Provider value={contextValue}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
