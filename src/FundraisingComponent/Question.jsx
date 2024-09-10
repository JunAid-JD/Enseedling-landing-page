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
            "How can your platform help my organization raise funds for its initiatives?"
          }
          para={
            "We provide various services tailored to your organization's specific needs, including campaign planning, donor outreach, event management, online fundraising, and more. Our experienced team will work closely with you to understand your goals and develop a customized fundraising strategy that maximizes your chances of success. "
          }
        />
        <Accordian
          heading={
            "How do you identify potential donors or sponsors for our fundraising campaigns?"
          }
          para={
            "We utilize data-driven approaches, market research, and networking to identify individuals, corporations, foundations, and grant opportunities that align with your cause or project. We help you establish meaningful connections with potential donors or sponsors who have a genuine interest in supporting your organization. "
          }
        />
        <Accordian
          heading={
            "What types of organizations can benefit from your fundraising services?"
          }
          para={
            "Whether you're a small grassroots organization or a well-established entity, we have the expertise and resources to support your fundraising efforts. Our strategies can be customized to suit different sectors and causes, ensuring we can assist organizations of all sizes and missions in achieving their fundraising goals."
          }
        />
        <Accordian
          heading={
            "How do you ensure transparency and accountability in the fundraising process?"
          }
          para={
            "We ensure that all fundraising activities are conducted with integrity and transparency. We provide regular and detailed financial reporting, allowing you to track and understand how the funds are utilized. "
          }
        />
        <Accordian
          heading={
            "Can your fundraising company assist with donor cultivation and stewardship? "
          }
          para={
            "Absolutely! We understand the importance of acknowledging and recognizing donors for their contributions, and we can help you create compelling stewardship plans and implement strategies to foster long-term donor loyalty and engagement. We aim to help you build a strong and sustainable donor base for ongoing fundraising success."
          }
        />
      </div>
    </div>
  );
};

export default Question;
