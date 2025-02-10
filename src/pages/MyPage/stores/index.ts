import { atom } from 'recoil';
import { MyData } from '../models';

export const myDataStatus = atom<MyData>({
  key: 'myDataStatus',
  default: {
    nickname: '',
    profile: '',
  },
});
