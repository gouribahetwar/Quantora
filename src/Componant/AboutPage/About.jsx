import React from "react";
import "./About.css";
import coinImg from "../../assets/coin 2 1.png"; 

import { PiStarFourFill } from "react-icons/pi";

export const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>ABOUT US</h2>
      <div className="about-container">
        
        {/* Left side */}
        <div className="about-text">
          <p>
            Quantora (QNT) is a decentralized digital currency built on the
            BEP-20 network, designed to bridge the gap between blockchain
            innovation and real-world usability. With a total supply of 50 Cr
            tokens, Quantora empowers individuals and businesses through
            seamless payments, DeFi participation, NFT integration, and global
            remittances.
          </p>

          <div className="features-grid">
            <div className="feature-box">DeFi participation</div>
            <div className="feature-box">NFT integration</div>

            {/* Star in center */}
            <div className="star-box">
              <PiStarFourFill  className="star-icon" />
            </div>

            <div className="feature-box">Gaming & Metaverse</div>
            <div className="feature-box">Staking & Yield Farming</div>
          </div>
        </div>

        {/* Right side */}
        <div className="about-image">
          <img src={coinImg} alt="Quantora Coin" />
        </div>
      </div>
    </section>
  );
};
