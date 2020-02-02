export interface ClipModel {
  [id: string]: {
    id: string;
    txt: string;
    shortcut: string;
  };
}

const clipModel: ClipModel = {
  id1: { id: 'id1', txt: 'str1', shortcut: 'a' },
  id2: { id: 'id2', txt: 'str2', shortcut: 'b' }
};

export default clipModel;
