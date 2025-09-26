// CaseCards.jsx
import React from "react";
import "./Case.css";

const CaseCards = ({ title, description, image }) => {
  return (
    <div className="ecommerce-section" id="usecase">
      <div className="ecommerce-container">
        {/* Left Side Text */}
        <div className="ecommerce-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        {/* Right Side Image */}
        <div className="ecommerce-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default CaseCards;
