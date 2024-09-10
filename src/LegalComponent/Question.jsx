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
            "What are the benefits of hiring a legal and accounting company for my business?"
          }
          para={
            "It ensures compliance with tax laws and regulations, minimizing the risk of penalties or audits. Additionally, with the expertise of professional guidance, you can make informed financial decisions, optimize tax planning, and improve overall financial management"
          }
        />
        <Accordian
          heading={
            "How can your legal and accounting services benefit startups and small businesses?"
          }
          para={
            "Our platform provides affordable solutions, including help with business formation, contract drafting, bookkeeping, tax planning, etc. We can assist in streamlining your operations, ensuring compliance, and offering insightful information to help you make wise business decisions."
          }
        />
        <Accordian
          heading={"What types of legal services do you offer? "}
          para={
            "We offer a comprehensive range of legal services to meet the diverse needs of our clients. Our services include contract drafting and review, business formation and structuring, intellectual property protection, compliance assistance, and legal advice. "
          }
        />
        <Accordian
          heading={"Do you offer help with tax planning and preparation? "}
          para={
            "Yes! Our legal and accounting professionals specialize in tax planning and preparation. We stay up-to-date with the latest tax regulations and leverage our knowledge to develop effective strategies that minimize tax liabilities and maximize benefits."
          }
        />
        <Accordian
          heading={
            "How do you stay updated with the latest regulations and industry changes? "
          }
          para={
            "We maintain strong networks and affiliations with professional organizations and stay connected with industry experts. By actively monitoring changes in the legal and accounting landscape, we ensure that our clients receive accurate, up-to-date advice and compliance support."
          }
        />
      </div>
    </div>
  );
};

export default Question;
