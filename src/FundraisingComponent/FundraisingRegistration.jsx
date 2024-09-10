import React from "react";
import Home from "./Home";
import Question from "./Question";
import Services from "./Services";
import SliderBox from "./SliderBox";
import SliderBox2 from "./SliderBox2";

const FundraisingRegistration = () => {
  return (
    <div>
      <Home />
      <SliderBox
        h3={"Help Companies in Fundraising Activity "}
        p={
          " Fundraising in companies refers to a process of obtaining funds required for running or starting a company. I"
        }
        l1={"Managing the organization in a way planned to make a profit."}
        l2={"Office segmentation, rentals, and other management costs"}
        l3={"Choose the best business structure for you"}
        l4={"Establish bank accounts for your company."}
        img={"/images/fundraising/carousal1.png"}
      />
      <SliderBox2
        h3={"Financial Need of Every Company  is Connected to this"}
        p={
          " Concentrate on your primary business and goals while we handle the formation of your company."
        }
        l1={"Dedicated support team to handle your business calls and mails."}
        l2={"Prompt and efficient service because your growth cannot wait."}
        l3={"Global service for hardworking founders."}
        l4={"Get operating fast and effortlessly"}
        img={"/images/fundraising/carousal2.png"}
      />
      <Services />
      <Question />
    </div>
  );
};

export default FundraisingRegistration;
