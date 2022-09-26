import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#">
        <p>About Us</p>
      </a>
      <a href="#">
        <p>Contact Us</p>
      </a>
      <a href="#">
        <p>Contribute</p>
      </a>
      <a href="#">
        <p>Privacy Policy</p>
      </a>
      <p>Copyright &copy; 2022</p>
    </footer>
  );
};

export default Footer;
