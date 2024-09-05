import React from 'react';
import styled from 'styled-components';

// 라디오 버튼의 이미지 스타일링
const RadioButtonContainer = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  // 원형 라디오 버튼 디자인
  .radio-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;

    ${(props) =>
      props.selected
        ? `
        background-color: yellow;
        border: 2px solid black;
        `
        : `
        background-color: #f9f6e8;
        border: 2px solid black;
        `}
  }

  .radio-text {
    font-size: 16px;
    color: black;
  }
`;

interface RadioButtonProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  text,
  selected,
  onClick,
}) => {
  return (
    <RadioButtonContainer selected={selected} onClick={onClick}>
      <div className="radio-circle" />
      <span className="radio-text">{text}</span>
    </RadioButtonContainer>
  );
};

export default RadioButton;
