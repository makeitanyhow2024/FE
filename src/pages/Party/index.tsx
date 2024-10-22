import React, { useState } from 'react';
import { StyledPartyContainer } from './styles';
import { images } from 'assets/images';
import { GetPartyListData } from './models/party';
import Footer from 'components/Footer';
import { useNavigate } from 'react-router-dom';

const Party = () => {
  // 화면 사이즈 : 371 * 808 // 56 +712 = 768 // 375 * 768+44 772
  // padding : 8px 14px 0 14px / 검색, 리스트 부분은 패딩 양옆 추가로 10px
  // 목록 api구조

  // 상세페이지 css
  const navigate = useNavigate();

  const partyList: GetPartyListData[] = [
    {
      id: 1,
      name: '문래 맛집 뿌시기',
      description:
        '맛집 불모지인 이곳에 새로운 쌀국수 집이 오픈했다는 희소식! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxpeople: 6,
      duedate: new Date('2024.10.10'),
      status: '',
      bab_category: '베트남 음식',

      party_leader: 1001,
      participants: [
        { user_id: 1003, user_name: '휴런이' },
        { user_id: 1008, user_name: '휴휴휴' },
      ],
    },
    {
      id: 2,
      name: '문래 맛집 뿌시기',
      description:
        '맛집 불모지인 이곳에 새로운 쌀국수 집이 오픈했다는 희소식! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxpeople: 6,
      duedate: new Date('2024.10.10'),
      status: '',
      bab_category: '베트남 음식',

      party_leader: 1001,
      participants: [
        { user_id: 1003, user_name: '무지' },
        { user_id: 1008, user_name: '네오' },
        { user_id: 1008, user_name: '고양이' },
      ],
    },
    {
      id: 3,
      name: '문래 맛집 뿌시기',
      description:
        '맛집 불모지인 이곳에 새로운 쌀국수 집이 오픈했다는 희소식! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxpeople: 6,
      duedate: new Date('2024.10.10'),
      status: '',
      bab_category: '베트남 음식',

      party_leader: 1001,
      participants: [{ user_id: 1003, user_name: '먹보' }],
    },
    {
      id: 4,
      name: '문래 맛집 뿌시기',
      description:
        '맛집 불모지인 이곳에 새로운 쌀국수 집이 오픈했다는 희소식! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxpeople: 6,
      duedate: new Date('2024.10.10'),
      status: '',
      bab_category: '베트남 음식',

      party_leader: 1001,
      participants: [
        { user_id: 1003, user_name: '강아지' },
        { user_id: 1003, user_name: '어피치' },
      ],
    },
    {
      id: 5,
      name: '문래 맛집 뿌시기',
      description:
        '맛집 불모지인 이곳에 새로운 쌀국수 집이 오픈했다는 희소식! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxpeople: 6,
      duedate: new Date('2024.10.10'),
      status: '',
      bab_category: '베트남 음식',

      party_leader: 1001,
      participants: [{ user_id: 1003, user_name: '피카쥬' }],
    },
    {
      id: 6,
      name: '문래 맛집 뿌시기',
      description:
        '맛집 불모지인 이곳에 새로운 쌀국수 집이 오픈했다는 희소식! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxpeople: 6,
      duedate: new Date('2024.10.10'),
      status: '',
      bab_category: '베트남 음식',

      party_leader: 1001,
      participants: [],
    },
  ];

  return (
    <StyledPartyContainer className="party-container">
      <div className="party-title">
        <img className="back" src={images.leftArrow} alt="back" />
        <h1>어떻게든 모이겠지</h1>
        <img className="title-icon" src={images.yellowFace} alt="icon" />
      </div>

      <div className="search">
        <input type="text" placeholder="Search..." />
        <img src={images.search} alt="search" />
      </div>

      <div className="party-list-container">
        {partyList.map((party, i) => (
          <div
            key={i}
            className="party-container"
            onClick={() => navigate('/party-detail')}
          >
            {/* <div key={party.id}> */}

            <div className="party-img">{/* <img alt="img" /> */}</div>

            <div className="party-content">
              <div className="party-description">
                <h2>{party.name}</h2>
                <div>{party.description}</div>
              </div>

              <div className="party-info">
                {/* 여기 아래 날짜는 모집 개시일인지 모집 마감일인지, get api에 파티리더 name추가해야 함, 임시로 id로 넣었음 */}
                <div>
                  {party.date} | {party.party_leader}
                </div>
                <div>참여 {party.participants.length}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </StyledPartyContainer>
  );
};

export default Party;
