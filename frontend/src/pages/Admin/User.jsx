import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Admin.module.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle delete user
  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/user/${id}`);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className={styles['admin-section-container']}>
      <div className={styles['admin-section']}>
        <h2>User Management</h2>
        <table className={styles['appointments-table']}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>**********</td> {/* Hide password for security reasons */}
                <td>
                  <button
                    style={{
                      marginTop: '8px',
                      width: '90%',
                      backgroundColor: '#4a90e2', // Softer blue
                      color: 'white',
                    }}
                    onClick={() => setSelectedUser(user)}
                  >
                    View
                  </button>
                  <button
                    style={{
                      marginTop: '8px',
                      width: '90%',
                      backgroundColor: '#d9534f', // Softer red
                      color: 'white',
                    }}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedUser && (
          <div className={styles['appointment-details']}>
            <h3>User Details</h3>
            <p>Name: {selectedUser.name}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <button onClick={() => setSelectedUser(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
