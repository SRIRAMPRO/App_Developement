import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageShops = () => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [newShop, setNewShop] = useState({
    image: '',
    garageName: '',
    contact: '',
    email: '',
    address: '',
    rating: '',
    mapLink: ''
  });

  // Fetch shops from the backend
  const fetchShops = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/repairs');
      setShops(response.data);
    } catch (error) {
      console.error('Error fetching shops:', error);
    }
  };

  useEffect(() => {
    fetchShops();
  }, []);

  const handleDeleteShop = async (id) => {
    const confirmCancel = window.confirm('Are you sure you want to delete this shop?');
    if (confirmCancel) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/repairs/${id}`);
        setShops(prevShops => prevShops.filter(shop => shop.id !== id));
      } catch (error) {
        console.error('Error deleting shop:', error);
      }
    }
  };

  const handleAddShop = async () => {
    try {
      await axios.post('http://localhost:8080/api/v1/repairs', newShop);
      setNewShop({
        image: '',
        garageName: '',
        contact: '',
        email: '',
        address: '',
        rating: '',
        mapLink: ''
      });
      fetchShops();
    } catch (error) {
      console.error('Error adding shop:', error);
    }
  };

  const handleUpdateShop = async () => {
    if (selectedShop) {
      try {
        await axios.put(`http://localhost:8080/api/v1/repairs/${selectedShop.id}`, selectedShop);
        setSelectedShop(null);
        fetchShops();
      } catch (error) {
        console.error('Error updating shop:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (selectedShop) {
      setSelectedShop(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setNewShop(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
      <h2>Manage Local Shops</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Add New Shop</h3>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newShop.image}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="garageName"
            placeholder="Garage Name"
            value={newShop.garageName}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={newShop.contact}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newShop.email}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newShop.address}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            value={newShop.rating}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="mapLink"
            placeholder="Map Link"
            value={newShop.mapLink}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
        </div>
        <button
          onClick={handleAddShop}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Add Shop
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '10px' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px' }}>Image</th>
            <th style={{ padding: '10px' }}>Garage Name</th>
            <th style={{ padding: '10px' }}>Contact</th>
            <th style={{ padding: '10px' }}>Email</th>
            <th style={{ padding: '10px' }}>Address</th>
            <th style={{ padding: '10px' }}>Rating</th>
            <th style={{ padding: '10px' }}>Map Link</th>
            <th style={{ padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shops.map(shop => (
            <tr key={shop.id}>
              <td style={{ padding: '10px' }}><img src={shop.image} alt={shop.garageName} style={{ width: '100px' }} /></td>
              <td style={{ padding: '10px' }}>{shop.garageName}</td>
              <td style={{ padding: '10px' }}>{shop.contact}</td>
              <td style={{ padding: '10px' }}>{shop.email}</td>
              <td style={{ padding: '10px' }}>{shop.address}</td>
              <td style={{ padding: '10px' }}>{shop.rating}</td>
              <td style={{ padding: '10px' }}><a href={shop.mapLink} target="_blank" rel="noopener noreferrer">View Map</a></td>
              <td style={{ padding: '10px' }}>
                <button
                  onClick={() => setSelectedShop(shop)}
                  style={{
                    marginRight: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#2980b9',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Add a subtle shadow
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1f618d'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#2980b9'}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteShop(shop.id)}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Add a subtle shadow
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedShop && (
        <div style={{ marginTop: '20px' }}>
          <h3>Edit Shop</h3>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={selectedShop.image}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="garageName"
            placeholder="Garage Name"
            value={selectedShop.garageName}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={selectedShop.contact}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={selectedShop.email}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={selectedShop.address}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            value={selectedShop.rating}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <input
            type="text"
            name="mapLink"
            placeholder="Map Link"
            value={selectedShop.mapLink}
            onChange={handleInputChange}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px'
            }}
          />
          <button
            onClick={handleUpdateShop}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            Update Shop
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageShops;
