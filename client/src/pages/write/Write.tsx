// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './write.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
import axios from 'axios';

type Post = {
  title: string;
  content: string;
};

const Write = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: Post = {
      title,
      content,
    };
    try {
      await axios.post('http://localhost:3001/post/create', post, {
        withCredentials: true,
      });
    } catch {
      console.log('error');
    }

    setTitle('');
    setContent('');
    navigate('/');
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

export default Write;
