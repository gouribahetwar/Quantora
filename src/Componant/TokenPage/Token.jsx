import React from "react";
import "./Token.css";
import tokenImg from "../../assets/token.png"; 
import bgImg from "../../assets/Rectangle.png"

const Token = () => {
  return (
    <div className="tokenomics-section" id="token">
      {/* Heading */}
      <h2 className="heading">TOKENMICS</h2>

      {/* Layout */}
      <div className="content">
        {/* Left Side Image */}
        <div className="left">
          <img src={tokenImg} alt="Token" className="token-image" />
        </div>

        {/* Right Side Card */}
        <div className="right token-card" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="row">
            <span className="label">Token</span>
            <span className="value">QUANTORA</span>
          </div>
          <div className="row">
            <span className="label">Symbol</span>
            <span className="value">QNT</span>
          </div>
          <div className="row">
            <span className="label">Network</span>
            <span className="value">BEP-20</span>
          </div>
          <div className="row">
            <span className="label">Supply</span>
            <span className="value">50 Cr</span>
          </div>
          <div className="row">
            <span className="label">Decimal</span>
            <span className="value">18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
