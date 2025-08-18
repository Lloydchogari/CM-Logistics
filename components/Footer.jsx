'use client';
import React from 'react';
import '../styles/Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerInnerContainer">
        <div className="footerContainer">
          <div className="footerLeft">
              <img src="/shiplink-logo2.png" alt="ShipLink Logo" className="logoImage" />
              <p className="tagline">Fast, reliable, and smart logistics solutions</p>
            <div className="socialIcons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          <div className="footerLinks">
            <div>
              <h3>Platforms</h3>
              <ul>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>API Access</li>
              </ul>
            </div>
            <div>
              <h3>About</h3>
              <ul>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="footerRight">
            <h3>Contact Us</h3>
            <button className="whatsappBtn">
              <FaWhatsapp />
              Get in Touch
            </button>
          </div>
        </div>

        <div className="footerCopyright">
          <div className="footerLine"></div>
          <p>© {new Date().getFullYear()} CMLogistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
