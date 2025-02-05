import React from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantHeader from '../components/RestaurantHeader';
import { GetRestaurantDetailListData } from '../models/restaurant';
import { images } from 'assets/images';
import Footer from 'components/Footer';
import { StyledRestaurantCreateContainer } from './styles';
import { useRecoilState } from 'recoil';
import { isRestaurantCreateClickedState } from '../stores';
import ConfirmAlert from '../ConfirmAlert';

const DetailRestaurant = () => {
  const navigate = useNavigate();

  const isClicked = true;
  const onClickIcon = () => {
    
  };

  
  return (
    <StyledRestaurantCreateContainer className="restaurant-detail-container">
      

      <div className="restaurant-detail-img">{}</div>

      <div className="category">
        <div>
          <span>뭘 먹어야 소문이나?</span>
        </div>
      </div>


      <div className="restaurant-add-icon">
        <div className="add-img">{/* <img alt="img" /> */}</div>
      </div>

      <div className="restaurant-create-done-btn">
        <img src={images.smilePink} alt="img" />
        <div onClick={() => onClickIcon()}>적용하기</div>
      </div>

      {isClicked && (
        <div className="restaurant-modal">
          <ConfirmAlert />
        </div>
      )}

      <Footer />
    </StyledRestaurantCreateContainer>
  );
};
export default DetailRestaurant;
