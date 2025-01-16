import React from 'react';
import { StyledPartyDetailContainer } from './styles';
import Footer from 'components/Footer';
import { images } from 'assets/images';
import { GetPartyDetailData } from '../models/party';
import { useRecoilState } from 'recoil';
import { isPartyDetailClickedState } from '../stores';
import ConfirmAlert from '../components/ConfirmAlert';
import { useNavigate } from 'react-router-dom';
import PartyHeader from '../components/PartyHeader';

const DetailPage = () => {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useRecoilState(isPartyDetailClickedState);
  const data: GetPartyDetailData[] = [
    {
      id: 1,
      name: '문래 맛집 뿌시기',
      description:
        '맛집 불모지인 이곳에 새로운 쌀국수 집이 오픈했다는 희소식! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxPeople: 6,
      dueDate: '2024.10.10',
      partyStatus: '',
      babCategory: '베트남 음식',
      icon_id: 1,
      babName: '포메인',
      party_leader: 1001,
      participants: 2,
    },
  ];

  const onClickParty = () => {
    setIsClicked(true);
  };

  return (
    <StyledPartyDetailContainer className="party-detail-container">
      <PartyHeader headerText={data[0].name} img={images.share} />

      <div className="party-detail-img">{}</div>

      <div className="category">
        <div>
          <span>카테고리</span>
          <span className="hashtag">#{data[0].babCategory}</span>
        </div>

        <span>참여 {data[0].participants}</span>
      </div>

      <div className="detail-info">
        <div className="detail-title">
          <h2>모임상세정보</h2>
          <div onClick={() => navigate('/restaurant')}>
            맛집 정보 보기 {'>'}
          </div>
        </div>

        <div className="detail-content">
          <div>장소: {}</div>
          <div>일시: {data[0].date}</div>
          <div>모집 마감일: data[0].dueDate</div>
          <div>모집 최대 인원: {data[0].maxPeople}명</div>
        </div>
      </div>

      <div className="party-description">
        <div className="text">{data[0].description}</div>
        <img src={images.message2} alt="message2" />
      </div>

      <div className="party-btn">
        <img src={images.smilePink} alt="img" />
        <div onClick={() => onClickParty()}>참석하기</div>
      </div>

      {isClicked && (
        <div className="party-modal">
          <ConfirmAlert />
        </div>
      )}

      <Footer />
    </StyledPartyDetailContainer>
  );
};

export default DetailPage;
