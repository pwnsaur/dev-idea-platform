export interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  name: string;
  surname: string;
  posts: string[];
}
