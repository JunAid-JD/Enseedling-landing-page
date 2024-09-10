import React, { useEffect, useState } from "react";
import SliderBox from "./SliderBox";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const Services = () => {
  const [index, setIndex] = useState(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 5) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const handlefirst = () => {
    if (index === 0) {
      setIndex(5);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handlelast = () => {
    if (index === 5) {
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
    index + i > 5 ? (index + i) % 6 : index + i
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
                {item === 0 && <p>Requirement Gathering </p>}
                {item === 1 && <p>Design Phase</p>}
                {item === 2 && <p>Prototype Phase</p>}
                {item === 3 && <p>MVP Design</p>}
                {item === 4 && <p>Testing</p>}
                {item === 5 && <p>After Launch Support</p>}
                {/* {item === 6 && <p>Business Mail Forwarding</p>} */}
              </div>
            ))}
          </div>
          <button onClick={handlelast}>
            <ArrowForwardIos />
          </button>
        </div>
        {index === 0 && (
          <SliderBox
            h3={"Requirement Gathering "}
            p={"insights and align goals with effective requirement gathering."}
            l1={
              "foundation for project planning, execution, and successful delivery."
            }
            l2={
              "Document project goals and scope to facilitate smooth implementation."
            }
            l3={
              "Prioritize necessities based on business value, impact, and feasibility."
            }
            l4={
              "Promote cooperation between development teams and stakeholders."
            }
            img={"/images/appDev/slider1.png"}
          />
        )}
        {index === 1 && (
          <SliderBox
            h3={"Design Phase"}
            p={
              "Bring clarity and structure to your project with the dynamic design phase."
            }
            l1={
              "elements with brand identity for a cohesive and impactful presence."
            }
            l2={
              "Stand out from the crowd with cutting-edge design trends and innovation."
            }
            l3={"Explore various design concepts to find the perfect solution."}
            l4={"Refine designs based on user feedback through iterations."}
            img={"/images/appDev/slider2.png"}
          />
        )}
        {index === 2 && (
          <SliderBox
            h3={"MVP Design"}
            p={
              "Validate your business idea quickly and economically with a minimum viable product."
            }
            l1={
              "effective strategy to reduce time to market and save resources."
            }
            l2={
              "Produce a functional prototype that highlights your core value proposition."
            }
            l3={
              "Focus on vital features for the initial launch to streamline development."
            }
            l4={
              "Obtain insightful user feedback to improve and refine your product."
            }
            img={"/images/appDev/slider3.png"}
          />
        )}
        {index === 3 && (
          <SliderBox
            h3={"Full Application Design"}
            p={
              "Create an excellent application experience by planning the entire user journey."
            }
            l1={
              "Ensure flexibility and scalability to handle future growth and shifting user needs."
            }
            l2={
              "Create a remarkable app by customizing designs to reflect your brand identity."
            }
            l3={
              "Create an immersive app experience across different devices and platforms."
            }
            l4={
              "Improve functionality and performance with regular optimization."
            }
            img={"/images/appDev/slider4.png"}
          />
        )}
        {index === 4 && (
          <SliderBox
            h3={"Testing"}
            p={
              "Test apps carefully on various platforms, gadgets, and screen sizes before launching."
            }
            l1={
              "Enhance app security by identifying vulnerabilities and ensuring data protection."
            }
            l2={
              "Test app responsiveness, load times, UI and UX to maximize engagement."
            }
            l3={
              "Reduce stutters, lags, and loading times by improving app performance."
            }
            l4={"Find and fix any bugs, glitches, or performance issues.  "}
            img={"/images/appDev/slider5.png"}
          />
        )}
        {index === 5 && (
          <SliderBox
            h3={"After Launch Support"}
            p={
              "Reliable assistance to ensure a positive post-launch experience."
            }
            l1={
              "Reduce disruption and increase user satisfaction by quickly resolving issues."
            }
            l2={
              "Timely updates and security patches to ensure a secure and reliable app."
            }
            l3={
              "Personalized support and troubleshooting to address user concerns."
            }
            l4={"Ongoing support for your app to ensure its smooth operation."}
            img={"/images/appDev/slider6.png"}
          />
        )}
        {/* {index === 6 && (
          <SliderBox
            h3={"Business Mail Forwarding Services"}
            p={
              "Ease your business operations with our international mail forwarding services."
            }
            l1={
              "Flexible forwarding options, including virtual mailbox and digital scanning."
            }
            l2={"View and manage postal mail online anytime, anywhere."}
            l3={"Strict protocols to safeguard sensitive information. "}
            l4={"Affordable rates and mail consolidation choice."}
            img={"/images/registration/slider7.png"}
          />
        )} */}
      </div>
    </div>
  );
};

export default Services;
