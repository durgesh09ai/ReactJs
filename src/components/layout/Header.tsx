import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../store/store';
import '../../css/Header.css';

  const Header: React.FC = () => {

    const role = useSelector((state: RootState) => state.auth.role);
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logout());
    };

    return (
    <header className="header">
      <h1>My App</h1>
      <nav className="nav-links">
      {role === 'user' && <Link to="/user-dashboard">User Dashboard</Link>}
      {role === 'admin' && <Link to="/admin-dashboard">Admin Dashboard</Link>}
      {role === 'admin' && <Link to="/adminpage">Admin Page</Link>}

      <Link to="/aboutus">About Us</Link>
      {!role && <Link to="/login">Login</Link>}
      {role && (<button onClick={handleLogout}>Logout</button>)}
      </nav>
    </header>
  );
};

export default Header;
