import React from "react";
import { motion } from "framer-motion";
import "./Roadmap.css";

const Roadmap = () => {
  const phases = [
    {
      id: 1,
      number: "1",
      label: "Phase",
      title: "Foundation (Q3 2025)",
      points: [
        "Token Development on BEP-20",
        "Smart Contract Deployment & Verification",
        "Website Launch – Quantoratoken.com",
        "Whitepaper Release",
        "Initial Marketing & Community Building",
      ],
    },
    {
      id: 2,
      number: "2",
      label: "Phase",
      title: "Growth (Q4 2025)",
      points: [
        "Listing on PancakeSwap (DEX)",
        "Strategic Partnerships with E-Commerce Platforms",
        "Launch Staking & Yield Farming Programs",
        "Wallet Integration (Trust Wallet, MetaMask, etc.)",
        "First CEX Listing",
      ],
    },
    {
      id: 3,
      number: "3",
      label: "Phase",
      title: "Expansion (Q1 2026)",
      points: [
        "NFT Marketplace Integration",
        "Gaming & Metaverse Collaboration",
        "Merchant Payment Gateway (QNT Pay)",
        "Global Marketing Campaign",
        "Mobile App Development for QNT Wallet",
      ],
    },
    {
      id: 4,
      number: "4",
      label: "Phase",
      title: "Utility & Adoption (Q2 2026)",
      points: [
        "Multi-chain Expansion (Ethereum, Solana, Polygon)",
        "More Exchange Listings (Tier-1 CEX)",
        "Real-world Payment Integrations (Travel, Shopping, Utility Bills)",
        "Partnerships with Remittance & Fintech Companies",
        "QNT Debit/Virtual Card Launch",
      ],
    },
    {
      id: 5,
      number: "5",
      label: "Phase",
      title: "Future Vision (2026 and Beyond)",
      points: [
        "Own Blockchain Development (Quantora Chain)",
        "Enterprise Adoption (B2B Payments, Smart Contracts)",
        "AI & DeFi-Driven Financial Ecosystem",
        "Global Recognition & Long-term Sustainability",
      ],
    },
  ];

  return (
    <div className="roadmap-wrapper" id="roadmap">
      <h1 className="roadmap-heading">ROADMAP</h1>

      <div className="timeline">
        {phases.map((phase, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <motion.div
              key={phase.id}
              className="roadmap-item"
              initial={{ opacity: 0, x: fromLeft ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Timeline circle */}
              <div className="timeline-circle"></div>

              {/* Card */}
              <div className="roadmap-card">
                <div className="phase-left">
                  <span className="phase-label">{phase.label}</span>
                  <span className="phase-number">{phase.number}</span>
                </div>
                <div className="divider"></div>
                <div className="phase-right">
                  <h2>{phase.title}</h2>
                  <ul>
                    {phase.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
