import React from 'react';
import { StyledFooter, StyledButton } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledButton>HOME</StyledButton>
      <StyledButton>파티</StyledButton>
      <StyledButton>맛집</StyledButton>
      <StyledButton>MY</StyledButton>
    </StyledFooter>
  );
};

export default Footer;
