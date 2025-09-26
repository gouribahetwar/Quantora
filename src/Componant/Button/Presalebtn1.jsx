import React from "react";
import "./Presalebtn1.css";


const Presalebtn1 = ({ children, onClick, type = "button" }) => {
  return (
    <span className="gradient-borderx">
      <button className="mobile-btnsss" onClick={onClick} type={type}>
        {children}
      </button>
    </span>
  );
};

export default Presalebtn1;
