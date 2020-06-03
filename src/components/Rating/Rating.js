import React from "react";
import "./style.css";

export default function Rating({onRating}) {

  const handleRating = (event) => {
    const rate = 2;
    const ratingValue = rate * event.target.value;
    onRating(ratingValue);
  }
   
  return (
    <div className="rating">
      <span>Filter by rating: </span>
      <form id="form" className="star-rating star-5" onChange={handleRating}>
        <input type="radio" name="rating" value="1" />
        <i></i>
        <input type="radio" name="rating" value="2" />
        <i></i>
        <input type="radio" name="rating" value="3" />
        <i></i>
        <input type="radio" name="rating" value="4" />
        <i></i>
        <input type="radio" name="rating" value="5" />
        <i></i>
      </form>
    </div>
  );
}
