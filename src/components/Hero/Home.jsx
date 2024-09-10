import React, { useState } from "react";
import Header from "./Header";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Home = () => {
  const [value, setValue] = useState();
  return (
    <div className="home">
      <Header />
      <main>
        <div className="body">
          <h1>
            UNLOCK YOUR SUCCESS WITH THE BEST SERVICES FOR <span>STARTUPS</span>
          </h1>
          <p>
            Enseedling helps companies outperform their peers and the market
            with expert support and end-to-end services
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
            <button>Get Started with Enseedling</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
