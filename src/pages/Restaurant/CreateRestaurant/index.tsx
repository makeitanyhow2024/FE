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

  const restaurantData: GetRestaurantDetailListData[] = [
    {
      id: 1,
      name: '식당001',
      bab_category: '한식',
      map_url: 'www.naver.com',
      parties: [
        { party_id: 1000, party_img: 'www.naver.com' },
        { party_id: 1000, party_img: 'www.naver.com' },
      ],
    },
  ];

  const [isClicked, setIsClicked] = useRecoilState(
    isRestaurantCreateClickedState,
  );
  const onClickRestaurant = () => {
    setIsClicked(true);
  };
  const onClickSelectIcon = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 전파 중지
    navigate('/restaurant/selecticon'); // 네비게이션 수행
  };

  return (
    <StyledRestaurantCreateContainer className="restaurant-detail-container">
      <RestaurantHeader
        headerText={restaurantData[0].name}
        img={images.yellowFace}
      />

      <div className="restaurant-detail-img">{}</div>

      <div className="category">
        <div>
          <span>뭘 먹어야 소문이나?</span>
        </div>
      </div>

      <div className="naver-url">
        네이버 URL*
        <input type="text" placeholder="Text field" />
        <img src={images.yellowFace} alt="check" />
      </div>

      <div className="restaurant-name">
        식당 이름
        <input type="text" placeholder="Text field" />
      </div>

      <div className="restaurant-category">
        카테고리*
        <input type="text" placeholder="Text field" />
        <img src={images.downArrow} alt="showlist" />
      </div>

      <div className="restaurant-add-icon">
        아이콘*
        <div onClick={(event) => onClickSelectIcon(event)}>
          <div className="add-img">{/* <img alt="img" /> */}</div>
        </div>
      </div>

      <div className="restaurant-create-done-btn">
        <img src={images.smilePink} alt="img" />
        <div onClick={() => onClickRestaurant()}>등록하기</div>
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
