import React from "react";
import Home from "./Home";
import Question from "./Question";
import Services from "./Services";
import SliderBox from "./SliderBox";
import SliderBox2 from "./SliderBox2";

const MarketingRegistration = () => {
  return (
    <div>
      <Home />
      <SliderBox
        h3={"Keep up with fast-changing trends and algorithms."}
        p={"Experienced team of experts to cater to your marketing goals."}
        l1={"Leverage popular social media channels to maximize reach."}
        l2={"Build meaningful connections with strategic networking."}
        l3={"Increase brand awareness."}
        l4={"Attract quality leads."}
        img={"/images/marketing/carousal1.png"}
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
        img={"/images/marketing/carousal2.png"}
      />
      <Services />
      <Question />
    </div>
  );
};

export default MarketingRegistration;
