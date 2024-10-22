import { atom } from 'recoil';

// 파티상세페이지 참석하기/취소하기/해체하기 버튼 클릭 여부
export const isPartyDetailClickedState = atom<boolean>({
  key: 'isPartyDetailClickedState',
  default: false,
});
