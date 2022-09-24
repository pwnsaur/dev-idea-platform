// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './write.module.scss';
import { useState } from 'react';
// import { useContext } from 'react';

type Post = {
  title: string;
  content: string;
};

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post: Post = {
      title,
      content,
    };
    console.log(post);
    setTitle('');
    setContent('');
  };

  return (
    <div className={styles.write}>
      {/* <section className="section"> */}
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
      {/* </section> */}
    </div>
  );
};

export default Write;
