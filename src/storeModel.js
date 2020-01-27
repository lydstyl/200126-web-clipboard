import { thunk, action } from 'easy-peasy';

import app from './firebase/firebase';

const userModel = {
  loading: false,
  error: null,

  user: {
    email: null,
    uid: null
  },

  // ACTIONS
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setError: action((state, payload) => {
    state.error = payload;
  }),

  handleLogin: action((state, payload) => {
    state.user = payload;
  }),

  handleLogout: action(state => {
    state.loggedIn = false;

    state.user = {
      email: null,
      uid: null
    };
  }),

  // THUNKS
  createUserWithEmailAndPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      console.log('calling createUserWithEmailAndPassword');
      const result = await app
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
      console.log('result createUserWithEmailAndPassword');
      console.log(result.user.uid, result.user.email);

      actions.handleLogin({
        uid: result.user.uid,
        email: result.user.email
      });
    } catch (error) {
      actions.setError(error);
      actions.setLoading(false);
      // alert(error.message);
    }

    actions.setLoading(false);
  }),

  signOut: thunk(async (actions, payload) => {
    actions.setLoading(true);

    try {
      console.log('calling signOut');
      await app.auth().signOut();
    } catch (error) {
      actions.setError(error);
      actions.setLoading(false);
      // alert(error.message);
    }

    actions.handleLogout();

    actions.setLoading(false);
  }),

  signInWithEmailAndPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      console.log('calling signInWithEmailAndPassword');
      const result = await app
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
      console.log('result signInWithEmailAndPassword');
      console.log(result.user.uid, result.user.email);

      actions.handleLogin({
        uid: result.user.uid,
        email: result.user.email
      });
    } catch (error) {
      actions.setError(error);
      actions.setLoading(false);
      // alert(error.message);
    }

    actions.setLoading(false);
  })
};

const clipModel = {
  items: {
    1: { id: 1, txt: 'Easy', shortcut: 'a' },
    2: { id: 1, txt: 'Peasy', shortcut: 'b' }
  }
};

const storeModel = {
  user: userModel,
  clips: clipModel
};

export default storeModel;
