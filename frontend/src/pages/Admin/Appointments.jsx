import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Admin.module.css';

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Fetch appointments from the backend
  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/bookings');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleAcceptAppointment = async (id) => {
    const confirmAccept = window.confirm('Are you sure you want to accept this appointment?');
    if (confirmAccept) {
      try {
        await axios.post(`http://localhost:8080/api/v1/bookings/accept/${id}`);
        setAppointments(prevAppointments => prevAppointments.filter(app => app.id !== id));
      } catch (error) {
        console.error('Error accepting appointment:', error);
      }
    }
  };

  const handleDeleteAppointment = async (id) => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this appointment?');
    if (confirmCancel) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/bookings/${id}`);
        setAppointments(prevAppointments => prevAppointments.filter(app => app.id !== id));
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  };

  return (
    <div className={styles['admin-section-container']}>
      <div className={styles['admin-section']}>
        <h2>Manage Appointments</h2>
        <table
          className={styles['appointments-table']}
          style={{ width: '100%', borderCollapse: 'collapse' }}
        >
          <thead>
            <tr>
              <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Date</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Phone Number</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Service Required</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Address</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Additional Notes</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Payment Method</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(app => (
              <tr key={app.id}>
                <td style={{ padding: '4px' }}>{app.name}</td>
                <td style={{ padding: '4px' }}>{app.date}</td>
                <td style={{ padding: '4px' }}>{app.phoneNumber}</td>
                <td style={{ padding: '4px' }}>{app.serviceRequired}</td>
                <td style={{ padding: '4px' }}>{app.email}</td>
                <td style={{ padding: '4px' }}>{app.address}</td>
                <td style={{ padding: '4px' }}>{app.additionalNotes}</td>
                <td style={{ padding: '4px' }}>{app.paymentMethod}</td>
                <td style={{ padding: '4px' }}>
                  <button
                    style={{ marginTop: '4px', width: '100%', padding: '4px', boxSizing: 'border-box' }}
                    onClick={() => setSelectedAppointment(app)}
                  >
                    View
                  </button>
                  <button
                    style={{ marginTop: '4px', width: '100%', padding: '4px', boxSizing: 'border-box', backgroundColor: 'green', color: 'white' }}
                    onClick={() => handleAcceptAppointment(app.id)}
                  >
                    Accept
                  </button>
                  <button
                    style={{ marginTop: '4px', width: '100%', padding: '4px', boxSizing: 'border-box', backgroundColor: 'red', color: 'white' }}
                    onClick={() => handleDeleteAppointment(app.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedAppointment && (
          <div className={styles['appointment-details']}>
            <h3>Appointment Details</h3>
            <p>Name: {selectedAppointment.name}</p>
            <p>Date: {selectedAppointment.date}</p>
            <p>Phone Number: {selectedAppointment.phoneNumber}</p>
            <p>Service Required: {selectedAppointment.serviceRequired}</p>
            <p>Email: {selectedAppointment.email}</p>
            <p>Address: {selectedAppointment.address}</p>
            <p>Additional Notes: {selectedAppointment.additionalNotes}</p>
            <p>Payment Method: {selectedAppointment.paymentMethod}</p>
            <button onClick={() => setSelectedAppointment(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAppointments;
