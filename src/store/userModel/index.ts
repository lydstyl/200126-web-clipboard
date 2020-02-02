import { Action } from 'easy-peasy';
import actions from './actions';
import thunks from './thunks';

interface User {
  email: null | string;
  uid: null | string;
}

export interface Actions {
  setLoading: Action<UserModel, boolean>;
  setError: Action<UserModel, null | string>;
  handleLogin: Action<UserModel, { uid: string; email: string }>;
  handleLogout: Action<UserModel>;
}

export interface UserModel {
  loading?: boolean;
  loggedIn?: boolean;
  error?: null | string;
  user?: User;
}

const userModel: UserModel = {
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
