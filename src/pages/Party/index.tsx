import React, { useState } from 'react';
import Button from 'common/button';
import {
  TextButton,
  TextButton2,
  TextButton3,
  TextButton4,
} from 'common/textButton';
import RadioButton from 'common/radioButton';

const Party = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const textButtonClick = () => {
    console.log('클릭');
  };
  return (
    <>
      <div>파티 화면</div>
      <div>
        <Button text="Default Button" />
        <Button
          text="Button"
          width="120px"
          height="60px"
          backgroundColor="#FFF5D1"
          color="#000"
        />
        <Button
          text="Button"
          width="100px"
          height="40px"
          backgroundColor="#333"
          color="#FFF9E5"
        />
        <Button
          text="Button"
          width="100px"
          height="40px"
          backgroundColor="#D40101"
          color="#FFF9E5"
        />
        <div>
          <TextButton onClick={textButtonClick}>Cancel</TextButton>
        </div>
        <div>
          <TextButton2 onClick={textButtonClick}>확인</TextButton2>
        </div>
        <div>
          <TextButton3 onClick={textButtonClick}>확인</TextButton3>
        </div>
        <div>
          <TextButton4 onClick={textButtonClick}>확인</TextButton4>
        </div>

        <div>
          <RadioButton
            text="Option 1"
            selected={selectedValue === 'option1'}
            onClick={() => setSelectedValue('option1')}
          />
          <RadioButton
            text="Option 2"
            selected={selectedValue === 'option2'}
            onClick={() => setSelectedValue('option2')}
          />
        </div>
      </div>
    </>
  );
};

export default Party;
