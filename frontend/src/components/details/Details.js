import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { RiHeartAddFill } from 'react-icons/ri';
import Rating from '../Rating/Rating';
import Browsers from '../browser/Browser';

function Details({ data, dataBr }) {
  const [rating, setRating] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the popup

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const { id } = useParams();

  let card;

  for (let i = 0; i < data.length; i++) {
    if (id == data[i].id) {
      card = data.filter((ele) => ele.id == id);
    }
  }

  for (let j = 0; j < dataBr.length; j++) {
    if (id == dataBr[j].id) {
      card = dataBr.filter((ele) => ele.id == id);
    }
  }

  const fetchFav = () => {
    axios
      .post(`http://localhost:8002/fav`, card[0])
      .then((result) => {
        console.log(result.data);
        setShowPopup(true); // Show the popup after successful post
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='c-d'>
        <div className='imgd'>
          <img src={card[0].thumbnail} className='c-image' />
          <Rating rating={rating} handleClick={handleRatingClick} />
          <button
            onClick={fetchFav}
            style={{
              border: '0',
              backgroundColor: 'transparent',
              paddingLeft: '90%',
              paddingTop: '10%',
            }}
          >
            <RiHeartAddFill size='60px' filter='invert(100%)' />
          </button>
        </div>
        <div className='column'>
          <h2 className='title'>
            <strong>{card[0].title}</strong>{' '}
          </h2>
          <br />
          <br />
          <p>
            <h3 className='q'>
              <strong>what is this game?! </strong>{' '}
            </h3>{' '}
            <h3>{card[0].short_description}</h3>
          </p>
        </div>
      </div>
      {showPopup && (
        <div className='popup'>
          <p>Post successful!</p>
        </div>
      )}
      {dataBr?.length > 0 && <Browsers dataBr={dataBr} />}
    </>
  );
}

export default Details;
