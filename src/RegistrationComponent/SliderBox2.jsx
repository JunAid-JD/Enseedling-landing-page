import React from "react";
import { ArrowForward } from "@mui/icons-material";

const SliderBox2 = ({ h3, p, l1, l2, l3, l4, img }) => {
  return (
    <div className="sliderbox">
      <div className="img">
        <img src={img} alt="slider" />
      </div>
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
        {/* <div className="link">
          <a href="/">Learn More</a>
          <ArrowForward />
        </div> */}
      </div>
    </div>
  );
};

export default SliderBox2;
