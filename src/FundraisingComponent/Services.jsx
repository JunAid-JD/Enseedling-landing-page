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
                {item === 0 && <p>MLM marketing</p>}
                {item === 1 && <p>Bank Loan</p>}
                {item === 2 && <p>Contributor Growth</p>}
                {item === 3 && <p>P2P Lending</p>}
                {item === 4 && <p>Bank Grants</p>}
                {item === 5 && <p>Investor Connect</p>}
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
            h3={"MLM marketing"}
            p={
              "The sources of Fundraising help the organization in running its operational activities or starting the new business."
            }
            l1={"Crowd funding is not restricted to the boundaries."}
            l2={"Less time-consuming and inexpensive"}
            l3={"Crowdfunding is a cheaper alternative "}
            l4={
              "Online Fundraising is one of the easiest ways to raise funds for a purpose"
            }
            img={"/images/fundraising/slider7.png"}
          />
        )}
        {index === 1 && (
          <SliderBox
            h3={"Bank Loan"}
            p={
              "Fundraising in companies refers to a process of obtaining funds required for running or starting a company."
            }
            l1={"A strategic roadmap that indicates the business priorities."}
            l2={
              "A Factual Business plan that helps in creating a business model"
            }
            l3={
              "Possibility research helps in determining and evaluating the direction"
            }
            l4={
              "the organization needs to know how to create its fundraising plan."
            }
            img={"/images/fundraising/slider2.png"}
          />
        )}
        {index === 2 && (
          <SliderBox
            h3={"Contributor Growth"}
            p={
              "Proper fundraising plan helps in persuading others to donate to your organization "
            }
            l1={
              "it helps in ensuring the organization retains its current donors"
            }
            l2={
              "The basis of contributor’s growth and retention is building relationships"
            }
            l3={"Implementing a proper cost to profit ratio "}
            l4={
              "It is very difficult for start-ups to acquire funds for their survival"
            }
            img={"/images/fundraising/slider3.png"}
          />
        )}
        {index === 3 && (
          <SliderBox
            h3={"P2P Lending "}
            p={"Need for traditional financial intermediaries "}
            l1={"Crowd funding is not restricted to the boundaries."}
            l2={"Less time-consuming and inexpensive"}
            l3={"Crowdfunding is a cheaper alternative"}
            l4={
              "Online Fundraising is one of the easiest ways to raise funds for a purpose"
            }
            img={"/images/fundraising/slider4.png"}
          />
        )}
        {index === 4 && (
          <SliderBox
            h3={"Bank Grants"}
            p={
              "The sources of Fundraising help the organization in running its operational activities or starting the new business."
            }
            l1={"Crowd funding is not restricted to the boundaries."}
            l2={"Less time-consuming and inexpensive"}
            l3={"Crowdfunding is a cheaper alternative"}
            l4={
              "Online Fundraising is one of the easiest ways to raise funds for a purpose"
            }
            img={"/images/fundraising/slider5.png"}
          />
        )}
        {index === 5 && (
          <SliderBox
            h3={"Investor Connect"}
            p={
              "The sources of Fundraising help the organization in running its operational activities or starting the new business."
            }
            l1={"Crowd funding is not restricted to the boundaries."}
            l2={"Less time-consuming and inexpensive."}
            l3={"Crowdfunding is a cheaper alternative"}
            l4={
              "Online Fundraising is one of the easiest ways to raise funds for a purpose"
            }
            img={"/images/fundraising/slider6.png"}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
