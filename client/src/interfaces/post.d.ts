export interface IPost {
  title: string;
  body: string;
  user: string;
  date: string;
}

export type PostContextType = {
  posts: IPost[];
  addPost?: (post: IPost) => void;
  updatePost?: (post: IPost) => void;
  removePost?: (post: IPost) => void;
};
