import React from "react";
import "../css/about.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-first-section section">
        <div className="about-first-content">
          <h1 className="about-title">
            SK is a communtiy of passionate snowboarding atheletes
          </h1>
          <p className="about-content-p">
            This isn’t just a site to help customers find the right products to slide the slopes.
            Experts and HQ share stories, trade tips, and create lasting
            friendships bonding over our shared passions.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="about-first-img"
        />
      </div>
      <div className="about-second-section section">
        <h2 className="our-mission">Our Mission</h2>
        <h1 className="quote">We connect people with what they love to do most.</h1>
      </div>
      <div className="about-third-section section">
        <h1 className="third-section-title">What We Believe</h1>
        <div className="third-section-content">
          <div className="third-sec-containers">
            <h2 className="third-sec-p-title">It’s about people</h2>
            <p className="third-sec-p">
              We’re only as good as our experts. We work hard to maintain a
              strong community of empathetic and enthusiastic experts.
            </p>
          </div>
          <div className="third-sec-containers">
            <h2 className="third-sec-p-title">It’s about products</h2>
            <p className="third-sec-p">
              Shopping on SK is about finding the right product for you.
              Experts give thoughtful guidance and will only recommend the
              products that best meet your needs.
            </p>
          </div>
          <div className="third-sec-containers">
            <h2 className="third-sec-p-title">It’s about passion</h2>
            <p className="third-sec-p">
              Our model works because of the passion that experts bring to
              customers. Experts sell products that enable customers to discover
              and deepen their passions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
