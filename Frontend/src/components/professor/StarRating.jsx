import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, onRatingChange }) => {
  const handleClick = (value) => {
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <FaStar
          key={value}
          color={value <= rating ? "#ffc107" : "#e4e5e9"}
          size={30}
          onClick={() => handleClick(value)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
