import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      user_lastname: 'Doe',
      user_city: 'Hyderabad',
      user_zipcode: '500072',
    };
    try {
      const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', payload);
      console.log('Registration Success:', response.data);
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user_firstname" placeholder="First Name" value={formData.user_firstname} onChange={handleChange} required />
        <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
        <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
        <input type="text" name="user_phone" placeholder="Phone" value={formData.user_phone} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
