import React, { useState } from 'react';
import { StyledCreateContent, StyledPartyCreateContainer } from './styles';
import { images } from 'assets/images';
import PartyHeader from '../components/PartyHeader';
import Footer from 'components/Footer';
import Button from 'common/button';
import ConfirmAlert from '../components/ConfirmAlert';
import { TextButton2 } from 'common/textButton';

const CreateParty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [titleText, setTitleText] = useState(''); // title text
  const [descriptionText, setDescriptionText] = useState(''); // description text
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(''); // 모임 날짜
  const [dueDate, setDueDate] = useState(''); // 모집 마감일
  const [maxPeople, setMaxPeople] = useState(''); // 모임 인원

  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // 달력

  const category = ['한식', '중식', '일식', '양식'];

  const onClickDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // title, description 텍스트 변경 함수
  const onChangeText = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    text: 'title' | 'description',
  ) => {
    const newText = e.target.value;

    if (text === 'title' && newText.length <= 50) {
      setTitleText(newText); // 글자수 최대 50자
    }
    if (text === 'description' && newText.length <= 50) {
      setDescriptionText(newText); // 글자수 최대 50자
    }
  };

  // 모임 날짜 선택 함수
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  // 모집 마감일 선택 함수
  const onChangeDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };

  // 모임 인원 선택 함수
  const onChangeMaxPeople = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMaxPeople(e.target.value);
  };

  // 숫자 1부터 999까지 배열
  const generateNumberOptions = () => {
    const options = [];
    for (let i = 1; i <= 999; i++) {
      options.push(i);
    }
    return options;
  };

  // 달력 open제어
  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  return (
    <StyledPartyCreateContainer>
      <PartyHeader headerText={'신규 파티 생성'} img={images.yellowFace} />

      <StyledCreateContent>
        <div className="drop-down">
          <div className="category" onClick={onClickDropdown}>
            <div className={`${selectedOption ? 'blackColor' : ''}`}>
              {selectedOption || '카테고리를 선택하세요'}
            </div>

            <img src={images.downArrow} alt="downArrow" />
          </div>
          {isOpen && (
            <ul className="drop-down-open">
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
            <input
              type="text"
              placeholder="타이틀을 입력하세요."
              value={titleText}
              onChange={(e) => onChangeText(e, 'title')}
            />
            <div className="char-count-title">{titleText.length}/50</div>
          </div>
        </div>

        <div className="description content">
          <span>내용</span>
          <div>
            <textarea
              placeholder="내용을 입력하세요."
              value={descriptionText}
              onChange={(e) => onChangeText(e, 'description')}
            />
            <div className="char-count-description">
              {descriptionText.length}/50
            </div>
          </div>
        </div>

        <div className="date content">
          <span>모임일시</span>
          <div className="date-container">
            <input type="date" value={selectedDate} onChange={onChangeDate} />
          </div>
        </div>
        <div className="due-date content">
          <span>모집 마감일</span>
          <div className="date-container">
            <input type="date" value={dueDate} onChange={onChangeDueDate} />
          </div>
        </div>
        <div className="max content">
          <span>모임 인원</span>
          <div className="date-container">
            <select
              className={`${maxPeople ? '' : 'placeholder'}`}
              value={maxPeople}
              onChange={onChangeMaxPeople}
            >
              <option className="placeholder" value="" disabled>
                인원을 선택해 주세요.
              </option>
              {generateNumberOptions().map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="restaurant-detail content">
          <span>맛집 상세</span>
          <div>
            <TextButton2
              className="restaurant-detail"
              onClick={() => console.log('')}
              children="맛집 정보 불러오기 &gt;"
              color="#fff"
            />
          </div>
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
