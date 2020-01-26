import React from 'react';
import { useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';

const Landing = () => {
  const handleLogin = useStoreActions(actions => actions.user.handleLogin);

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
