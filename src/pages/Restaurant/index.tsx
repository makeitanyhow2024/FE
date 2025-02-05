import Footer from 'components/Footer';
import React from 'react';
import { images } from 'assets/images';
import RestaurantHeader from './components/RestaurantHeader';
import { GetRestaurantListData } from './models/restaurant';
import { StyledRestaurantContainer } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const Restaurant = () => {
  const navigate = useNavigate();

  const restaurantList: GetRestaurantListData[] = [
    {
      id: 1,
      name: '식당001',
      bab_category: '한식',
    },
    {
      id: 2,
      name: '식당002',
      bab_category: '한식',
    },
    {
      id: 3,
      name: '식당003',
      bab_category: '양식',
    },
    {
      id: 4,
      name: '식당004',
      bab_category: '일식',
    },
  ];

  return (
    <StyledRestaurantContainer className="restaurant-container">
      <RestaurantHeader
        headerText={'뭘 먹어야 소문이나?'}
        img={images.yellowFace}
        url={'/restaurant/detail'}
      />

      <div className="search">
        <input type="text" placeholder="Search..." />
        <img src={images.search} alt="search" />
      </div>

      <div className="restaurant-list-container">
        {restaurantList.map((restaurant, i) => (
          <div
            key={i}
            className="restaurant-container"
            //onClick={() => navigate('/restaurant/detail')}
          >
            {/* <div key={party.id}> */}

            <div className="restaurant-img">{/* <img alt="img" /> */}</div>

            <div className="restaurant-content">
              <div className="restaurant-description">
                <h2>{restaurant.name}</h2>
                <h2>{restaurant.bab_category}</h2>
              </div>

              <div className="restaurant-info">
                <div onClick={() => navigate('/restaurant/detail')}>'참여'</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="restaurant-create">
        <div onClick={() => navigate('/restaurant/create')}>
          <img src={images.loading} alt="search" />
        </div>
      </div>

      <Footer />
    </StyledRestaurantContainer>
  );
};

export default Restaurant;
