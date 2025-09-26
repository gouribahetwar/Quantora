import React from "react";
import "./Presale.css";
import bgVideo from "../../assets/HeroBG.mp4";
import tokenLogo from "../../assets/preassaleMain.png";
import heroShape1 from "../../assets/presale2.png";
import { FaArrowRight } from "react-icons/fa";
import White from "../Button/White";
import Presalebtn1 from "../Button/Presalebtn1";
import tokenLogo23 from "../../assets/Group@2x.png";

export const Presale = () => {
  return (
    <section className="buy-presale-section" id="presale" >
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="buy-presale-container">
        {/* Left Side */}
        <div className="left-side">
          <img src={tokenLogo} alt="token logo" className="token-logo" />
          <h2>HOW TO BUY</h2>

          <div className="steps">
            <div className="step">
              <span>STEP 1:</span> Link your crypto wallet securely to start the buying process.
            </div>
            <div className="step">
              <span>STEP 2:</span> Grant permission to interact with the token smart contract.
            </div>
            <div className="step">
              <span>STEP 3:</span> Enter the amount and confirm the transaction securely.
            </div>
            <div className="step">
              <span>STEP 4:</span> Add the token to your wallet using the contract address.
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side">
          <img src={heroShape1} alt="frame" className="bg-frame" />

          <div className="right-content">
            <h2>PRESALE</h2>
            <p>
              Quantora (QNT) Presale Now Live – Be Among the First to Shape the
              Future of Smart Finance.
            </p>

            <div className="price-box">
              <p>
                Current price: <strong>$0.012</strong>
              </p>
              <FaArrowRight className="price-arrow" />
              <p>
                Next price: <strong>$0.015</strong>
              </p>
            </div>

            <div className="buy-box">
              <label>You can Buy with</label>
              <div className="input-with-icon">
                <img src={tokenLogo23} alt="icon" className="input-icon" />
                <input type="text" placeholder="Enter Amount" />
              </div>

              <label>You will get:</label>
              <div className="input-with-icon">
                <img src={tokenLogo} alt="icon" className="input-icon" />
                <input type="text" placeholder="Get Amount" />
              </div>

              <div className="btn-group">
                <Presalebtn1 className="connect-btn">Connect Wallet</Presalebtn1>
                <White className="approve-btn">Approve</White>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
