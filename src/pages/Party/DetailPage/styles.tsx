import styled from 'styled-components';

export const StyledPartyDetailContainer = styled.div`
  width: 100%;
  height: calc(100% - 44px);
  min-width: 375px;
  min-height: 768px;
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
  & .party-detail-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 343px;
    height: 56px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;

    font-size: 24px;

    & img {
      width: 32px;
      height: 32px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  // 이미지
  & .party-detail-img {
    width: 328px;
    height: 153px;
    border-radius: 8px;
    background-color: #000;

    margin-top: 16px;
  }

  & .category {
    width: 328px;
    height: 36px;
    font-size: 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & .hashtag {
      margin-left: 7px;
      font-size: 10px;
    }

    & span {
    }
  }

  // 모임 상세 정보
  & .detail-info {
    width: 328px;
    height: 136px;

    border-top: 2px solid #000;
    border-bottom: 2px solid #000;

    background-color: #fff9e5;
    padding: 0 14px;
    margin-bottom: 8px;

    & .detail-title {
      display: flex;
      align-items: center;
      gap: 10px;

      height: 36px;

      & > h2 {
        font-size: 14px;
      }
      & > div {
        font-size: 10px;
      }
    }

    & .detail-content {
      display: flex;
      flex-direction: column;
      gap: 12px;

      font-size: 12px;
    }
  }

  & .party-description {
    position: relative;

    & .text {
      position: absolute;
      top: 12px;
      left: 16px;
      right: 14px;

      font-size: 14px;
      line-height: 20.27px;
    }
  }

  // 파티 참석/취소 버튼
  & .party-btn {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
      width: 115px;
      height: 115px;
    }
    & > div {
      position: relative;
      top: -15px;

      width: 265px;
      height: 56px;
      background-color: #ffc700;
      border: 2px solid #000;
      border-radius: 100px;
      padding: 0 80px;
      box-shadow: 4px 4px 0px 0px #000000;

      font-size: 16px;
      font-weight: 700;

      text-align: center;
      align-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
