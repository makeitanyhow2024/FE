import styled from 'styled-components';
export const StyledConfirmAlert = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
  height: 100vh;
  background: #00000099;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;

  & .alert-container {
    width: 328px;
    background: #fff9e5;
    border: 2px solid #000;
    border-radius: 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .question {
      position: relative;
      top: 0;
      bottom: 0;
      margin: auto 0;
      padding: 24px 16px;
      text-align: center;
    }

    & .response {
      height: 48px;
      font-size: 16px;
      border-top: 2px solid #000;
      padding: 12px 24px;
      text-align: end;

      & > span:first-child {
        margin-right: 16px;
      }
    }
  }
`;
