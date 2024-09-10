import React from "react";

const Card = ({ icon, heading, para, image }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="body">
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
      <div className="img">
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default Card;
