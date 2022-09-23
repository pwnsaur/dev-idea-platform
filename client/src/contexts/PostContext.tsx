import React, { createContext, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IPost } from '../interfaces/post';
import data from '../posts.json';

type IPostContext = {
  posts?: IPost[];
  children?: React.ReactNode;
};

export const PostContext = createContext<IPostContext | null>(null);
// export const PostContext = createContext<IPost[]>(data);

const PostContextProvider = ({ children }: IPostContext) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, setPosts] = useState(data);

  console.log(data);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostContextProvider;
