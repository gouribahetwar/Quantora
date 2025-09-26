import React from 'react'
import heroVideo from "../../assets/HeroBG.mp4"
import "./Hero.css/"
import heroShape from "../../assets/Union.png"
import Button from "../Button/Button";
import GradientButton from '../Button/GradientButton';
import White from '../Button/White';

export const Hero = () => {
    return (
        <section className="hero-section" id='home'>

            <div className="Hero-Container">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <div className="hero-content" style={{ backgroundImage: `url(${heroShape})` }}>
                    <h1>The Digital Currency for <br /> Real-World Utility</h1>
                    <p>
                        Quantora (QNT) is a next-generation digital asset designed for
                        real-world utility and global adoption.
                    </p>

                    <div className="hero-buttons">
                        <GradientButton>BUY NOW</GradientButton>
                        <White>WhitePeper</White>
                    </div>

                </div>

            </div>
        </section>
    )
}
