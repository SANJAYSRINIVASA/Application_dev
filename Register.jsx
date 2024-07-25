import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
    setMobileNumberError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate name
    if (!name.trim()) {
      setNameError('Name is required');
    }

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

    // Validate mobile number
    if (!mobileNumber.trim()) {
      setMobileNumberError('Mobile Number is required');
    } else if (isNaN(mobileNumber)) {
      setMobileNumberError('Mobile Number should be a number');
    }

    // If no errors, proceed with registration logic
    if (!nameError && !emailError && !passwordError && !mobileNumberError) {
      // Replace this with your actual registration logic (e.g., API call)
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Mobile Number:', mobileNumber);
      console.log('City:', city);
      console.log('Country:', country);

      // Clear the form after successful submission
      setName('');
      setEmail('');
      setPassword('');
      setMobileNumber('');
      setCity('');
      setCountry('');
    }
  };

  return (
    <div className='Form'>
      <h1>Register</h1>
      <div className='input'>
        <TextField
          variant="outlined"
          label="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          error={!!nameError}
          helperText={nameError}
        />
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
        <TextField
          variant="outlined"
          label="Mobile Number"
          type="tel"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          error={!!mobileNumberError}
          helperText={mobileNumberError}
        />
        <TextField
          variant="outlined"
          label="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button className='btn' variant="contained" onClick={handleSubmit}>
          Register
        </Button>
        <Link to="/" className='lin'>Back to Login</Link>
      </div>
    </div>
  );
};

export default Register;
