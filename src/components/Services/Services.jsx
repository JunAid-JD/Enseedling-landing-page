import React, { useEffect, useState } from "react";
import SliderBox from "./SliderBox";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const Services = () => {
  const [index, setIndex] = useState(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 6) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const handlefirst = () => {
    if (index === 0) {
      setIndex(6);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handlelast = () => {
    if (index === 6) {
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
    index + i > 6 ? (index + i) % 7 : index + i
  );

  return (
    <div className="services">
      <div className="head">
        <h1>End-to-end services and support to advance your startup</h1>
        <p>Our Company Corporate values and professional Ethics</p>
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
                {item === 0 && <p>Company Registration</p>}
                {item === 1 && <p>Marketing</p>}
                {item === 2 && <p>Fundraising Service</p>}
                {item === 3 && <p>Legal & Accounting</p>}
                {item === 4 && <p>Application Development</p>}
                {item === 5 && <p>Sales</p>}
                {item === 6 && <p>Business Plan Writing</p>}
              </div>
            ))}
          </div>
          <button onClick={handlelast}>
            <ArrowForwardIos />
          </button>
        </div>

        {index === 0 && (
          <SliderBox
            h3={"Company Registration Process "}
            p={
              " Focus on building your core business while we take care of your  company registration"
            }
            l1={"Register your company hassle-free wherever you want."}
            l2={"Prepare your documents and identification."}
            l3={"Pick the most effective company structure."}
            l4={"Get the correct permits and licenses."}
            img={"/images/slider1.png"}
            link={"registration"}
          />
        )}
        {index === 1 && (
          <SliderBox
            h3={"Marketing "}
            p={
              " Boost your business with our digital marketing services and thrive and rule the online market."
            }
            l1={"Generate a pipeline of leads."}
            l2={"Establish a solid grip over social media platforms."}
            l3={"Online authority building with strong personal branding."}
            l4={
              "Boost your sales with the proven strategies curated by our experts."
            }
            img={"/images/slider2.png"}
            link={"marketing"}
          />
        )}
        {index === 2 && (
          <SliderBox
            h3={"Fund Raising Services "}
            p={
              "Professional fundraising assistance to help you unlock your business growth and achieve heights of success.  "
            }
            l1={"Strategic planning and consultancy."}
            l2={"Thorough market analysis to find potential investors."}
            l3={"Tailored investment plans to fulfill your business goals."}
            l4={"Expert Fundraiser for Diverse Companies & Sectors."}
            img={"/images/slider3.png"}
            link={"fundraising"}
          />
        )}
        {index === 3 && (
          <SliderBox
            h3={"Legal and Accounting Services "}
            p={
              "Take assistance from a trustworthy partner to handle your legal and accounting needs.  "
            }
            l1={
              "Accounting services, including bookkeeping, tax compliancy, and so on."
            }
            l2={
              "Corporate law, intellectual property, contract preparation etc."
            }
            l3={"Personalized strategies that cater to your business demands."}
            l4={"Dependable and efficient service."}
            img={"/images/slider4.png"}
            link={"legal"}
          />
        )}
        {index === 4 && (
          <SliderBox
            h3={"App Development Services"}
            p={
              "Boost your business with our terrific application development services. Turn your ideas into reality with us."
            }
            l1={"Quick app deployment at lower cost"}
            l2={"User- experience centric development."}
            l3={"Innovative approaches and cutting-edge technology. "}
            l4={"Efficient team of developers to bring your vision into life."}
            img={"/images/slider5.png"}
            link={"appdev"}
          />
        )}
        {index === 5 && (
          <SliderBox
            h3={"Sales"}
            p={
              "Sales is the art of effectively persuading and converting potential customers into paying customers."
            }
            l1={"Prospecting, Deal Closure Expert for Customer Acquisition."}
            l2={"Relationship-focused logo design for valuable solutions."}
            l3={"Active listening, and the ability to overcome objections."}
            l4={"focused Customer Acquisition and Retention Specialist."}
            img={"/images/slider6.png"}
            link={"sales"}
          />
        )}
        {index === 6 && (
          <SliderBox
            h3={"Business Plan Writing"}
            p={
              "The process of crafting a comprehensive document that outlines the goals, and financial projections of a business venture."
            }
            l1={"Crafting a Visionary Path for Growth and Success."}
            l2={"understand the industry landscape and target audience."}
            l3={
              "demonstrate the venture's viability and potential profitability."
            }
            l4={"potential risks to attract investors and secure funding."}
            img={"/images/slider7.png"}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
