import React from "react";
import "./White.css";

const White = ({ children, onClick, type = "button" }) => {
  return (
    <span className="gradient-borders">
      <button className="mobile-btng" onClick={onClick} type={type}>
        {children}
      </button>
    </span>
  );
};

export default White;
