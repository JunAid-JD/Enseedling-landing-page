import React from "react";
import Home from "./Home";
import Question from "./Question";
import Services from "./Services";
import SliderBox from "./SliderBox";
import SliderBox2 from "./SliderBox2";

const AppRegistration = () => {
  return (
    <div>
      <Home />
      <SliderBox
        h3={"Ignite innovation with expert application development services.  "}
        p={" Get exceptional results with a committed team of professionals."}
        l1={"User-centric development approach."}
        l2={"Creative and future-proof applications."}
        l3={"Efficient project execution and timely delivery."}
        l4={"Continuous support and maintenance services."}
        img={"/images/appDev/carousal1.png"}
      />
      <SliderBox2
        h3={"Unleash the power of technology to achieve next-level success."}
        p={
          " Encouraging open communication throughout the development process, keeping you informed and involved."
        }
        l1={"company expands without sacrificing performance."}
        l2={"user experiences that captivate and engage your audience."}
        l3={
          "Develop applications for numerous platforms and ensure a broader reach."
        }
        l4={"Take advantage of the newest trends and technologies."}
        img={"/images/appDev/carousal2.png"}
      />
      <Services />
      <Question />
    </div>
  );
};

export default AppRegistration;
