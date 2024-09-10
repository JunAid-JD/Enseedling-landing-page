import React from "react";
import Accordian from "./Accordian";

const Question = () => {
  return (
    <div className="faqsection">
      <div className="faqheader">
        <h5>FAQ’S</h5>
        <h1>Find the answers you need</h1>
      </div>
      <div className="faqcontent">
        <Accordian
          heading={"How user-friendly is your platform for beginners? "}
          para={
            "Our digital platform is designed to be user-friendly, catering to users of all skill levels, including beginners in digital marketing. We provide intuitive interfaces, step-by-step guides, and video tutorials to help you navigate the platform easily."
          }
        />
        <Accordian
          heading={"Can I get support on audience targeting and segmentation? "}
          para={
            "Indeed. We assist you in audience targeting and segmentation to help you reach the right audience with your marketing campaigns. You can define custom audience segments based on demographic data, interests, behaviour, and other relevant criteria. "
          }
        />
        <Accordian
          heading={
            "Does your platform allow me to manage multiple digital marketing channels? "
          }
          para={
            "Absolutely! You can oversee your website's performance, track social media campaigns, monitor email marketing campaigns, and even manage online advertising campaigns all in one place. "
          }
        />
        <Accordian
          heading={
            "Does your platform provide analytics and reporting capabilities? "
          }
          para={
            "Yes. Our platform provides useful reports that you can use to assess the success of your campaigns and make informed decisions. You receive information on website traffic, conversion rates, social media engagement, and email campaign success reports."
          }
        />
        <Accordian
          heading={" Is your platform suitable for businesses of all sizes? "}
          para={
            "From small startups to large corporations, our digital platform serves businesses of all sizes. We provide flexible pricing plans and scalable features to meet various needs because we know that business needs and budgets vary. "
          }
        />
      </div>
    </div>
  );
};

export default Question;
