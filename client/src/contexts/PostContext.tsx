import { createContext, useState, useMemo } from 'react';
import { Post } from '../interfaces/interfaces';

type PostsContextObj = {
  items: Post[];
  addPost: (posts: Post[]) => void;
  findPostById: (id: string | string[]) => Array<Post>;
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
      return posts.filter((post) => post._id === id);
    } else {
      return posts.filter((post) => id.includes(post._id));
    }
  };
  const contextValue = useMemo(
    () => ({
      items: posts,
      addPost: addPostHandler,
      findPostById,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [posts],
  );
  return (
    <PostsContext.Provider value={contextValue}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
