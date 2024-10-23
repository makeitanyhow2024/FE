import React, { useState } from 'react';
import { StyledCreateContent, StyledPartyCreateContainer } from './styles';
import { images } from 'assets/images';
import PartyHeader from '../components/PartyHeader';
import Footer from 'components/Footer';
import Button from 'common/button';
import ConfirmAlert from '../components/ConfirmAlert';

const CreateParty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [isClicked, setIsClicked] = useState(false);

  const category = ['한식', '중식', '일식', '양식'];

  const onClickDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <StyledPartyCreateContainer>
      <PartyHeader headerText={'신규 파티 생성'} img={images.yellowFace} />

      <StyledCreateContent>
        <div className="drop-down">
          <div onClick={onClickDropdown}>
            <div className={selectedOption ? 'blackColor' : ''}>
              {selectedOption || '카테고리를 선택하세요'}
            </div>

            <img src={images.downArrow} alt="downArrow" />
          </div>
          {isOpen && (
            <ul>
              {category.map((option) => (
                <li key={option} onClick={() => onClickOption(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="title content">
          <span>타이틀</span>
          <div>
            <input type="text" placeholder="타이틀을 입력하세요." />
          </div>
        </div>

        <div className="description content">
          <span>내용</span>
          <div>
            <textarea placeholder="내용을 입력하세요." />
          </div>
        </div>

        <div className="date content">모임일시</div>
        <div className="due-date content">모집 마감일</div>
        <div className="max content">모임 인원</div>
        <div className="restaurant-detail content">
          <span>맛집 상세</span>
          <div></div>
        </div>

        <Button
          text="파티 생성"
          width="265px"
          height="47px"
          backgroundColor="#FFC700"
          color="#000"
          onClick={() => setIsClicked(true)}
        />

        {isClicked && (
          <div className="party-modal">
            <ConfirmAlert />
          </div>
        )}
      </StyledCreateContent>

      <Footer />
    </StyledPartyCreateContainer>
  );
};

export default CreateParty;
