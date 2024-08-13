import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signin.css';

function SignIn() {
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email.current.value || !password.current.value) {
      setErrorMessage("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/login', {
        email: email.current.value,
        password: password.current.value,
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="signin-background">
      <div className="signin-container">
        <h1>Login</h1>
        <div className="input_space">
          <input placeholder="Email" type="email" ref={email} />
        </div>
        <div className="input_space">
          <input placeholder="Password" type="password" ref={password} />
        </div>
        <p className="form-text">
          <span onClick={() => alert('Forgot Password functionality to be implemented.')}>Forgot Password?</span>
        </p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleSignIn} disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </button>
        <p className="form-text">
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
