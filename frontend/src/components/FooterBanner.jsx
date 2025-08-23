import React from "react";
import "./FooterBanner.css";
import trophy from "../images/trophy 1.png";
import warranty from "../images/Warranty.png";
import shipping from "../images/shipping.png";
import support from "../images/Support.png";

const FooterBanner = () => {
  return (
    <div className="footerBanner">
      <div className="claim">
        <img src={trophy} alt="" />
        <div className="describe">
          <h3>High Quality</h3>
          <p>Crafted from top materials</p>
        </div>
      </div>
      <div className="claim">
        <img src={warranty} alt="" />
        <div className="describe">
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="claim">
        <img src={shipping} alt="" />
        <div className="describe">
          <h3>Free Shipping</h3>
          <p>Order over $150 </p>
        </div>
      </div>
      <div className="claim">
        <img src={support} alt="" />
        <div className="describe">
          <h3>24/7 Support</h3>
          <p>Dedicated Support</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
