import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Unauthorized from '../Unauthorized/Unauthorized';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  const [user, setUser] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  };

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  };

  return (
    <div className='App'>
      <Router>
        <Route
          exact
          path='/'
          handleLogin={handleLogin}
          render={props => (
            <Landing
              {...props}
              user={user.toString()}
              handleLogin={handleLogin}
            />
          )}
        />
        <Route exact path='/unauthorized' component={Unauthorized} />

        <ProtectedRoute
          exact
          path='/dashboard'
          user={user}
          handleLogout={handleLogout}
          component={Dashboard}
        />
      </Router>
    </div>
  );
}

export default App;
