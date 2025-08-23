import React from "react";
import "./Home.css";
import bedroom from "../images/bedroom.png";
import living from "../images/living.png";
import dining from "../images/dining.png";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-info">
          <p>New Arrivals</p>
          <h1>Discover Our New Collection</h1>
          <p>
            Explore the latest trends in fashion and style. Find pieces that
            speak to your personality and elevate your look.
          </p>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="categories-section">
        <h1
          style={{
            paddingTop: "40px",
            paddingBottom: "5px",
            textAlign: "center",
          }}
        >
          Categories
        </h1>
        <p style={{ textAlign: "center", paddingBottom: "20px" }}>
          Find pieces that speak to your personality
        </p>
        <div className="images">
          <div className="image">
            <img src={dining} alt="" />
            <p style={{ textAlign: "center", fontSize: "24px" }}>Dining</p>
          </div>
          <div className="image">
            <img src={living} alt="" />
            <p style={{ textAlign: "center", fontSize: "24px" }}>Living</p>
          </div>
          <div className="image">
            <img src={bedroom} alt="" />
            <p style={{ textAlign: "center", fontSize: "24px" }}>Bedroom</p>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="left">
          <h1>The Hear Behind The Craft</h1>
          <p>
            At WoodenNest Interiors, we believe that furniture should be more
            than just functional — it should be a reflection of your personality
            and lifestyle. With a passion for craftsmanship and design, we
            create timeless pieces that bring warmth, comfort, and elegance to
            every space. From hand-picked materials to detailed finishes, every
            item in our collection is made with care, precision, and purpose.
            Whether you're furnishing a cozy apartment or designing your dream
            home, we're here to help you make it truly yours.
          </p>
        </div>
        <div className="right">
          <img src={about1} alt="" className="img1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
