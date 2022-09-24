import styles from './defaultButton.module.scss';

const DefaultButton = () => {
  // const { text, onPress, disabled } = props;

  return (
    <button type="button" className={styles.button}>
      Click me!
    </button>
  );
};

export default DefaultButton;
