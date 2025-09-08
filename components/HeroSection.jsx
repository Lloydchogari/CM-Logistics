'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/HeroSection.scss';
import logo from '../public/shiplink-logo2.png';
import heroImage from '../public/shiplink-logo2.png'; // Replace with your background image

const animatedTexts = [
  "CHINA TO ZIMBABWE",
  "CHINA TO SOUTH AFRICE",
  "GLOBAL PARTNERS AT YOUR SERVICE",
  "LET'S WORK TOGETHER",

  

];

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 150 : 200;

    const timeout = setTimeout(() => {
      const fullText = animatedTexts[textIndex];

      if (!deleting) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === fullText.length) setDeleting(true);
      } else {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTextIndex((textIndex + 1) % animatedTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  return (
    <section className="hero-section">
      {/* Wavy header with floating logo */}
      <div className="wavy-header">
        <div className="logo-circle">
          <Image src={logo} alt="Company Logo" width={150} height={150} />
        </div>
        <div className="wave-container">
          <svg className="wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Master container with left image + glass text and right animated text */}
      <div className="master-container">
        <div className="left-side">
          <Image src={heroImage} alt="Background" fill style={{ objectFit: 'cover' }} />
          <div className="glass-overlay">
            <h1>Your Global Real Shipping Partners</h1>
            <p>
              CM Logistics is your gateway to a world of shipping all kinds of goods.
            </p>
            <Link href="/About" className="btn">
              About Us
            </Link>
          </div>
        </div>

        <div className="right-side">
          <div className="animated-text">
            <span>{displayedText}</span>
            <span className="cursor">|</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
