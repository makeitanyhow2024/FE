import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  width?: string;
  height?: string;
  backgroundColor?: '#FFC700' | '#FFF5D1' | '#333' | '#D40101';
  color?: '#000' | '#FFF9E5';
}

const StyledButton = styled.button<
  Pick<ButtonProps, 'width' | 'height' | 'backgroundColor' | 'color'>
>`
  width: ${(props) => props.width || '91px'};
  height: ${(props) => props.height || '48px'};
  background-color: ${(props) => props.backgroundColor || '#FFC700'};
  border-radius: 24px;
  border: 4px solid black;
  box-shadow: 4px 4px 0px 0px #000000;

  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  width,
  height,
  backgroundColor,
  color,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
