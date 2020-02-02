import { thunk } from 'easy-peasy';

import app from '../../firebase/firebase';

const thunks = {
  createUserWithEmailAndPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);

    try {
      const result = await app
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);

      actions.handleLogin({
        uid: result.user.uid,
        email: result.user.email
      });
    } catch (error) {
      actions.setError(error);
      actions.setLoading(false);
    }

    actions.setLoading(false);
  }),

  signOut: thunk(async actions => {
    actions.setLoading(true);

    try {
      await app.auth().signOut();
    } catch (error) {
      actions.setError(error);
      actions.setLoading(false);
    }

    actions.handleLogout();

    actions.setLoading(false);
  }),

  signInWithEmailAndPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);

    try {
      const result = await app
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);

      actions.handleLogin({
        uid: result.user.uid,
        email: result.user.email
      });
    } catch (error) {
      actions.setError(error);
      actions.setLoading(false);
    }

    actions.setLoading(false);
  })
};

export default thunks;
