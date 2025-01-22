import styled from 'styled-components';

export const StyledPartyCreateContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  /* min-height: 768px; */
  background-color: #fff5d1;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  padding: 8px 14px 0 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  // 페이지 타이틀
  & .party-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 343px;
    height: 56px;
    min-height: 56px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;

    font-size: 24px;

    & img {
      width: 32px;
      height: 32px;

      &.back:hover {
        cursor: pointer;
      }
    }
  }
`;

export const StyledCreateContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 17px;

  padding: 16px 0 24px 0;

  & > div {
    width: 328px;
  }

  // 카테고리 드롭다운
  & .drop-down {
    width: 328px;
    height: 56px;
    border: 2px solid #000;
    border-radius: 4px;
    background: #fff9e5;
    position: relative;

    & > .category {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0 24px;
      height: 100%;
      color: #999;

      &.blackColor {
        color: #000;
      }

      & img {
        width: 16px;
        height: 16px;

        color: #999;
      }

      &:hover {
        cursor: pointer;
      }
    }

    & .drop-down-open {
      position: absolute;
      right: -2px;
      margin-top: 8px;

      width: 329px;
      background-color: #fff9e5;
      border: 1px solid #000;
      border-radius: 4px;

      /* z-index: 1; */

      & > li {
        display: flex;
        align-items: center; /* 텍스트 수직 정렬 */
        justify-content: flex-start; /* 텍스트 왼쪽 정렬 */

        width: 100%;
        height: 56px;
        padding: 0 24px;
        font-size: 16px;
        border-bottom: 1px solid #000;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  & .content {
    & > span {
      height: 16px;
      font-size: 13px;
      font-weight: 700;
    }

    & > div {
      height: 56px;
      margin-top: 4px;

      & input {
        width: 100%;
        height: 100%;
        background: #fff9e5;
        border: none;
        outline: none;
        border: 2px solid #000;
        border-radius: 4px;

        padding: 0 24px;
        font-size: 16px;
      }
    }
  }

  & .description > div {
    min-height: 120px;

    & textarea {
      width: 100%;
      height: 100%;
      resize: none;

      background: #fff9e5;
      border: none;
      outline: none;
      border: 2px solid #000;
      border-radius: 4px;

      padding: 16px 24px;
      font-size: 16px;
    }
  }
`;
