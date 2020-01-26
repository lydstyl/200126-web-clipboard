import React from 'react';
import { useStoreState } from 'easy-peasy';

const Dashboard = () => {
  const clips = useStoreState(state => state.clips);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Protected page</p>

      <pre>{JSON.stringify(clips, null, 4)}</pre>

      <div className='pagination'>Pagination</div>
    </div>
  );
};

export default Dashboard;
