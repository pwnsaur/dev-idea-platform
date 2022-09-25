import { createContext, useState } from 'react';
import { Post } from '../interfaces/interfaces';

type PostsContextObj = {
  items: Post[];
  addPost: (posts: Post[]) => void;
  findPostById: (id: string | string[]) => Post | Post[];
};

export const PostsContext = createContext<PostsContextObj | null>(null);
type Props = { children: React.ReactNode };
const PostsContextProvider: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const addPostHandler = (posts: Post[]) => {
    const newPosts: Post[] = posts;
    newPosts.reverse();
    setPosts([...newPosts]);
  };
  const findPostById = (id: string | string[]) => {
    if (typeof id === 'string') {
      return posts.filter((post) => post._id === id)[0];
    } else {
      return posts.filter((post) => id.includes(post._id));
    }
  };
  const contextValue: PostsContextObj = {
    items: posts,
    addPost: addPostHandler,
    findPostById,
  };
  return (
    <PostsContext.Provider value={contextValue}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
