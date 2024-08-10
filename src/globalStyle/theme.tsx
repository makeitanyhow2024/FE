import { css } from 'styled-components';

// 우선 색상과 폰트 사이즈 임의로 넣음.
// 추후 디자인 정해지면 이 형식대로 넣기

/** 자주 사용하는 색상들 */
const colors = {
  slate50: '#f8fafc',
  main50: '#eef2ff',
};

/** 폰트 크기 */
const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
};

// 타입 내보내기
const theme = {
  colors,
  fontSize,
};
export default theme;

export type Theme = typeof theme;
