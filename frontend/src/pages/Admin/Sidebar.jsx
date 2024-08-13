import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon
import logo from '../../assets/all-images/admin.jpg'; // Adjust the path to your logo

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h2>Admin Menu</h2>
      <ul>
        <li>
          <Link to="/admin" className={location.pathname === "/admin/dashboard" ? styles.active : ""}>Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/appointments" className={location.pathname === "/admin/appointments" ? styles.active : ""}>Manage Appointments</Link>
        </li>
        <li>
          <Link to="/admin/services" className={location.pathname === "/admin/services" ? styles.active : ""}>FAQ Requests</Link>
        </li>
        <li>
          <Link to="/admin/users" className={location.pathname === "/admin/users" ? styles.active : ""}>User Management</Link>
        </li>
        <li>
          <Link to="/admin/shops" className={location.pathname === "/admin/shops" ? styles.active : ""}>Shops</Link>
        </li>
       
      </ul>
      <div className={styles.logout}>
        <Link to="/logout">
          <FaSignOutAlt size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
