import React, { useState } from 'react';
import { images } from 'assets/images';
import { useNavigate } from 'react-router-dom';

interface typeProps {
  headerText: string;
  img: any;
  url?: string;
}
const RestaurantHeader = ({ headerText, img, url }: typeProps) => {
  const navigate = useNavigate();

  return (
    <div className="party-title">
      <img
        className="back"
        src={images.leftArrow}
        alt="back"
        onClick={() => navigate(-1)}
      />
      <h1>{headerText}</h1>
      <img
        className={`title-icon ${url ? 'url' : ''}`}
        src={img}
        alt="icon"
        onClick={() => url && navigate(`${url}`)}
      />
    </div>
  );
};

export default RestaurantHeader;
