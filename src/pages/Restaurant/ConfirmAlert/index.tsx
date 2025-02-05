import React, { useState } from 'react';
import { StyledConfirmAlert } from './styles';
import { useRecoilState } from 'recoil';

import { TextButton, TextButton2 } from 'common/textButton';
import { isRestaurantCreateClickedState } from '../stores';
import { useNavigate } from 'react-router-dom';

const ConfirmAlert = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useRecoilState(
    isRestaurantCreateClickedState,
  );

  const onClickResponse = () => {
    setIsClicked(false);
    // 내 파티 목록에 추가 api
    // 내 파티 목록에서 삭제 api
    // 파티삭제 api
  };

  const onClickYes = () => {
    setIsClicked(false);
    navigate('/restaurant/createdone'); // 네비게이션 실행
  };

  const onClickNo = () => {
    setIsClicked(false);
  };
  return (
    <StyledConfirmAlert>
      <div className="alert-container">
        <div className="question">
          <strong>"{}"</strong> 밥집을 등록하시겠습니까?
        </div>

        <div className="response">
          <TextButton2 className={'yes'} onClick={onClickYes}>
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
