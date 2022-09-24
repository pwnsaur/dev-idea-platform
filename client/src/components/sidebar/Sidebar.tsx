import styles from "./sidebar.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../reusableComponents/Button";
const Navbar = () => {
  return (
    <nav className={styles.sidebar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/write">Write</NavLink>
      <NavLink to="/login">Login</NavLink>
      <Button text="Click" />
    </nav>
  );
};

export default Navbar;
