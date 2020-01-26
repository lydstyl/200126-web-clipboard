import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Header = () => {
  const { loggedIn, email } = useStoreState(state => state.user);

  const { handleLogin, handleLogout } = useStoreActions(
    actions => actions.user
  );

  return (
    <header>
      <h1>Web Clipboard</h1>

      {loggedIn ? (
        <>
          <p>logged as : {email}</p>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </header>
  );
};

export default Header;
