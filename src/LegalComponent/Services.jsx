import React, { useEffect, useState } from "react";
import SliderBox from "./SliderBox";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const Services = () => {
  const [index, setIndex] = useState(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 11) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const handlefirst = () => {
    if (index === 0) {
      setIndex(11);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handlelast = () => {
    if (index === 11) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  const handleClick = (newIndex) => {
    if (newIndex === index) {
      return; // If the selected box is already active, do nothing
    }

    if (newIndex === lastSelectedIndex) {
      setIndex(lastSelectedIndex + 1); // Move the last selected box to the second place after the active box
      setLastSelectedIndex(newIndex);
    } else {
      setIndex(newIndex); // Set the index of the newly selected box
      setLastSelectedIndex(index);
    }
  };

  const itemsToShow = Array.from({ length: 4 }, (_, i) =>
    index + i > 11 ? (index + i) % 12 : index + i
  );

  return (
    <div className="services">
      <div className="head">
        <h1>What do we offer?</h1>
        <p>Our Company Corporate values and other professional Ethics</p>
      </div>
      <div className="body">
        <div className="control">
          <button onClick={handlefirst}>
            <ArrowBackIos />
          </button>
          <div className="customcarousal">
            {itemsToShow.map((item) => (
              <div
                key={item}
                className={`box ${index === item ? "boxActive" : ""}`}
                onClick={() => handleClick(item)}
              >
                {item === 0 && <p>Regulatory Compliance</p>}
                {item === 1 && <p>Legal Updates</p>}
                {item === 2 && <p>Corporate Compliance</p>}
                {item === 3 && <p>Tax Assessment</p>}
                {item === 4 && <p>Audits</p>}
                {item === 5 && <p>Business Licence</p>}
                {item === 6 && <p>Corporate Lawyer</p>}
                {item === 7 && <p>Business Insurance</p>}
                {item === 8 && <p>Advisory Service</p>}
                {item === 9 && <p>Contract Management</p>}
                {item === 10 && <p>Payroll Compliance</p>}
                {item === 11 && <p>Litigation Support</p>}
              </div>
            ))}
          </div>
          <button onClick={handlelast}>
            <ArrowForwardIos />
          </button>
        </div>
        {index === 0 && (
          <SliderBox
            h3={"Regulatory Compliance"}
            p={
              "Navigate through the maze of regulations and stay compliant with all those complex rules!"
            }
            l1={"Minimize the risk of legal penalties and fines."}
            l2={"Regular monitoring to implement safety measures."}
            l3={
              " Stay up to date with evolving regulations and industry standards."
            }
            l4={
              "Identify compliance gaps and resolve them with necessary measures."
            }
            img={"/images/legal/slider1.png"}
          />
        )}
        {index === 1 && (
          <SliderBox
            h3={"Legal Updates"}
            p={
              "Stay ahead of the curve with the latest legal updates delivered to you timely!"
            }
            l1={" Get expert analysis and insights."}
            l2={" Get timely updates relevant to your industry."}
            l3={"Recognize potential legal risks and challenges early on."}
            l4={
              "Decode legal processes and their direct impact on your business."
            }
            img={"/images/legal/slider3.png"}
          />
        )}
        {index === 2 && (
          <SliderBox
            h3={"Corporate Compliance"}
            p={
              "Cultivate ethical business operations and mitigate risks with our comprehensive corporate compliance services."
            }
            l1={
              "Encourage accountability and integrity by developing strong internal controls."
            }
            l2={
              " Get sector-specific compliance solutions tailored to your business needs."
            }
            l3={
              "Reduce administrative burden with efficient systems and technologies."
            }
            l4={"Get the latest corporate policy updates."}
            img={"/images/legal/slider2.png"}
          />
        )}
        {index === 3 && (
          <SliderBox
            h3={"Tax Assessment "}
            p={"Maximize your tax savings and minimize your stress"}
            l1={
              "Comprehensive examination of your financial records and tax-related data."
            }
            l2={
              "Get professional recommendations and strategies to improve tax situations."
            }
            l3={"Identify potential deductions and credits. "}
            l4={"Accurate and timely tax filings."}
            img={"/images/legal/slider4.png"}
          />
        )}
        {index === 4 && (
          <SliderBox
            h3={"Audits"}
            p={
              "Ensure minimal disruption and maximum efficiency through periodic audits."
            }
            l1={
              "Make informed decisions with better clarity through regular audits."
            }
            l2={"Gain confidence in accounting records and strategic planning."}
            l3={"Thorough assessment to recognize opportunities and risks."}
            l4={"Promote healthy and transparent governance."}
            img={"/images/legal/slider5.png"}
          />
        )}
        {index === 5 && (
          <SliderBox
            h3={"Licenses for business"}
            p={"Get the necessary certifications to thrive in your industry!"}
            l1={
              "Acquire necessary licences and permits to increase your credibility."
            }
            l2={"Get strategic advice to optimize your licencing portfolio"}
            l3={"Dependable assistance with licence up keep."}
            l4={"Receive timely renewal reminders."}
            img={"/images/legal/slider6.png"}
          />
        )}
        {index === 6 && (
          <SliderBox
            h3={"Corporate Lawyer"}
            p={
              "Harness the power of corporate lawyers to defend your business interests!."
            }
            l1={
              "Customized legal strategies aligned with your goals and industry dynamics."
            }
            l2={
              "Expert guidance in corporate transactions, contracts and compliance.  ."
            }
            l3={
              "Trustworthy partnerships with highly skilled corporate lawyers."
            }
            l4={"Ensure legal compliance."}
            img={"/images/legal/slider7.png"}
          />
        )}
        {index === 7 && (
          <SliderBox
            h3={"Business Insurance"}
            p={
              "Guard your business against unexpected setbacks with our trusted insurance coverage."
            }
            l1={
              "Reduce the financial strain caused by liability claims, property damage, etc. "
            }
            l2={
              "Reduce the financial strain caused by liability claims, property damage, etc. "
            }
            l3={"Dedicated support in times of crisis."}
            l4={"Fast processing of claims."}
            img={"/images/legal/slider8.png"}
          />
        )}
        {index === 8 && (
          <SliderBox
            h3={"Risk Advisory Services"}
            p={
              "Build resilience and grab opportunities amidst critical situations with our risk advisory assistance. "
            }
            l1={
              "Professional advice to align risk management with business objectives."
            }
            l2={
              "Customized approaches to address and manage risks effectively."
            }
            l3={"Assessment of potential risks impacting your business."}
            l4={"Get data-driven insights for strategic planning."}
            img={"/images/legal/slider9.png"}
          />
        )}
        {index === 9 && (
          <SliderBox
            h3={"Contract Management"}
            p={
              "Streamline your contract processes by harnessing our contract management services. "
            }
            l1={
              "Get reminders for key milestones to avoid missing out on opportunities."
            }
            l2={"Contract repository for easy access and better organisation."}
            l3={"Streamline contract creation, negotiation and approval."}
            l4={"Manage contract lifecycle from creation to termination."}
            img={"/images/legal/slider10.png"}
          />
        )}{" "}
        {index === 10 && (
          <SliderBox
            h3={"Payroll Compliance"}
            p={"Simplify payroll compliance and prevent penalties!"}
            l1={
              "Guidance from professionals to steer through complex payroll regulations."
            }
            l2={
              "Active compliance monitoring to stay updated with changing regulation."
            }
            l3={
              "	Strong security measures to safeguard sensitive payroll information."
            }
            l4={"Timely tax withholding and reporting services."}
            img={"/images/legal/slider11.png"}
          />
        )}
        {index === 11 && (
          <SliderBox
            h3={"Litigation Support"}
            p={
              "Empower your legal battles with strategic insights and trustworthy assistance. "
            }
            l1={
              "Organization and management of documents to facilitate retrieval."
            }
            l2={
              "Extensive research and analysis help to strengthen your case. "
            }
            l3={"Ensure a strong legal defence with guidance from experts."}
            l4={"Track the status of the cases and hearings."}
            img={"/images/legal/slider12.png"}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
