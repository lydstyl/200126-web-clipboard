import userModel from './userModel';

import clipModel, { ClipModel } from './clipModel';

export interface StoreModel {
  user?: any;
  clips: ClipModel;
}

const storeModel: StoreModel = {
  user: userModel,
  clips: clipModel
};

export default storeModel;
