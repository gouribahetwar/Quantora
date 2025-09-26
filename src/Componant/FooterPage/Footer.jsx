import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png"
import fb from "../../assets/fb.png"
import utube from "../../assets/utube.png"
import insta from "../../assets/tele.png"
import tele from "../../assets/insta.png"
import game from "../../assets/twitter.png"
import twitter from "../../assets/game.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Side - Logo + Description */}
        <div className="footer-about">
          <img src={logo} alt="Quantora Logo" className="footer-logo-img" />
          <p>
            Quantora is a next-generation blockchain ecosystem designed
            to power seamless digital payments, decentralized finance (DeFi),
            and real-world utility.
          </p>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h2 className="footer-title">RESOURCES</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        {/* Important */}
        <div className="footer-column">
          <h2 className="footer-title">IMPORTANT</h2>
          <ul>
            <li><a href="#">Whitepaper</a></li>
            <li><a href="#">Buy Now</a></li>
            <li><a href="#">Usecase</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h2 className="footer-title">LEGAL</h2>
          <ul>
            <li><a href="#">How to Buy</a></li>
            <li><a href="#">Roadmap</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h2 className="footer-title">Social Media Links</h2>
          <div className="footer-socials">
            <a href="#"><img src={fb} alt="Facebook" /></a>
            <a href="#"><img src={utube} alt="YouTube" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="#"><img src={insta} alt="Instagram" /></a>
            <a href="#"><img src={tele} alt="Telegram" /></a>
            <a href="#"><img src={game} alt="Game" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        ©2025 website. All Rights Reserved.
      </div>
    </footer>
  );
}
