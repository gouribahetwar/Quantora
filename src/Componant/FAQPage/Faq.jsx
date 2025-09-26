import React, { useState } from "react";
import "./Faq.css";
import faqImage from "../../assets/coin 2 1.png"; // replace with your image path

const faqs = [
  { question: "What is Quantora (QNT)?", answer: "Quantora (QNT) is a decentralized blockchain-based token designed for secure transactions." },
  { question: "What is the maximum supply of QNT tokens?", answer: "The maximum supply is capped at 100 million QNT tokens." },
  { question: "Which network is Quantora based on?", answer: "Quantora is built on the Ethereum blockchain network." },
  { question: "How can I purchase QNT tokens?", answer: "You can buy QNT tokens on popular cryptocurrency exchanges." },
  { question: "Where can I check the live price of QNT?", answer: "You can track the live price on CoinMarketCap, CoinGecko, or supported exchanges." },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section" id="faq">
      <h2 className="faq-heading">FAQ’S</h2>
      <div className="faq-container">
        {/* Left side image */}
        <div className="faq-image">
          <img src={faqImage} alt="FAQ Logo" />
        </div>

        {/* Right side content */}
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>Q{index + 1} {faq.question}</span>
                <span className="faq-icon">{openIndex === index ? "-" : "+"}</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
