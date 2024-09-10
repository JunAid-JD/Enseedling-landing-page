import React, { useState } from "react";
import Header from "./Header";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Home = () => {
  const [value, setValue] = useState();
  return (
    <div
      className="home"
      style={{
        background:
          "linear-gradient(rgba(22, 9, 79, 0.8), rgba(22, 9, 79, 0.8)), url('images/marketing/heroimg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <main>
        <div className="body">
          <h1>
            Digital marketing solutions that turn your customers into fans.
          </h1>
          <p>
            Concerned about reaching your target audience in a saturated market?
            Leverage our result-driven strategies that build authority and boost
            sales. Concerned about reaching your target audience in a saturated
            market? Leverage our result-driven strategies that build authority
            and boost sales.
          </p>

          <div className="homedetail">
            <div className="info">
              <input type="text" placeholder="Business Name" />
              <input type="text" placeholder="Country" />
            </div>
            <div className="info">
              <div className="phone">
                <div id="country">
                  <PhoneInput
                    placeholder="*********"
                    value={value}
                    onChange={setValue}
                    id="countryinput"
                  />
                </div>
                {/* <input type="text" placeholder=" +92 " /> */}
                {/* <input type="text" placeholder=" ********* " /> */}
              </div>
              <input type="text" placeholder="Company Email Address" />
            </div>
            <button>Increase my conversions </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
