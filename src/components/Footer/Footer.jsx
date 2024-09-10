import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="groupicon">
          <img src="/images/footerimg.png" alt="logo" />
        </div>
        <div className="links">
          <div className="company">
            <h5>Company</h5>
            <p>Company Registration</p>
            <p>Digital Marketing</p>
            <p>Fundraising service</p>
            <p>Legal & Accounting</p>
            <p>Application Development</p>
            <p>Sales</p>
            <p>Business Plan Writing</p>
          </div>
          <div className="resources">
            <h5>Resources</h5>
            <p>Home</p>
          </div>
          <div className="product">
            <h5>Our Product</h5>
            <p>Internship Platform</p>
            <p>Fractional Team Rental</p>
            <p>Startup Acquisition</p>
            <p>Co Founder</p>
          </div>

          <div className="subscribe">
            <h5>Subscribe to our Newsletter</h5>
            <div className="subscribebox">
              <input type="text" placeholder="Enter your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span></span>
          <p>© Copyright Enseedling 2023</p>
          <img src="/images/Facebook.png" alt="logo" />
          <img src="/images/Twitter.png" alt="logo" />
          <img src="/images/Instagram.png" alt="logo" />
          <img src="/images/LinkedIn.png" alt="logo" />
          <span></span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
