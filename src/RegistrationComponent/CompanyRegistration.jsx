import React from "react";
import Home from "./Home";
import Question from "./Question";
import Services from "./Services";
import SliderBox from "./SliderBox";
import SliderBox2 from "./SliderBox2";

const CompanyRegistration = () => {
  return (
    <div>
      <Home />
      <SliderBox
        h3={"Register your company wherever you want. "}
        p={" Business Registration Made Easy - Relieve Your Stress"}
        l1={"Get the appropriate documents according to regional law."}
        l2={"Get all necessary documents and licenses."}
        l3={"Choose the best business structure for you"}
        l4={"Establish bank accounts for your company."}
        img={"/images/registration/carousal1.png"}
      />
      <SliderBox2
        h3={"No more headaches!"}
        p={
          " Concentrate on your primary business and goals while we handle the formation of your company."
        }
        l1={"Dedicated support team to handle your business calls and mails."}
        l2={"Prompt and efficient service because your growth cannot wait."}
        l3={"Global service for hardworking founders."}
        l4={"Get operating fast and effortlessly"}
        img={"/images/registration/carousal2.png"}
      />
      <Services />
      <Question />
    </div>
  );
};

export default CompanyRegistration;
