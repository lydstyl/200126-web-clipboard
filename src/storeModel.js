import { thunk, action } from 'easy-peasy';

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

  // updateClip: thunk(async (actions, payload) => {
  //   const updated = await productService.update(payload.id, payload);
  //   actions.setClip(updated); // 👈 dispatch local actions to update state
  // }),

  // setClip: action((state, payload) => {
  //   state.items[payload.id] = payload;
  // }),
};

const storeModel = {
  user: userModel,
  clips: clipModel
};

export default storeModel;
