import React from "react";
import Card from "./Card";

const Corporate = () => {
  return (
    <div className="corporate">
      <div className="head">
        <h1>Our corporate values</h1>
        <p>Our Company Corporate values and professional Ethics</p>
      </div>
      <div className="cards">
        {/* <Card
          icon={"/images/cardicon1.png"}
          image={"/images/cardimg1.png"}
          heading={"Client Confidentiality"}
          para={
            "We respect your privacy and are committed to securing the confidentiality of your information. "
          }
        />
        <Card
          icon={"/images/cardicon2.png"}
          image={"/images/cardimg2.png"}
          heading={"Cost Efficiency"}
          para={
            "Running out of cash is one of the primary reasons for startup failure. We aim to cut your costs through our affordable services without compromising on quality. "
          }
        /> */}
        <div className="card">
          <div className="icon">
            <img src="/images/cardicon1.png" alt="icon" />
          </div>
          <div className="body">
            <h3 style={{ paddingTop: "1rem" }}>Client Confidentiality</h3>
            <p style={{ paddingTop: "2rem" }}>
              We respect your privacy and are committed to securing the
              confidentiality of your information.
            </p>
          </div>
          <div className="img">
            <img src="/images/cardimg1.png" alt="img" />
            {/* <svg width="311" height="149" viewBox="0 0 24 24">
              <use href="/images/img1.svg" />
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 18.69L17.19 16 4 16v2h13v3l3-2.31zM20 6H4v9h16V6zm0-4H4v3h16V2z" />
            </svg> */}
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src="/images/cardicon2.png" alt="icon" />
          </div>
          <div className="body">
            <h3 style={{ paddingTop: "1rem" }}>Cost Efficiency</h3>
            <p style={{ paddingTop: "2rem" }}>
              Running out of cash is one of the primary reasons for startup
              failure. We aim to cut your costs through our affordable services
              without compromising on quality.
            </p>
          </div>
          <div className="img">
            <img src="/images/cardimg2.png" alt="img" />
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img src="/images/cardicon3.png" alt="icon" />
          </div>
          <div className="body">
            <h3> Powerful Partnerships</h3>
            <p style={{ paddingTop: "2rem" }}>
              With a strong global network, we help you connect to top-tier
              organizations and industry experts.
            </p>
          </div>
          <div className="img">
            <img src="/images/cardimg3.png" alt="img" />
          </div>
        </div>

        <Card
          icon={"/images/cardicon3.png"}
          image={"/images/cardimg4.png"}
          heading={"Transparency and Accountability"}
          para={
            " We maintain absolute transparency and keep you informed of progress every step of the way.  "
          }
        />
      </div>
    </div>
  );
};

export default Corporate;
