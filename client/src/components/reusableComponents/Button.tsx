import classes from "./Button.module.scss";
type Props = {
  text: String;
  onClickHandler?: () => void;
};

const Button = (props: Props) => {
  return <button className={`${classes.btn}`}>{props.text}</button>;
};
export default Button;
