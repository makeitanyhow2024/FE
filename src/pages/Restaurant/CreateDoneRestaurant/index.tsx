import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantHeader from '../components/RestaurantHeader';
import { GetRestaurantDetailListData } from '../models/restaurant';
import { images } from 'assets/images';
import Footer from 'components/Footer';
import { StyledRestaurantSelectIconContainer } from './styles';
import { useRecoilState } from 'recoil';
import { isRestaurantCreateClickedState } from '../stores';
import ConfirmAlert from '../ConfirmAlert';

const DetailRestaurant = () => {
  const navigate = useNavigate();

  const onClickReturnToList = () => {
    navigate('/restaurant');
  };
  const onClickCreateParty = () => {
    navigate('/party');
  };
  const [activeIconIndex, setActiveIconIndex] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = (index: number) => {
    setActiveIconIndex(index);
  };

  const onClickApply = () => {
    if (activeIconIndex !== null) {
      setIsClicked(true);
      // 추가적인 동작 수행 가능
    } else {
      alert('아이콘을 선택해주세요!');
    }
  };
  return (
    <StyledRestaurantSelectIconContainer className="restaurant-detail-container">
      <RestaurantHeader
        headerText={'뭘 먹어야 소문이나?'}
        img={images.yellowFace}
        url={'/restaurant/createdone'}
      />

      <div className="restaurant-create-done-btn">
        <img src={images.smilePink} alt="img" />
        <div onClick={() => onClickReturnToList()}>목록으로 돌아가기</div>
      </div>

      <div className="restaurant-create-done-btn">
        <img src={images.smilePink} alt="img" />
        <div onClick={() => onClickCreateParty()}>파티 생성하기</div>
      </div>

      {isClicked && (
        <div className="restaurant-modal">
          <ConfirmAlert />
        </div>
      )}

      <Footer />
    </StyledRestaurantSelectIconContainer>
  );
};
export default DetailRestaurant;
