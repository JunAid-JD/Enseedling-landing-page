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
                {item === 0 && <p>Company Payroll</p>}
                {item === 1 && <p>Employee bank Account</p>}
                {item === 2 && <p>Employee health insurence</p>}
                {item === 3 && <p>Business address</p>}
                {item === 4 && <p>Terrific Business Deals</p>}
                {item === 5 && <p>Business Calling Machine</p>}
                {item === 6 && <p>Business Mail Forwarding</p>}
              </div>
            ))}
          </div>
          <button onClick={handlelast}>
            <ArrowForwardIos />
          </button>
        </div>

        {index === 0 && (
          <SliderBox
            h3={"Company Payroll"}
            p={
              "Do not let complicated HR processes and legislations hinder your company’s growth."
            }
            l1={"Get help in payroll processing, outsourcing, and management."}
            l2={"Meticulous record of your company’s transactions."}
            l3={"Support regarding tax-related problems."}
            l4={"Regular audit of your payroll system."}
            img={"/images/registration/slider1.png"}
          />
        )}
        {index === 1 && (
          <SliderBox
            h3={"Employee Bank Account "}
            p={"Simplify Salary Management with Secure and Convenient Banking"}
            l1={
              "Facilitating easy and efficient processing of employee salaries."
            }
            l2={
              "safety and confidentiality of financial transactions for employees."
            }
            l3={"seamless access to their funds through various channels."}
            l4={
              "employees with tools for better financial planning and control."
            }
            img={"/images/registration/slider2.png"}
          />
        )}
        {index === 2 && (
          <SliderBox
            h3={"Employee Health Insurance"}
            p={
              "Focus on employee welfare with comprehensive health and medical insurance. "
            }
            l1={"Shield your employees against unexpected medical expenses."}
            l2={"Numerous health insurance options suited for various needs"}
            l3={
              "Ensure your employees have access to high-quality health care. "
            }
            l4={
              "Dependable support in plan selection to processing the claims."
            }
            img={"/images/registration/slider3.png"}
          />
        )}
        {index === 3 && (
          <SliderBox
            h3={"Business address "}
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
            img={"/images/registration/slider4.png"}
          />
        )}
        {index === 4 && (
          <SliderBox
            h3={"Terrific Business Deals"}
            p={
              "Stay ahead of your competition by enhancing business performance without spending extra bucks!"
            }
            l1={
              "Accelerate your business growth by leveraging premium services."
            }
            l2={
              "Exclusive deals on popular services like Google Cloud credits."
            }
            l3={"Relevant offers designed for your distinctive needs"}
            l4={"Get access to a pool of resources."}
            img={"/images/registration/slider5.png"}
          />
        )}
        {index === 5 && (
          <SliderBox
            h3={"Business Calling Machine"}
            p={
              "Boost customer satisfaction with professional and seamless communication."
            }
            l1={"Address customer needs fast and effectively"}
            l2={"Advanced features like call queuing and IVR menus."}
            l3={"Call forwarding to direct calls to suitable departments."}
            l4={"analytics option to gain insights on customer interaction."}
            img={"/images/registration/slider6.png"}
          />
        )}
        {index === 6 && (
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
        )}
      </div>
    </div>
  );
};

export default Services;
