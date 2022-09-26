import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../postContainer/postContainer.module.scss';
import { Post } from '../../interfaces/interfaces';
import { server } from '../../utils/Globals';

interface Props extends Post {
  triggerHandler: () => void;
}

const DashboardPost: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    await axios
      .delete(`${server}post/delete/${props._id}`, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
    props.triggerHandler();
    navigate('/dashboard');
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <span className={styles.date}>{String(props.createdAt)}</span>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles['content-wrapper']}>
        <p className={styles.content}>{props.content}</p>
      </div>
      <div className={styles.buttons}>
        <Link className={`${styles.buttonLeft} nav`} to={`/edit/${props._id}`}>
          Edit
        </Link>
        <button className={`${styles.buttonRight} nav`} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DashboardPost;
