import React, { useState } from 'react';
import { StyledPartyContainer } from './styles';
import { images } from 'assets/images';
import { GetPartyListData } from './models/party';
import Footer from 'components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import PartyHeader from './components/PartyHeader';

const Party = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어

  const partyList: GetPartyListData[] = [
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

      party_leader: 1001,
      babName: '',
      participants: 2,
    },
    {
      id: 2,
      name: '강남 맛집 뿌시기',
      description: '강남 먹으러 먹으러! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxPeople: 6,
      dueDate: '2024.10.10',
      partyStatus: '',
      babCategory: '베트남 음식',

      party_leader: 1001,
      babName: '',
      participants: 3,
    },
    {
      id: 3,
      name: '동작 맛집 뿌시기',
      description:
        '맛집 불모지인 이곳에 새로운 쌀국수 집이 오픈했다는 희소식! 뿌시러 가실 분 구함',
      date: '2024.10.10',
      maxPeople: 6,
      dueDate: '2024.10.10',
      partyStatus: '',
      babCategory: '일본 음식',

      party_leader: 1001,
      babName: '',
      participants: 1,
    },
    {
      id: 4,
      name: '강북 맛집 뿌시기',
      description: '마바사아 자',
      date: '2024.10.10',
      maxPeople: 6,
      dueDate: '2024.10.10',
      partyStatus: '',
      babCategory: '남미 음식',

      party_leader: 1001,
      babName: '',
      participants: 4,
    },
    {
      id: 5,
      name: '서초 맛집 뿌시기',
      description: '가나다라',
      date: '2024.10.10',
      maxPeople: 6,
      dueDate: '2024.10.10',
      partyStatus: '',
      babCategory: '이탈리아 음식',

      party_leader: 1001,
      babName: '',
      participants: 0,
    },
    {
      id: 6,
      name: '강남 맛집 뿌시기',
      description: '가나다',
      date: '2024.10.10',
      maxPeople: 6,
      dueDate: '2024.10.10',
      partyStatus: '',
      babCategory: '중국 음식',

      party_leader: 1001,
      babName: '',
      participants: 2,
    },
    {
      id: 7,
      name: '동작 맛집 뿌시기',
      description: '가나',
      date: '2024.10.10',
      maxPeople: 6,
      dueDate: '2024.10.10',
      partyStatus: '',
      babCategory: '이탈리아 음식',

      party_leader: 1001,
      babName: '',
      participants: 1,
    },
    {
      id: 8,
      name: '강남 맛집 뿌시기',
      description: '강남 맛집가기',
      date: '2024.10.10',
      maxPeople: 6,
      dueDate: '2024.10.10',
      partyStatus: '',
      babCategory: '베트남 음식',

      party_leader: 1001,
      babName: '',
      participants: 3,
    },
  ];

  // 검색어 입력시 setSearchTerm 저장해주는 함수
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // 띄어쓰기 없애주는 함수
  const normalizeString = (str: string) => {
    return str.replace(/\s+/g, '').toLowerCase();
  };

  // 검색어에 맞게 필터링 해주는 함수
  const filteredPartyList = partyList.filter((party) => {
    const normalizedSearchTerm = normalizeString(searchTerm);
    const normalizedName = normalizeString(party.name);
    const normalizedDescription = normalizeString(party.description);

    return (
      normalizedName.includes(normalizedSearchTerm) ||
      normalizedDescription.includes(normalizedSearchTerm)
    );
  });

  return (
    <StyledPartyContainer className="party-container">
      <PartyHeader
        headerText={'어떻게든 모이겠지'}
        img={images.yellowFace}
        url={'/party/create'}
      />

      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img src={images.search} alt="search" />
      </div>

      <div className="party-list-container">
        {filteredPartyList.map((party, i) => (
          <div
            key={i}
            className="party-container"
            onClick={() => navigate('/party/detail')}
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
                <div>참여 {party.participants}</div>
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
