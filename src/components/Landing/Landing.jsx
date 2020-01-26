import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h2>Landing</h2>

      <p>
        <Link to='/dashboard'>View Dashboard</Link>
      </p>
    </div>
  );
};

export default Landing;
