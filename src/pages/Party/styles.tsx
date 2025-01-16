import styled from 'styled-components';

export const StyledPartyContainer = styled.div`
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

  // Footer
  & .footer {
  }

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

  // 파티 검색
  & > .search {
    position: relative;
    left: 0;
    right: 0;
    margin: 16px auto;
    width: 328px;
    height: 48px;
    min-height: 48px;

    & > input {
      width: 100%;
      height: 100%;

      padding: 0 20px;

      background-color: #fff9e5;
      border: 2px solid #000;
      box-shadow: 2px 2px 0px 0px #000;
      border-radius: 4px;
    }

    & > img {
      position: absolute;
      right: 34px;
      top: calc(50% - 8px);
      width: 16px;
      height: 16px;
      align-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }

  // 파티 목록
  & .party-list-container {
    flex-grow: 1;
    padding: 0 10px;

    overflow-y: auto;
    overflow-x: hidden;
    // 스크롤바 커스텀
    &::-webkit-scrollbar {
      width: 2px; // 스크롤바 너비를 2px로 설정
    }
    &::-webkit-scrollbar-track {
      background: #fff9e5; // 스크롤바 트랙 배경색 (기본 영역)
    }
    &::-webkit-scrollbar-thumb {
      background-color: #000; // 스크롤바 핸들 색상
      border-radius: 10px; // 둥근 모서리로 설정
    }

    // 파티 항목
    & .party-container {
      display: flex;
      margin-bottom: 8px;

      padding: 12px 28px 12px 12px;

      width: 324px;
      height: 96px;

      border: 2px solid #000;
      border-radius: 2px;

      background-color: #fff9e5;

      &:hover {
        cursor: pointer;
      }

      & .party-img {
        width: 72px;
        height: 72px;
        border-radius: 8px;

        background-color: #000;

        margin-right: 12px;
      }

      & .party-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 200px;
        height: 72px;

        & .party-description {
          height: 52px;
          border-bottom: 1px solid #000000;

          & > h2 {
            font-size: 14px;
          }

          & > div {
            height: 30px;
            font-size: 11px;
          }
        }

        & .party-info {
          display: flex;
          justify-content: space-between;

          /* margin-top: 9px; */

          font-size: 11px;
        }
      }
    }
  }
`;
