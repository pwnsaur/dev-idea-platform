export interface Post {
  _id: String;
  title: String;
  content: String;
  author: String;
  createdAt: Date;
  updatedAt?: Date;
}
