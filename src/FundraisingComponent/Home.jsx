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
          "linear-gradient(rgba(22, 9, 79, 0.8), rgba(22, 9, 79, 0.8)), url('images/fundraising/heroimg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <main>
        <div className="body">
          <h1>Fund Raising Services</h1>
          <p>
            Professional fundraising assistance to help you unlock your business
            growth and achieve heights of success.
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
            <button>Launch my Business</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
