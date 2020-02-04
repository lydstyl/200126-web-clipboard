import React from 'react';
import { useStoreActions, Thunk } from 'easy-peasy';

const Login = () => {
  const { signInWithEmailAndPassword } = useStoreActions(
    actions => actions.user
  );

  const handleLogin = () => {
    signInWithEmailAndPassword({ email: 'sam@gmail.com', password: '123456' });
  };

  return (
    <div>
      <h2>Login</h2>

      <div className='field'>
        <label>e-mail</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>password</label>
        <input type='password' />
      </div>

      <div className='field'>
        <input onClick={handleLogin} type='button' value='login' />
      </div>
    </div>
  );
};

export default Login;
