import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import StyledHeader from './style';

const Header = () => {
  const {
    loading,
    error,
    user: { email }
  } = useStoreState(state => state.user);

  const { signOut, signInWithEmailAndPassword } = useStoreActions(
    actions => actions.user
  );

  const handleLogin = () => {
    signInWithEmailAndPassword({ email: 'sam@gmail.com', password: '123456' });
  };

  const handleLogout = () => {
    signOut();
  };

  if (error) {
    console.log(error);
    alert(error.message);
  }

  return (
    <StyledHeader>
      <h1>Web Clipboard</h1>

      {loading && <p>LOADING ...</p>}

      {email ? (
        <>
          <p>logged as : {email}</p>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </StyledHeader>
  );
};

export default Header;
