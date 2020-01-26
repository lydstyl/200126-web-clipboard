import React from 'react';

const Dashboard = ({ handleLogout }) => {
  return (
    <div>
      <header>
        <h1>Web Clipboard</h1>
        <p>user's e-mail</p>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <h2>Dashboard</h2>
      <p>Secret Page</p>

      <div className='pagination'>Pagination</div>

      <footer>Footer</footer>
    </div>
  );
};

export default Dashboard;
