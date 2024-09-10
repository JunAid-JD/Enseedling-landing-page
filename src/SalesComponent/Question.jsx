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
          heading={"How can you help to improve my sales performance?"}
          para={
            " Our experienced team of sales professionals employs proven strategies and techniques to enhance your sales processes, identify new opportunities, and maximize your revenue generation."
          }
        />
        <Accordian
          heading={"Can you assist with both B2B and B2C sales?"}
          para={
            " Yes. Our sales professionals have the experience and knowledge to create efficient sales strategies that produce prominent results in B2B and B2C environments. We understand each market segment's unique dynamics and challenges and can adapt our strategies accordingly."
          }
        />
        <Accordian
          heading={
            "How do you make sure your sales strategies match our business goals?"
          }
          para={
            "We thoroughly evaluate your company's operations, the competitive environment, your target market, and your target audience. We acknowledge that business goals and objectives may vary and tailor our sales strategies to fit your requirements."
          }
        />
        <Accordian
          heading={
            "How do you adapt to changes in the market and evolving customer preferences?"
          }
          para={
            " We constantly stay updated on market shifts, and emerging customer preferences. Accordingly, our team undergoes periodic training and professional development to enhance their skills and knowledge to navigate evolving market dynamics and provide innovative solutions that resonate with your customers."
          }
        />
        <Accordian
          heading={" What sets you apart from others in the industry?"}
          para={
            "What sets us apart is our unique approach to sales that combines proven methodologies with a deep understanding of your industry and target market. We take the time to thoroughly understand your business to develop customized solutions thus delivering desired results."
          }
        />
      </div>
    </div>
  );
};

export default Question;
