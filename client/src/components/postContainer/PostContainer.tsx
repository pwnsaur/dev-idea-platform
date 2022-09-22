import './postContainer.scss';

// type Post = {
//   id: number;
//   user: string;
//   title: string;
//   body: string;
// };

interface Props {
  children: React.ReactNode;
}

const PostContainer: React.FC<Props> = () => {
  return (
    <div className='post-container'>
      <div>post</div>
    </div>
  );
};

export default PostContainer;
