// Case.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Case.css";
import CaseCards from "./CaseCards";

// Import images
import laptopImage from "../../assets/laptop.png";
import mobileImage from "../../assets/1 coin.png";
import shopImage from "../../assets/2coin.png";
import walletImage from "../../assets/3coin.png";
import cartImage from "../../assets/4coin.png";
import paymentImage from "../../assets/laptop.png";
import globalImage from "../../assets/1 coin.png";
import secureImage from "../../assets/2coin.png";

const Case = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const cardData = [
    { title: "Crypto Trading ", description: "Use QNT to purchase products and services on partnered online platforms. QUANTORA token (QNT) enables fast, secure, and borderless e-commerce payments. Shop globally with ease using blockchain-powered transactions at lower costs..", image: laptopImage },
    { title: "Exchange Utility", description: "Stake your QNT tokens to earn attractive streams. Lock your QNT tokens in staking pools to earn steady rewards over time. Yield farming opportunities let you maximize returns by providing liquidity. This empowers holders with both passive income and active participation in the ecosystem..", image: mobileImage },
    { title: "Retail Integration", description: "QNT serves as the primary currency for NFT trading, minting, and auctions. Artists, collectors, and gamers can easily transact within a unified ecosystem. The integration bridges digital art, gaming assets, and collectibles under one token economy.", image: shopImage },
    { title: "Digital Wallet", description: "Use QNT for in-game purchases, avatar upgrades, and digital land ownership. Players are rewarded with real value through blockchain-based assets and transactions. It creates an immersive, decentralized economy inside gaming and metaverse worlds.", image: walletImage },
    { title: "Cart Checkout", description: "Send QNT globally in seconds with fees significantly lower than traditional banking. Borderless transfers make it ideal for families, freelancers, and global businesses. With transparency and speed, QNT makes international payments truly accessible.", image: cartImage },
    { title: "Payment Gateway", description: "Access decentralized lending, borrowing, and liquidity pools powered by Quantora. Users can earn interest or unlock capital without intermediaries. QNT fuels a secure, transparent, and efficient decentralized financial ecosystem.", image: paymentImage },
    { title: "Global Shopping", description: "Spend QNT for everyday needs like bills, subscriptions, and retail purchases. Merchant adoption allows seamless integration with online and offline businesses. This expands QNT’s role as a practical digital currency for real-world utility.", image: globalImage },
    { title: "Secure Transactions", description: "Spend QNT for everyday needs like bills, subscriptions, and retail purchases. Merchant adoption allows seamless integration with online and offline businesses. This expands QNT’s role as a practical digital currency for real-world utility", image: secureImage },
  ];

  return (
    <section className="case-wrapper" id="usecase">
      {/* ✅ Main Section Heading appears once */}
      <h1 className="case-heading">USECASE</h1>

      <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  modules={[Autoplay, Pagination]}
  className="mySwiper"
>
  {cardData.map((card, index) => (
    <SwiperSlide key={index}>
      <CaseCards title={card.title} description={card.description} image={card.image} />
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
};

export default Case;
