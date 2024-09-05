import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #000;
  flex-shrink: 0;
`;
export const StyledButton = styled.button`
  width: 63px;
  height: 36px;
  font-size: 12px;
  font-weight: 700;
  border: 2px solid #000;
  box-shadow: 2px 2px 0px 0px #000000;
  border-radius: 32px;
  background-color: #fff5d1;
  padding: 2px, 20px, 2px, 20px;

  &:hover {
    cursor: pointer;
  }
`;
