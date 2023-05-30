import React from 'react';
import './rating.css'; // Optional: Add a CSS file for styling

const Rating = ({ rating, handleClick }) => {
  return (
    <div className="rating-star">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'filled' : 'empty'}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
