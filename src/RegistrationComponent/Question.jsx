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
          heading={
            "What types of companies can be registered on your platform? "
          }
          para={
            "We support registering various types of companies, including limited liability companies (LLCs), corporations, partnerships, and sole proprietorships. "
          }
        />
        <Accordian
          heading={
            "Can I use your platform to incorporate a company in multiple jurisdictions?"
          }
          para={
            "Yes, our digital platform facilitates company formation in various jurisdictions along with comprehensive jurisdiction-specific guidance, ensuring that you meet each jurisdiction's legal and regulatory requirements. "
          }
        />
        <Accordian
          heading={
            "Does your platform guide post-registration compliance and ongoing requirements? "
          }
          para={
            "Absolutely! Our digital platform offers post-registration compliance guidance to help you navigate the ongoing requirements of maintaining a registered company."
          }
        />
        <Accordian
          heading={
            "Can I use your platform to monitor the status of my company registration? "
          }
          para={
            "Totally! Our platform enables you to track the progress of your company registration in real time. You'll receive updates and notifications regarding the status of your application, ensuring transparency throughout the process."
          }
        />
        <Accordian
          heading={
            "How safe is the data I enter on your website to register a business? "
          }
          para={
            "We adhere to strict data protection policies and keep your information confidential. Additionally, our platform ensures that only authorized individuals involved in the registration process can access your company's sensitive information."
          }
        />
      </div>
    </div>
  );
};

export default Question;
