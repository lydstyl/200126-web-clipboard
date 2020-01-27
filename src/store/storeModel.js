import userModel from './userModel/userModel';

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
