import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 375px;
  background-color: #fff5d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 8px 16px 0 16px;
`;

export const StyledMyPageHeader = styled.div`
  width: 343px;
  height: 56px;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  display: flex;
`;

export const StyledMyPageHeaderBackButton = styled.div<{ top?: number }>`
  position: absolute;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 32px;
  height: 56px;
`;

export const StyledMyPageHeaderTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 0 9px 0;
  display: flex;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;

export const StyledMyPageHeaderTitle = styled.div`
  width: 100%;
  font-family: 'Do Hyeon';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  text-transform: uppercase;
  color: #000000;
`;

export const StyledMyDataContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 16px 0 16px 14px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #000000;
`;

export const StyledMyDataTextContainer = styled.div`
  width: 100%;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledMyDataText = styled.div`
  width: 139px;
  height: 24px;
  margin-bottom: 8px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const StyledMyDataEdit = styled.div`
  width: 92px;
  height: 19px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #333333;
  flex: none;
  order: 1;
  flex-grow: 0;
  cursor: pointer;
`;

export const StyledMyPartyContainer = styled.div`
  width: 100%;
  margin: 20px 0 20px 0;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;

export const StyledMyPartyTitleWrapper = styled.div`
  width: 56px;
  height: 19px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
