import { action } from 'easy-peasy';

const actions = {
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
  })
};

export default actions;
