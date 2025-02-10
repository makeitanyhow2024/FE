import React, { useState } from 'react';
import { StyledConfirmAlert } from './styles';
import { useRecoilState } from 'recoil';
import { isPartyDetailClickedState } from 'pages/Party/stores';
import { TextButton, TextButton2 } from 'common/textButton';

const ConfirmAlert = () => {
  const [isClicked, setIsClicked] = useRecoilState(isPartyDetailClickedState);

  const onClickResponse = () => {
    setIsClicked(false);
    // 내 파티 목록에 추가 api
    // 내 파티 목록에서 삭제 api
    // 파티삭제 api
  };

  return (
    <StyledConfirmAlert>
      <div className="alert-container">
        <div className="question">
          <strong>"{}"</strong> 모임에 참석하시겠습니까?
        </div>

        <div className="response">
          <TextButton2 className={'yes'} onClick={onClickResponse}>
            네
          </TextButton2>
          <TextButton className={'no'} onClick={onClickResponse} color="#000">
            아니오
          </TextButton>
        </div>
      </div>
    </StyledConfirmAlert>
  );
};
export default ConfirmAlert;
