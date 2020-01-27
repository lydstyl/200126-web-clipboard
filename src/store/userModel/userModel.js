import actions from './actions';
import thunks from './thunks';

const userModel = {
  loading: false,
  error: null,

  user: {
    email: null,
    uid: null
  },

  ...actions,

  ...thunks
};

export default userModel;
