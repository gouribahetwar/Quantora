import React from "react";
import "./Partner.css";
import Pancake from "../../assets/Bsc.png";
import Trust from "../../assets/trust.png";
import BscScan from "../../assets/cake.png";
import CoinMarket from "../../assets/market.png";
import Metamask from "../../assets/meta.png";

export const Partner = () => {
  return (
    <section className="partners-section">
      <h2 className="partners-heading">STRATEGIC PARTNERS</h2>
      <div className="partners-slider">
        <div className="partners-track">
          <img src={Pancake} alt="PancakeSwap" />
          <img src={Trust} alt="Trust Wallet" />
          <img src={BscScan} alt="BscScan" />
          <img src={CoinMarket} alt="CoinMarketCap" />
          <img src={Metamask} alt="MetaMask" />

          {/* duplicate for infinite loop */}
          <img src={Pancake} alt="PancakeSwap" />
          <img src={Trust} alt="Trust Wallet" />
          <img src={BscScan} alt="BscScan" />
          <img src={CoinMarket} alt="CoinMarketCap" />
          <img src={Metamask} alt="MetaMask" />
        </div>
      </div>
    </section>
  );
};
