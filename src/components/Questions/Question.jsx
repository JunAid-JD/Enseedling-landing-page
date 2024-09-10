import React from "react";
import Accordian from "./Accordian";

const Question = () => {
  return (
    <div className="faqsection">
      <div className="faqheader">
        <h5>FAQ’S</h5>
        <h1>Trending Questions</h1>
      </div>
      <div className="faqcontent">
        <Accordian
          heading={"What startup services are available at Enseeding?"}
          para={
            "Enseedling offers A to Z services for startups, from company registration to after-launch support. You do not have to hire people from different agencies to get your work done because we have got you all covered."
          }
        />
        <Accordian
          heading={"Which stage of business does Enseedling assist?"}
          para={
            "From the pre-seed stage to expanding business, we assist them all. Our goal is to make every startup win, whether they are just starting out or struggling to grow."
          }
        />
        <Accordian
          heading={"What type of startups does Enseedling work with?"}
          para={
            "We provide services to e-commerce-based, service-based, and SaaS businesses."
          }
        />
        <Accordian
          heading={"Can I stay connected to you while you work on my projects?"}
          para={
            "Definitely, we are transparent about our work, and you will always get updates from our team about your project."
          }
        />
        <Accordian
          heading={
            "Does Enseedling provide mentorship and consulting services?"
          }
          para={
            "Yes. Our team of experts and mentors will be by your side at every step to guide you to achieve your desired results."
          }
        />
      </div>
    </div>
  );
};

export default Question;
