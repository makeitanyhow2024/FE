import React from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantHeader from '../components/RestaurantHeader';
import { GetRestaurantDetailListData } from '../models/restaurant';
import { StyledRestaurantDetailContainer } from './styles';
import { images } from 'assets/images';
import Footer from 'components/Footer';

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

  return (
    <StyledRestaurantDetailContainer className="restaurant-detail-container">
      <RestaurantHeader
        headerText={restaurantData[0].name}
        img={images.share}
      />

      <div className="restaurant-detail-img">{}</div>

      <div className="category">
        <div>
          <span>카테고리</span>
          <span className="hashtag">#{restaurantData[0].bab_category}</span>
        </div>

        <span>참여 {restaurantData[0].parties.length}</span>
      </div>

      <div className="detail-info">
        <div className="detail-title">
          <h2>모임상세정보</h2>
          <div onClick={() => navigate('/restaurant')}>
            맛집 정보 보기 {'>'}
          </div>
        </div>

        <div className="detail-content">
          <div>장소: {restaurantData[0].map_url}</div>
          <div>카테고리: {restaurantData[0].bab_category}</div>
        </div>
      </div>

      <div className="party-description">
        <img src={images.message2} alt="message2" />
      </div>

      <Footer />
    </StyledRestaurantDetailContainer>
  );
};
export default DetailRestaurant;
