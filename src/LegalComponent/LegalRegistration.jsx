import React from "react";
import Home from "./Home";
import Question from "./Question";
import Services from "./Services";
import SliderBox from "./SliderBox";
import SliderBox2 from "./SliderBox2";

const LegalRegistration = () => {
  return (
    <div>
      <Home />
      <SliderBox
        h3={"Professional guidance to make those critical decisions"}
        p={
          "Our professionals help you outgrow your competitors through effective growth strategies."
        }
        l1={"Get a solid growth plan."}
        l2={"Get quarterly cash flow models."}
        l3={"Maintain strategic financial records."}
        l4={"Proficient bookkeeping and payroll compliance services."}
        img={"/images/legal/carousal1.png"}
      />
      <SliderBox2
        h3={"No more tension over legal procedures."}
        p={
          "Our experts analyze and give you the best legal advice to ensure smooth functioning of your company."
        }
        l1={"High-quality service tailored to your business needs ."}
        l2={"Track and maintain all your legal documents and cases."}
        l3={"Risk advisory services to ensure smooth business."}
        l4={"Get updates on case hearings and notices"}
        img={"/images/legal/carousal2.png"}
      />
      <Services />
      <Question />
    </div>
  );
};

export default LegalRegistration;
