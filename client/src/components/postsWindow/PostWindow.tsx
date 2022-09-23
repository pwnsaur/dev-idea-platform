import styles from './postWindow.module.scss';
import PostContainer from '../postContainer/PostContainer';
import data from '../../posts.json';

// type Post = {
//   id: number;
//   user: string;
//   title: string;
//   body: string;
//   date: string;
// };

const PostWindow: React.FC = () => {
  console.log(data);

  return (
    <div className={styles.postWindow}>
      <div>post window</div>
      {data.map(post => (
        <PostContainer
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.user}
          date={post.date}
        />
        /* <h3>{post.title}</h3>
          <p>{post.body}</p>
        </PostContainer> */
      ))}
    </div>
  );
};

export default PostWindow;
