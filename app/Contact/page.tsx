'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Font icons
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Typed from 'typed.js'; // For typing effect
import './Contact.scss';

export default function ContactUs() {
  useEffect(() => {
    const typed = new Typed('.animatedWords', {
      strings: [
        'Connect with Us',
        'Get in Touch',
        'We’re Here to Help',
        'Your Support Team',
        'Reach Out Anytime'
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      {/* === HERO SECTION === */}
      <div className="wholepage">
      <section className="contactHero">
        <header className="headder">
          <nav className="nav">
            <div className="logo">
              <Image
                src="/shiplink-logo2.png"
                alt="ShipLink Logo"
                width={80}
                height={80}
                quality={100}
                priority
              />
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/ServicesPage">Services</Link></li>
              <li><Link href="/Contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <div className="contactHeroContent">
          <h1>Contact Us</h1>
          <p>
            We’re here to answer your questions and provide support.<br />
            Reach out to us anytime and we’ll get back to you promptly.
          </p>
        </div>
      </section>

      {/* === CONTACT INFO CARDS === */}
      <section className="contactInfoSection">
        <div className="contactInfoHeader">
          <p className="sectionLabel">CONTACT</p>
          <h2 className="sectionTitle">Get in Touch with Us</h2>
          <p className="sectionDescription">
            Whether you have questions or need assistance, our team is here to help.<br />
            Reach out to us anytime.
          </p>
        </div>

        <div className="contactContainer">
          <div className="contactCards">
            {/* Card 1: Phone */}
            <div className="contactCard">
              <div className="cardIcon">
                <FaPhoneAlt size={40} color="#ff0000" />
              </div>
              <h3>Phone</h3>
              <p>+263 771 234 567</p>
            </div>

            {/* Card 2: Email */}
            <div className="contactCard">
              <div className="cardIcon">
                <FaEnvelope size={40} color="#ff0000" />
              </div>
              <h3>Email</h3>
              <p>info@yourcompany.com</p>
            </div>

            {/* Card 3: Location */}
            <div className="contactCard">
              <div className="cardIcon">
                <FaMapMarkerAlt size={40} color="#ff0000" />
              </div>
              <h3>Head Office</h3>
              <p>123 Business Street, Harare, Zimbabwe</p>
            </div>
          </div>
        </div>
      </section>

      {/* === MAP SECTION === */}
      <section className="worldMapSection">
        <h2 className="mapTitle">Our Global Presence</h2>
        <div className="mapContainer">
          <img src="/mapp.jpg" alt="World Map" className="worldMap" />

          {/* Location for China */}
          <div className="mapPin china">
            <span className="pinIcon">📍</span>
            <p>China</p>
          </div>

          {/* Location for Zimbabwe */}
          <div className="mapPin zimbabwe">
            <span className="pinIcon">📍</span>
            <p>Zimbabwe</p>
          </div>
        </div>
      </section>

      {/* === CONTACT FORM + ANIMATED TEXT === */}
      <section className="formSection">
        <div className="formContainer">
          {/* LEFT SIDE - FORM WITH BACKGROUND IMAGE */}
          <div className="formWrapper">
            <div className="formBackground"></div>
            <form className="contactForm">
              <h3>Get in Touch</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* RIGHT SIDE - ANIMATED TEXT */}
          <div className="animatedTextWrapper">
            <h2>
              <span className="animatedWords"></span>
            </h2>
          </div>
        </div>
      </section>


    {/*==FOOTER SECTION*/}

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
      </div>
    </>
  );
}
