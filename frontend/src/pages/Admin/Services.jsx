// src/components/ManageContacts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Admin.module.css';

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  // Fetch contacts from the backend
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/contact');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Handle reply to contact
  const handleReply = (contact) => {
    const replyMessage = prompt('Enter your reply message:');
    if (replyMessage) {
      // Here you can integrate actual reply logic such as sending an email
      alert(`Replying to ${contact.name} (${contact.email}): ${replyMessage}`);
    }
  };

  return (
    <div className={styles['admin-section-container']}>
      <div className={styles['admin-section']}>
        <h2>Manage FAQ</h2>
        <table className={styles['appointments-table']}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>
                  <button
                    style={{ marginTop: '8px', width: '100%', backgroundColor: '#3498db' }}
                    onClick={() => handleReply(contact)}
                  >
                    Reply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedContact && (
          <div className={styles['appointment-details']}>
            <h3>Contact Details</h3>
            <p>Name: {selectedContact.name}</p>
            <p>Email: {selectedContact.email}</p>
            <p>Message: {selectedContact.message}</p>
            <button onClick={() => setSelectedContact(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageContacts;
