'use client';

import React from 'react';
import './About.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaHandshake, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';



export default function About() {
  return (
    <div className="aboutWrapper">
      {/* Hero Section */}
      <section className="aboutHeroSection">
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

        <div className="imageContainer">
          <div className="darkOverlay" />
          <Image
            src="/abt.jpg"
            alt="CM Logistics Ship"
            width={1600}
            height={600}
            className="heroImage"
          />
          <div className="heroTextOverlay">
            <h1>About <span>CM Logistics</span></h1>
            <p>
              CM Logistics is your trusted logistics partner, offering reliable and fast shipping from China to Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* 🆕 Intro Text Groups Section */}
      <section className="aboutIntroSection">
        <div className="story">
          <h2>Our Story</h2>
        </div>
        
        <div className="introWrapper">
          <div className="introGroup">
            <h3>Company History</h3>
            <div className="divider" />
            <p>
              Founded to bridge the logistics gap between China and Zimbabwe, CM Logistics has built a reputation on reliability and consistency since day one.
            </p>
          </div>
          <div className="introGroup">
            <h3>Mission</h3>
            <div className="divider" />
            <p>
              To deliver affordable, fast, and transparent international shipping solutions tailored to the unique needs of our clients.
            </p>
          </div>
          <div className="introGroup">
            <h3>Company Values</h3>
            <div className="divider" />
            <p>
              Our core values include integrity, speed, and accountability — ensuring every shipment reflects our promise of quality service.
            </p>
          </div>

          <div className="motto">
          <h3>
            THE WAY TO MOVE WITH CARE
          </h3>
          <p>
            We are committed to prompt delivery of your consignment. Our dedicated staff and resources work diligently to eliminate unnecessary delays, ensuring a seamless experience for all our clients.
          </p>
        </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="companyInfoSection">
        <div className="companyInfoContent">
           <Image
                    src="/shiplink-logo2.png"
                    alt="Warehouse"
                    width={600}
                    height={400}
                    className="logoimage"
                  />
          <div className="textContent">
             <div className="logocontainer">
                <h2>Who We Are</h2>
                 
                </div>  
                <div className="logotext">
                   <div className="textcont">
                      <p>
                        CM Logistics is a customer-focused shipping company that connects businesses and individuals across continents.
                        With our headquarters in China and operational hubs in Zimbabwe, we make cross-border shipping simple, secure, and efficient.
                        <br /><br />
                        We understand the challenges of international logistics, which is why we handle every shipment with care and urgency.
                        From small packages to bulk consignments, our team ensures on-time delivery and continuous tracking for peace of mind.
                        <br /><br />
                        Whether you are a business importing stock or an individual buying personal items, CM Logistics offers transparent,
                        reliable, and affordable services that put you first.
                      </p>
                    </div>
                </div>
          </div>
          <div className="imageContent">
            <Image
              src="/BossZegg.jpg"
              alt="Warehouse"
              width={400}
              height={200}
              className="infoImage"
            />
          </div>
        </div>
      </section>


      {/* Third section*/}

<section className="about-company">
      <div className="about-images">
        <div className="image-group">
            <img src="/26.8.jpg" alt="Client" className="front-image" />
            <img src="/TRANSPORT.jpg" alt="Client" className="back-image" />
          <div className="client-badge">
            <h2>500+</h2>
            <p>Trusted Clients</p>
          </div>
        </div>
      </div>
      <div className="about-content">
        <p className="section-label">About Company</p>
        <h2 className="main-title">We Are CM Logistics Your Branding & Shipping Partner</h2>
        <p className="description">
          CM Logistics is a full-service shipping society committed to helping clients and organizations scale creatively. We mix strategy, design, and technology to tell your story in a way that inspires action.
        </p>

        <div className="features">
          <div className="feature-item">
            <FaHandshake className="feature-icon" />
            <div>
              <h3>Trusted Partner</h3>
              <p>Clients trust us to grow their brand with creative strategies and measurable outcomes.</p>
            </div>
          </div>

          <div className="feature-item">
            <FaRocket className="feature-icon" />
            <div>
              <h3>Fast-Track Campaigns</h3>
              <p>We deploy strategies quickly, so that clients get their goods without delay.</p>
            </div>
          </div>

          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <div>
              <h3>Tested Reliability</h3>
              <p>From start to scale, we bring consistent quality and support you can rely on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>




{/* Team section*/}

<section className="teamSection">
   <div className="team1"><h2>Meet Our Team</h2></div>
  {/* Top four containers */}
  <div className="topContainers">
    <div className="topContainer">
      <h3>Qualified Leaders</h3>
      <p>
        Our leaders have years of experience in logistics and supply chain management, ensuring efficient and reliable deliveries.
      </p>
    </div>
    <div className="topContainer">
      <h3>Innovative Strategists</h3>
      <div className="line"></div>
      <p>
        They continuously innovate and optimize operations to stay ahead in the fast-paced logistics industry.
      </p>
    </div>
    <div className="topContainer">
      <h3>Customer-Focused</h3>
      <div className="line"></div>
      <p>
        Each leader prioritizes customer satisfaction, making sure that every shipment is handled with care and professionalism.
      </p>
    </div>
    <div className="topContainer">
      <h3>Expert Team</h3>
      <div className="line"></div>
      <p>
        Our dedicated team members ensure that every shipment reaches its destination smoothly and efficiently.
      </p>
    </div>
  </div>

  {/* Member Cards */}
  <div className="memberCards">
    <div className="card">
      <Image
        src="/client1.jpeg"
        alt="Member 1"
        width={300}
        height={300}
        className="memberImage"
      />
      <div className="memberText">
        <h4>John Doe</h4>
        <p>Logistics Manager with 10 years of experience ensuring smooth operations.</p>
      </div>
    </div>

    <div className="card">
      <Image
        src="/client3.jpeg"
        alt="Member 2"
        width={300}
        height={300}
        className="memberImage"
      />
      <div className="memberText">
        <h4>Jane Smith</h4>
        <p>Customer Relations Lead, dedicated to client satisfaction and support.</p>
      </div>
    </div>

    <div className="card">
      <Image
        src="/client4.jpeg"
        alt="Member 3"
        width={300}
        height={300}
        className="memberImage"
      />
      <div className="memberText">
        <h4>Michael Brown</h4>
        <p>Operations Specialist handling logistics planning and tracking shipments.</p>
      </div>
    </div>
  </div>

  {/* Blurry Description Container */}
  <div className="ptext">
    <p>
      At CM Logistics, our team is the driving force behind our success. We are a diverse group of logistics professionals, customer service experts, and tech enthusiasts united by a passion for reliable delivery. From planning shipments to handling customs, every team member plays a vital role in ensuring your goods reach their destination smoothly and efficiently. We're proud of the work we do — and even prouder of the trust our clients place in us.
    </p>
  </div>
</section>






     {/* WHY CHOOSE section*/}
     
    <section className="top-notch-services">
  <div className="topcont">
    <div className="services-header">
      <h2>OUR TOP NOTCH SERVICES</h2>
      <p className="subtitle">Magno voluptatem dolorem Dolorosi Sociis...</p>
    </div>

    <section className="staggered-section">
      <div className="services-grid">
        <div className="crazy-box box-1">
          <h3 className="big-text">
            $460<span className="small-text">/cbm</span>
          </h3>
        </div>

        <div className="crazy-box box-2">
          <h3 className="big-text">
            45<span className="small-text">days</span>
          </h3>
        </div>

        <div className="crazy-box box-3">
          <h3 className="big-text">Secure</h3>
        </div>

        <div className="crazy-box box-4">
          <h3 className="big-text">Tracking</h3>
        </div>

        <div className="crazy-box box-5">
          <h3 className="big-text">Customs</h3>
        </div>
      </div>
    </section>
  </div>
</section>





   
       {/* MOTTO SECTION*/}
  

    <section className="companySection">
  <div className="companyOuter">
    <div className="companyLeft">
      <div className="companyBgImage">
        <Image
          src="/LoaDd.jpeg"
          alt="Warehouse"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="companyGlassBox">
        <p>Your products are in secure hands</p>
        <h5>
          Direct sourcing & shipping from China to Zimbabwe! <br />
          --For just $460 per cbm including duty-- <br /> --Shipping takes not more than 55 Days--
        </h5>
        <p>
          Whether you're a small business or a growing brand, we've made importing easier than ever.
        </p>
      </div>
    </div>

    <div className="companyRight">
      <div className="companyImageWrapper">
        <Image
          src="/trust.jpg"
          alt="Warehouse"
          width={350}
          height={150}
          className="companyImage"
        />
      </div>
    </div>

  </div>
</section>




        {/* Company Info Section */}

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
  );
}
