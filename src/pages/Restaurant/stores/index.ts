import { atom } from 'recoil';

// 버튼 클릭 여부
export const isRestaurantCreateClickedState = atom<boolean>({
  key: 'isRestaurantCreateClickedState',
  default: false,
});
