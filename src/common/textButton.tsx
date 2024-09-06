// TextButton.tsx
import React from 'react';
import styled from 'styled-components';

interface TextButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledTextButton = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1%;
  color: #555;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

const TextButton: React.FC<TextButtonProps> = ({ onClick, children }) => {
  return <StyledTextButton onClick={onClick}>{children}</StyledTextButton>;
};

export { TextButton };

// TextButton.tsx
interface TextButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledTextButton2 = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1%;
  color: #ffc700;
  cursor: pointer;
  text-shadow:
    -1px 0 black,
    0 1px black,
    1px 0 black,
    0 -1px black;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const TextButton2: React.FC<TextButtonProps> = ({ onClick, children }) => {
  return <StyledTextButton2 onClick={onClick}>{children}</StyledTextButton2>;
};

export { TextButton2 };

// src/StyledComponents.tsx
// TextButton.tsx
interface TextButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const StyledTextButton3 = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1%;
  color: #ff0000;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
    z-index: -1;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
const TextButton3: React.FC<TextButtonProps> = ({ onClick, children }) => {
  return <StyledTextButton2 onClick={onClick}>{children}</StyledTextButton2>;
};
export { TextButton3 };

// src/StyledComponents.tsx

export const StyledTextButton4 = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1%;
  color: #999999;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
const TextButton4: React.FC<TextButtonProps> = ({ onClick, children }) => {
  return <StyledTextButton4 onClick={onClick}>{children}</StyledTextButton4>;
};
export { TextButton4 };
