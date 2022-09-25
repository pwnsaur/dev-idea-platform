// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './write.module.scss';
import { useState, useContext } from 'react';
import { PostsContext } from '../../contexts/PostContext';
import { useNavigate, useParams } from 'react-router-dom';
// import { useContext } from 'react';
import axios from 'axios';

type Post = {
  title: string;
  content: string;
};

const Edit = () => {
  const postCtx = useContext(PostsContext);
  const params = useParams();
  const post = postCtx!.findPostById(String(params.id))[0];
  const navigate = useNavigate();
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    const post: Post = {
      title: title,
      content: content,
    };
    try {
      await axios.put(`http://localhost:3001/post/update/${params.id}`, post, {
        withCredentials: true,
      });
      setTitle('');
      setContent('');
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className={styles.write}>
      <h2>Write</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
          className={styles.title}
          required
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="place your ideas here"
          className={styles.textPad}
          required
        ></textarea>
        <input type="submit" value="add post" className={styles.submitBtn} />
      </form>
    </div>
  );
};

export default Edit;
