import styled from 'styled-components';

export const StyledRestaurantCreateContainer = styled.div`
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
  & .restaurant-title {
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
  //네이버 주소
  & .naver-url {
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
      top: calc(50%);
      width: 32px;
      height: 32px;
      align-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
  //식당이름
  & .restaurant-name {
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
      top: calc(50%);
      width: 32px;
      height: 32px;
      align-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }

  //식당카테고리
  & .restaurant-category {
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
      top: calc(50%);
      width: 32px;
      height: 32px;
      align-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
  //아이콘 추가
  & .restaurant-add-icon {
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

    & .add-img {
      width: 72px;
      height: 72px;
      border-radius: 8px;

      background-color: #ddd;

      margin-right: 12px;
      &:hover {
        cursor: pointer;
      }
    }
    & > img {
      position: absolute;
      top: calc(50%);
      width: 32px;
      height: 32px;
      align-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
  // 밥집 등록 버튼
  & .restaurant-create-done-btn {
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
