import React from "react";
import "./GradientButton.css";

const GradientButton = ({ children, onClick, type = "button" }) => {
  return (
    <span className="gradient-border">
      <button className="mobile-btnss" onClick={onClick} type={type}>
        {children}
      </button>
    </span>
  );
};

export default GradientButton;
