import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="login">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
        <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
