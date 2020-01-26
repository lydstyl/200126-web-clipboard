import { action } from 'easy-peasy';

const userModel = {
  loggedIn: false,
  email: 'todo@gmail.com',
  handleLogin: action((state, payload) => {
    state.loggedIn = true;
  }),
  handleLogout: action((state, payload) => {
    state.loggedIn = false;
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
