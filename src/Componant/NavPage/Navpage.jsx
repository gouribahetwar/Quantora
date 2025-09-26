import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavPage.css";
import GradientButton from "../Button/GradientButton";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const Navpage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#usecase">Usecase</a></li>
          <li><a href="#token">Tokenomics</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#address">Contract</a></li>
        </ul>

        {/* Desktop Button */}
        <div className="navbar-btn">
          <GradientButton onClick={() => navigate("/presale")}>BUY NOW</GradientButton>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Close Icon */}
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>

        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#usecase" onClick={() => setMenuOpen(false)}>Usecase</a></li>
          <li><a href="#token" onClick={() => setMenuOpen(false)}>Tokenomics</a></li>
          <li><a href="#roadmap" onClick={() => setMenuOpen(false)}>Roadmap</a></li>
          <li><a href="#address" onClick={() => setMenuOpen(false)}>Contract</a></li>
        </ul>

        {/* Mobile Button */}
        {/* <Button className="custom-btn">BUY NOW</Button> */}
        <Button className="custom-btn" onClick={() => navigate("/presale")}>BUY NOW</Button>
      </div>
    </>
  );
};
