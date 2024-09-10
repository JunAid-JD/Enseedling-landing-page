import React, { useEffect, useState } from "react";
import SliderBox from "./SliderBox";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const Services = () => {
  const [index, setIndex] = useState(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 3) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const handlefirst = () => {
    if (index === 0) {
      setIndex(3);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handlelast = () => {
    if (index === 3) {
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
    index + i > 3 ? (index + i) % 4 : index + i
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
                {item === 0 && <p>Inbound and Outbound Reach</p>}
                {item === 1 && <p>Lead Generation</p>}
                {item === 2 && <p>Cold Emailing</p>}
                {item === 3 && <p>Lead Conversion</p>}
                {/* {item === 4 && <p>Testing</p>}
                {item === 5 && <p>After Launch Support</p>} */}
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
            h3={"Inbound and put bound reach "}
            p={
              "engaging with potential customers (inbound) and actively reaching out to prospects (outbound)"
            }
            l1={
              "can benefit you if you're a smaller company that may require additional resources."
            }
            l2={
              "This can help internal sales resources focus on larger initiatives"
            }
            l3={"Companies may decide to extend into new geographic"}
            l4={
              "These are teams managed by a provider, but they often learn the products"
            }
            img={"/images/appDev/slider3.png"}
          />
        )}
        {index === 1 && (
          <SliderBox
            h3={"Lead Generation"}
            p={
              "customer interest and gathering their information for targeted marketing purposes."
            }
            l1={
              "potential customers who have shown interest in a product or service."
            }
            l2={
              "prospects through various channels to capture their contact information."
            }
            l3={
              "sales team with a pool of qualified leads to convert into paying customers."
            }
            l4={
              "qualifying leads to assess their readiness for the sales process."
            }
            img={"/images/appDev/slider4.png"}
          />
        )}
        {index === 2 && (
          <SliderBox
            h3={"Cold Emailing"}
            p={
              "Process of reaching out to potential contacts via email without prior engagement"
            }
            l1={"method of initiating contact by sending unsolicited emails."}
            l2={
              "cold emailing is to establish a connection, initiate a conversation"
            }
            l3={
              "resonate with recipients, and following up persistently to increase response rates"
            }
            l4={
              "argeting potential contacts based on relevant criteria, such as industry, job title"
            }
            img={"/images/appDev/slider5.png"}
          />
        )}
        {index === 3 && (
          <SliderBox
            h3={"lead conversion"}
            p={"Turning potential leads into paying customers or clients."}
            l1={
              "potential customers who have shown interest in a product or service."
            }
            l2={
              "prospects through various channels to capture their contact information."
            }
            l3={
              "sales team with a pool of qualified leads to convert into paying customers."
            }
            l4={
              "qualifying leads to assess their readiness for the sales process."
            }
            img={"/images/appDev/slider6.png"}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
