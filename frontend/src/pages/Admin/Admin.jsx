// src/pages/Admin/Admin.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import ManageAppointments from './Appointments'; 
import ManageServices from './Services'; 
import UserManagement from './User'; 
import Dashboard from './Dashboard';
import Shop from './ManageShops';
import styles from './Admin.module.css';

const Admin = () => {
  return (
    <div className={styles['admin-page']}>
      <Sidebar />
      <div className={styles['main-content']}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<ManageAppointments />} />
          <Route path="/services" element={<ManageServices />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/shops" element={<Shop />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
