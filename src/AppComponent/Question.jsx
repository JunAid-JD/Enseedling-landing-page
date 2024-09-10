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
          heading={"What types of applications can I develop at Enseedling?"}
          para={
            "Whether you want to build mobile, web, or desktop applications, our platform provides the tools and a flexible environment to build applications tailored to your specific needs. "
          }
        />
        <Accordian
          heading={
            "How secure is your digital platform and the applications built on it?"
          }
          para={
            "Security is one of our top priorities. We use strong security measures, adhere to industry best practices, conduct regular security audits, and use encryption techniques to protect your projects. "
          }
        />
        <Accordian
          heading={
            " Can I integrate third-party services and APIs into my applications developed on your platform?"
          }
          para={
            "Yes, of course. Our platform supports seamless integration with various third-party services and APIs."
          }
        />
        <Accordian
          heading={
            "Is there customer support available for technical issues or questions?"
          }
          para={
            "Yes. We have a dedicated support team to assist you with any technical issues or questions you may have."
          }
        />
        <Accordian
          heading={
            "Can I deploy my applications on different hosting providers?"
          }
          para={
            "Indeed! Our digital platform allows for a variety of deployment options. You can use your preferred hosting provider or deploy your applications on our cloud infrastructure."
          }
        />
      </div>
    </div>
  );
};

export default Question;
