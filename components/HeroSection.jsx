'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/HeroSection.scss';
import { FaGlobe, FaUserTie, FaHandshake, FaClipboardCheck } from 'react-icons/fa';
import logo from '../public/shiplink-logo2.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Wavy header with floating logo */}
      <div className="wavy-header">
        <div className="logo-circle">
          <Image src={logo} alt="Company Logo" width={150} height={150} />
        </div>

        {/* SVG Wave */}
        <div className="wave-container">
          <svg className="wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="angled-container">
          <div className="angled-top-section">
            <div className="angled-inner">
              <div className="glass-info-box">
                <h1>Your Global Real Shipping Partners</h1>
                <p>
                  CM Logistics is your gateway to a world of shipping all kinds of goods.
                  With a global network of trusted partners, we're dedicated to connecting
                  clients across borders.
                </p>
                   <div className="see-more-left-wrapper">
                    <Link href="/About" className="see-more-left-btn">
                      About Us
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="card-container">
            <span className="corner top-left horizontal"></span>
            <span className="corner top-left vertical"></span>
            <span className="corner bottom-right horizontal"></span>
            <span className="corner bottom-right vertical"></span>

            <div className="feature-box">
              <FaGlobe className="icon" />
              <span>Global Reach</span>
            </div>
            <div className="feature-box">
              <FaUserTie className="icon" />
              <span>Expert Guideline</span>
            </div>
            <div className="feature-box">
              <FaHandshake className="icon" />
              <span>Personalized Service</span>
            </div>
            <div className="feature-box">
              <FaClipboardCheck className="icon" />
              <span>Transparent Process</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
