import { ArrowForward } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const SliderBox = ({ h3, p, l1, l2, l3, l4, img, link }) => {
  return (
    <div className="sliderbox">
      <div className="detail">
        <div className="head">
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
        <div className="points">
          <img src="/images/check.png" alt="check" />
          <p>{l1}</p>
        </div>
        <div className="points">
          <img src="/images/check.png" alt="check" />
          <p>{l2}</p>
        </div>
        <div className="points">
          <img src="/images/check.png" alt="check" />
          <p>{l3}</p>
        </div>
        <div className="points">
          <img src="/images/check.png" alt="check" />
          <p>{l4}</p>
        </div>
        <div className="link">
          <Link to={link}>Learn More</Link>
          <ArrowForward />
        </div>
      </div>
      <div className="img">
        <img src={img} alt="slider" />
      </div>
    </div>
  );
};

export default SliderBox;
