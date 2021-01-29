import React from "react";
import "../App.css";

const Cards = ({ heading, paragraph }) => {
  return (
    <div className="column">
      <div className="card">
        <h4>
          <b id='heading'>{heading}</b> <img src="https://img.icons8.com/android/18/000000/info.png" alt="info"/>
        </h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Cards;
