import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  StyledContainer,
  StyledMyPageHeader,
  StyledMyPageHeaderBackButton,
  StyledMyPageHeaderTitle,
  StyledMyDataContainer,
  StyledMyDataTextContainer,
  StyledMyDataText,
  StyledMyDataEdit,
  StyledMyPartyContainer,
  StyledMyPageHeaderTitleWrapper,
  StyledMyPartyTitleWrapper,
} from 'pages/MyPage/styles';
import Footer from 'components/Footer';
import { images } from 'assets/images';
import { myDataStatus } from './stores';

const Home = () => {
  const navigate = useNavigate();
  // const [ myData, setMyData ] = useRecoilState(myDataStatus);

  return (
    <StyledContainer>
      <StyledMyPageHeader>
        <StyledMyPageHeaderBackButton>
          <img
            width={'32px'}
            height={'32px'}
            src={images.leftArrow}
            alt="back"
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
        </StyledMyPageHeaderBackButton>
        <StyledMyPageHeaderTitleWrapper>
          <StyledMyPageHeaderTitle>마이페이지</StyledMyPageHeaderTitle>
        </StyledMyPageHeaderTitleWrapper>
      </StyledMyPageHeader>
      <StyledMyDataContainer>
        <img
          width={'125px'}
          height={'125px'}
          src={images.yellowSmileFace}
          alt="back"
        />
        <StyledMyDataTextContainer>
          <StyledMyDataText>혼자먹고싶은사람</StyledMyDataText>
          <StyledMyDataEdit onClick={() => navigate('/my-page/edit')}>
            내 정보 수정 &gt;
          </StyledMyDataEdit>
        </StyledMyDataTextContainer>
      </StyledMyDataContainer>

      <StyledMyPartyContainer>
        <StyledMyPartyTitleWrapper>내파티 &gt;</StyledMyPartyTitleWrapper>
      </StyledMyPartyContainer>
      <Footer />
    </StyledContainer>
  );
};

export default Home;
