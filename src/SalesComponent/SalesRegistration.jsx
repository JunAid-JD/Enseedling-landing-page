import React from "react";
import Home from "./Home";
import Question from "./Question";
import Services from "./Services";
import SliderBox from "./SliderBox";
import SliderBox2 from "./SliderBox2";

const SalesRegistration = () => {
  return (
    <div>
      <Home />
      <SliderBox
        h3={" Selling Solutions Not Promises & Promise Quality"}
        p={
          "Fundraising in companies refers to a process of obtaining funds required for running or starting a company. I"
        }
        l1={"Managing the organization in a way planned to make a profit."}
        l2={"Office segmentation, rentals, and other management costs"}
        l3={"Choose the best business structure for you"}
        l4={"Establish bank accounts for your company."}
        img={"/images/sales/slider1.png"}
      />
      <SliderBox2
        h3={"Use data-driven insights to optimize the project. "}
        p={
          "Partner with us to elevate your brand's online presence and drive measurable results."
        }
        l1={"Craft authentic content that aligns with your brand voice"}
        l2={"Amplify your market reach with tailored ad campaigns."}
        l3={"Run frequent audits on campaign performance."}
        l4={"Detailed competitor analysis."}
        img={"/images/sales/slider2.png"}
      />
      <Services />
      <Question />
    </div>
  );
};

export default SalesRegistration;
