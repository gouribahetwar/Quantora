import React from "react";
import "./Button.css";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    
      <button className="mobile-btnss" onClick={onClick} type={type}>
        {children}
      </button>
   
  );
};


export default Button;
