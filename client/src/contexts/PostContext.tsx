import React, { createContext, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IPost } from '../interfaces/post';
import data from '../posts.json';

interface Posts {
  posts?: IPost[];
  children?: React.ReactNode;
}

export const PostContext = createContext<Posts | null>(null);

const PostContextProvider: React.FC<Posts> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, setPosts] = useState(data);

  console.log(data);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostContextProvider;
