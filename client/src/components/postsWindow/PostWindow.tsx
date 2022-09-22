import './postWindow.scss';
import PostContainer from '../postContainer/PostContainer';
import data from '../../posts.json';

// type Post = {
//   id: number;
//   user: string;
//   title: string;
//   body: string;
// };

const PostWindow: React.FC = () => {
  console.log(data);

  return (
    <div className='post-window'>
      <div>post window</div>
      {data.map(post => (
        <PostContainer key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </PostContainer>
      ))}
    </div>
  );
};

export default PostWindow;
