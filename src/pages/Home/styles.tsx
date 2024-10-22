import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 44px);
  min-width: 375px;
  min-height: 768px;

  background-color: #fff5d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
