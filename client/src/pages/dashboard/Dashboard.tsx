import { useContext } from 'react';
import styles from './dashboard.module.scss';
import { UsersContext } from '../../contexts/UserContext';
import { PostsContext } from '../../contexts/PostContext';
import DashboardPost from '../../components/dashboardPost/DashboardPost';

interface Props {
  triggerHandler: () => void;
}

const Dashboard: React.FC<Props> = (props) => {
  const userCtx = useContext(UsersContext);
  const postsCtx = useContext(PostsContext);

  const loginStorage = localStorage.getItem('login');
  const author = JSON.parse(loginStorage!);
  const user = userCtx!.findUserById(author.id);

  const posts = postsCtx!.findPostById(user.posts);
  let jsxPosts;
  if (posts.length > 0) {
    jsxPosts = posts.map((post, index) => {
      return (
        <DashboardPost
          key={index}
          _id={post._id}
          title={post.title}
          content={post.content}
          author={post.author}
          createdAt={post.createdAt}
          triggerHandler={props.triggerHandler}
        />
      );
    });
  }

  return (
    <div className={styles.dashboard}>
      <section className="section">
        <div className={styles.container}>
          {posts.length !== 0 ? jsxPosts : <h1>You don't have any posts</h1>}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
