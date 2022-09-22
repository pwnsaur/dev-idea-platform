import './sidebar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='sidebar'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='/write'>Write</NavLink>
    </nav>
  );
};

export default Navbar;
