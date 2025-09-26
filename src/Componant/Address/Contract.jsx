import React, { useState } from "react";
import "./Contract.css";
import ContrImg from "../../assets/FaqImg.png";

export const Contract = () => {
  const [copied, setCopied] = useState(false);

  const contractAddress = "0x4972e7999454e3Bc1430E967ED49A28ea5D0938A";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);

      // Reset back to "Copy Address" after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="contract-container" id="address">
      <h2 className="main-heading">CONTRACT ADDRESS</h2>

      <section className="contract-section">
        {/* Left Content */}
        <div className="contract-left">
          <p>
            Get a clear and detailed overview of{" "}
            <span className="highlight">QUANTORA (QNT)</span> Token’s supply,
            allocation, and distribution strategy
          </p>

          <div className="address-box">
            <span className="address">{contractAddress}</span>
            <button className="copy-btn" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy Address"}
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="contract-right">
          <img src={ContrImg} alt="Token Logo" />
        </div>
      </section>
    </div>
    
  );
};
