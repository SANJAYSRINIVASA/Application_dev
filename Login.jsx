import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './LogSt.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Reset email error when typing
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Reset password error when typing
    setPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    }

    // If no errors, proceed with login logic
    if (!emailError && !passwordError) {
      // Replace this with your actual login logic (e.g., API call, authentication)
      console.log('Email:', email);
      console.log('Password:', password);

      // Clear the form after successful submission
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='Form'>
      <h1>Login</h1>
      <div className='input'>
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError}
        />
        <Button className='btn' variant="contained" onClick={handleSubmit}>
          Login
        </Button>
        <Link to="/Register" className='lin'>Register Now</Link>
      </div>
    </div>
  );
};

export default Login;
