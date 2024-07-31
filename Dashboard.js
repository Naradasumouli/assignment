import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard">
      <h2>Welcome, {user.user_firstname}</h2>
      <p>Email: {user.user_email}</p>
      <p>Phone: {user.user_phone}</p>
      <p>City: {user.user_city}</p>
      <p>Zipcode: {user.user_zipcode}</p>
    </div>
  );
}

export default Dashboard;
