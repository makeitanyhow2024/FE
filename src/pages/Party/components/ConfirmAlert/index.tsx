import React, { useState } from 'react';
import { StyledConfirmAlert } from './styles';

const ConfirmAlert = () => {
  return (
    <StyledConfirmAlert>
      <div>
        {}
        모임에 참석하시겠습니까?
      </div>

      <div>네 아니오</div>
    </StyledConfirmAlert>
  );
};
export default ConfirmAlert;
