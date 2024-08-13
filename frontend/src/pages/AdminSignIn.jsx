import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/AdminSignIn.css'; // Updated CSS file

function AdminSignIn() {
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAdminSignIn = async () => {
    if (!email.current.value || !password.current.value) {
      setErrorMessage("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/v1/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });

      if (response.ok) {
        const adminData = await response.json();
        localStorage.setItem("admin", adminData.email);
        setLoading(false);
        navigate('/admin');
      } else {
        setLoading(false);
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="admin-signin-container">
      <div className="admin-signin-card">
        <h1 className="admin-signin-title">Admin Login</h1>
        <div className="admin-signin-input-group">
          <label htmlFor="admin-email" className="admin-signin-label">Admin Email</label>
          <input id="admin-email" placeholder="Email" type="text" ref={email} className="admin-signin-input" />
        </div>
        <div className="admin-signin-input-group">
          <label htmlFor="admin-password" className="admin-signin-label">Admin Password</label>
          <input id="admin-password" placeholder="Password" type="password" ref={password} className="admin-signin-input" />
        </div>
        {errorMessage && <p className="admin-signin-error-message">{errorMessage}</p>}
        <button onClick={handleAdminSignIn} disabled={loading} className="admin-signin-button">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default AdminSignIn;
