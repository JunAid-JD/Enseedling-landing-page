import React, { useEffect, useState } from "react";
import SliderBox from "./SliderBox";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const Services = () => {
  const [index, setIndex] = useState(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 14) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const handlefirst = () => {
    if (index === 0) {
      setIndex(14);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handlelast = () => {
    if (index === 14) {
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
    index + i > 14 ? (index + i) % 15 : index + i
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
                {item === 0 && <p>Social Media marketing</p>}
                {item === 1 && <p>Content Marketing</p>}
                {item === 2 && <p>SEO Service</p>}
                {item === 3 && <p>Blogging</p>}
                {item === 4 && <p>Paid Advertisement</p>}
                {item === 5 && <p>Email Marketing</p>}
                {item === 6 && <p>Franchise SEO</p>}
                {item === 7 && <p>Local SEO</p>}
                {item === 8 && <p>Technical SEO</p>}
                {item === 9 && <p>Link Building</p>}
                {item === 10 && <p>Pay Per Click Management</p>}
                {item === 11 && <p>Video Production</p>}
                {item === 12 && <p>Online Reputation System</p>}
                {item === 13 && <p>Conversion Rate Optimization </p>}
                {item === 14 && <p>PR Serivice</p>}
              </div>
            ))}
          </div>
          <button onClick={handlelast}>
            <ArrowForwardIos />
          </button>
        </div>
        {index === 0 && (
          <SliderBox
            h3={"Social Media marketing"}
            p={
              "Maximize brand reach and engagement through strategic social media marketing."
            }
            l1={
              "resonates with your audience and reflects your brand's message."
            }
            l2={"responding to comments, and fostering meaningful connections."}
            l3={"Performance analysis and optimization "}
            l4={"Community building and management"}
            img={"/images/marketing/slider1.png"}
          />
        )}
        {index === 2 && (
          <SliderBox
            h3={"SEO Service"}
            p={"need for traditional financial intermediaries"}
            l1={"Crowd funding is not restricted to the boundaries."}
            l2={"Less time-consuming and inexpensive"}
            l3={"Crowdfunding is a cheaper alternative"}
            l4={
              "Online Fundraising is one of the easiest ways to raise funds for a purpose"
            }
            img={"/images/marketing/slider3.png"}
          />
        )}
        {index === 1 && (
          <SliderBox
            h3={"content writing"}
            p={"Compelling Content that Captivates and Engages."}
            l1={
              "Clear, concise, and compelling writing that captivates readers."
            }
            l2={"Engaging content that sparks interest and holds attention."}
            l3={
              " Well-researched and informative writing that provides valuable insights."
            }
            l4={
              "content that effectively communicates your message and resonates with your target audience."
            }
            img={"/images/marketing/slider2.png"}
          />
        )}
        {index === 3 && (
          <SliderBox
            h3={"Blogging "}
            p={
              " Engage and inspire your audience with creative and consistent blogging."
            }
            l1={
              "Maintain a consistent publishing schedule for increased audience loyalty."
            }
            l2={
              "Blogs with a personal touch that grows fans rather than just followers"
            }
            l3={"Blog optimization for better search engine visibility. "}
            l4={"Convert your readers into paying customers."}
            img={"/images/marketing/slider4.png"}
          />
        )}
        {index === 4 && (
          <SliderBox
            h3={"Paid Advertisement"}
            p={"Boost conversions and maximize ROI with effective paid ads."}
            l1={
              "Produce attention-grabbing advertising creatives that inspire action."
            }
            l2={
              "Increase ROI by optimizing campaigns with data-driven insights."
            }
            l3={"Reach particular demographics, interests, and behaviours"}
            l4={"Track and improve ad performance continuously."}
            img={"/images/marketing/slider5.png"}
          />
        )}
        {index === 5 && (
          <SliderBox
            h3={"Email marketing"}
            p={
              "Create email campaigns that don’t land in the spam folder but bring exceptional conversions."
            }
            l1={
              "Stay on top of your audience’s mind with consistent and informative newsletters."
            }
            l2={
              "Convert like crazy with highly tailored emails through audience segmentation."
            }
            l3={" workflows for emails and customer interactions"}
            l4={
              "Optimize your email campaigns for maximum open and click-through rates."
            }
            img={"/images/marketing/slider6.png"}
          />
        )}
        {index === 6 && (
          <SliderBox
            h3={"Franchise SEO"}
            p={"Drive franchise success with Geo-modified SEO strategies."}
            l1={"competition with our cutting-edge franchise SEO techniques."}
            l2={
              "Research franchise-specific keywords to attract relevant leads."
            }
            l3={"Gain favourable online reviews from your best customers."}
            l4={"traffic to each franchise location."}
            img={"/images/marketing/slider7.png"}
          />
        )}
        {index === 7 && (
          <SliderBox
            h3={"Local SEO"}
            p={
              "Supercharge your local presence with our professional team of SEO specialists."
            }
            l1={
              "Increase local brand awareness and drive traffic via proven local SEO strategies."
            }
            l2={
              "Increase local visibility by optimizing your Google My Business listing."
            }
            l3={
              "Conduct geo-specific keyword research to capture local search intent."
            }
            l4={"Employ data-driven insights to optimize your local SEO plan."}
            img={"/images/marketing/slider8.png"}
          />
        )}
        {index === 8 && (
          <SliderBox
            h3={"Technical SEO"}
            p={
              "Streamline your contract processes by harnessing our contract management services. "
            }
            l1={
              "Optimize site speed and mobile responsiveness for a better user experience."
            }
            l2={
              "Utilize structured data to increase search visibility and display rich snippets."
            }
            l3={"Conduct Through site audits to identify technical issues."}
            l4={"Improve the website’s index ability and crawl ability."}
            img={"/images/marketing/slider9.png"}
          />
        )}
        {index === 9 && (
          <SliderBox
            h3={"Link Building"}
            p={
              "Boost your website’s authority and ranking with cutting-edge link-building strategies."
            }
            l1={
              "Emerge as an industry leader by building relationships with influential websites."
            }
            l2={
              "Strategic outreach to assure relevant and authoritative link placements"
            }
            l3={
              "Foster collaborations and partnerships to expand your online network."
            }
            l4={
              "Identify link-building opportunities and optimize outreach campaigns."
            }
            img={"/images/marketing/slider10.png"}
          />
        )}{" "}
        {index === 10 && (
          <SliderBox
            h3={"Pay Per Click Management"}
            p={"Secure Advertisement success with on-point PPC Management."}
            l1={"Development of a channel-specific campaign strategy."}
            l2={"Get expert guidance on the best PPC practices."}
            l3={"Get regular campaign performance audits."}
            l4={"Regular monitoring and testing."}
            img={"/images/marketing/slider11.png"}
          />
        )}
        {index === 11 && (
          <SliderBox
            h3={"Video Production"}
            p={"Make your brand come to life with captivating videos. "}
            l1={
              "Ensure a smooth process from concept to final editing and post-production."
            }
            l2={
              "Create compelling narratives that are appealing to your target audience. "
            }
            l3={
              "Use the power of visual storytelling to convert viewers into customers."
            }
            l4={"Create enchanting cinematography to bring your story to life."}
            img={"/images/marketing/slider12.png"}
          />
        )}
        {index === 12 && (
          <SliderBox
            h3={"Online Reputation Management"}
            p={"Protect and manage a positive brand image online."}
            l1={
              "Establish trust and credibility by responding to customer reviews and comments."
            }
            l2={
              "Execute strategic crisis management strategies to handle negative publicity."
            }
            l3={
              "Monitor all online channels regularly to stay ahead of potential problems."
            }
            l4={
              "Convert sceptics into loyal customers with a well-managed brand image."
            }
            img={"/images/marketing/slider13.png"}
          />
        )}
        {index === 13 && (
          <SliderBox
            h3={"Conversion Rate Optimization"}
            p={
              "Multiply your revenue with end-to-end conversion rate optimization."
            }
            l1={
              "Identify and remove any barriers that stop users from taking the desired action."
            }
            l2={
              "Monitor consumer behaviour and use A/B testing to optimize critical elements."
            }
            l3={"Create a seamless experience for the user."}
            l4={"Improve your KPI metrics. "}
            img={"/images/marketing/slider14.png"}
          />
        )}
        {index === 14 && (
          <SliderBox
            h3={"PR Serivice"}
            p={"Drive positive media coverage with tailored PR solutions."}
            l1={
              "Crisis management plans to handle reputation crises swiftly and efficiently."
            }
            l2={
              "State your brand’s narrative through emotive storytelling that connects."
            }
            l3={"Solid online outreach campaigns to increase brand awareness."}
            l4={"Engage with your customers to build a loyal audience."}
            img={"/images/marketing/slider15.png"}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
