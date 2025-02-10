import React from 'react';
import { StyledFooter, StyledButton } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  return (
    <StyledFooter className="footer">
      <StyledButton
        className={location.pathname === '/' ? 'clicked' : ''}
        onClick={() => navigate('/')}
      >
        HOME
      </StyledButton>
      <StyledButton
        className={
          location.pathname === '/party' ||
          location.pathname === '/party/detail' ||
          location.pathname === '/party/create'
            ? 'clicked'
            : ''
        }
        onClick={() => navigate('/party')}
      >
        파티
      </StyledButton>
      <StyledButton
        className={location.pathname === '/restaurant' ? 'clicked' : ''}
        onClick={() => navigate('/restaurant')}
      >
        맛집
      </StyledButton>
      <StyledButton
        className={location.pathname === '/my-page' ? 'clicked' : ''}
        onClick={() => navigate('/my-page')}
      >
        MY
      </StyledButton>
    </StyledFooter>
  );
};

export default Footer;
