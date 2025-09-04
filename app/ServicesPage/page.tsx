'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import abt from '../../public/abt.jpg';
import logo from '../../public/shiplink-logo2.png';
import the1 from '../../public/the1.jpg';
import solo from '../../public/solo.jpg';
import tlogo from '../../public/tlogo.png';
import './Services.scss';
import { FaShip, FaBox, FaTruck, FaPlane, FaWarehouse, FaBoxes, FaClipboardList } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';


export default function Services() {

//mobile responsive nav-bar

 const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);


  // First container (Sea, Air, Land)
  const topServices = [
    {
      icon: <FaShip size={50} color="#ff0000" />,
      title: 'Sea Freight',
      description: 'Cost-effective shipping for bulk goods via sea routes. Ideal for heavy and large shipments, reliable and secure.'
    },
    {
      icon: <FaPlane size={50} color="#ff0000" />,
      title: 'Air Freight',
      description: 'Fast shipping via air for time-sensitive goods. Ensures speed, safety, and tracking from China to Zimbabwe.'
    },
    {
      icon: <FaTruck size={50} color="#ff0000" />,
      title: 'Land Transport',
      description: 'Efficient land transportation for goods from ports to your warehouse or business. Flexible, secure, and cost-effective.'
    }
  ];

  // Second container (Warehousing, Packaging, Customs)
  const bottomServices = [
    {
      icon: <FaWarehouse size={50} color="#ff0000" />,
      title: 'Warehousing',
      description: 'Secure storage solutions for your goods with inventory management, climate control, and easy access.'
    },
    {
      icon: <FaBoxes size={50} color="#ff0000" />,
      title: 'Packaging',
      description: 'Professional packing services to protect your items during transit. Custom packaging for fragile or bulky goods.'
    },
    {
      icon: <FaClipboardList size={50} color="#ff0000" />,
      title: 'Customs Clearance',
      description: 'Complete customs documentation and clearance support to ensure smooth import and export processes.'
    }
  ];

  // Images for the flipping section
  const flipImages = [
    '/abt.jpg',
    '/26.7.jpg',
    '/solo.jpg',
    '/tlogo.png',
    '/the1.jpg',
    '/ships.jpg'
  ];

    const images = [
  { src: abt, title: "Work One", author: "John Doe" },
  { src: logo, title: "Work Two", author: "Jane Smith" },
  { src: the1, title: "Work Three", author: "Alex Ray" },
  { src: solo, title: "Work Four", author: "Lisa Brown" },
  { src: tlogo, title: "Work Five", author: "David Lee" },
  
];
  const [current, setCurrent] = useState(2); // Start with middle image

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flipImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [flipImages.length]);

  return (
    <>
      {/* ===== 1) HERO SECTION ===== */}
      <div className="mainHero">
      <section className="servicesHero">

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

            {/* Show mobile menu button only on mobile */}
            {isMobile && (
              <button
                className="mobile-menu-toggle"
                aria-label="Open navigation menu"
                onClick={() => setMenuOpen(true)}
              >
                Menu
              </button>
            )}


            
             {/* Desktop nav-links */}
            {!isMobile && (
              <ul className="nav-links desktop-nav">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/ServicesPage">Services</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
              </ul>
            )}
          </nav>


           {/* Mobile overlay menu */}
                     {isMobile && (
                       <div className={`mobile-nav-blur${menuOpen ? ' open' : ''}`}>
                         <div className="mobile-nav-content">
                           <div className="mobile-logo-side">
                             <Image
                               src="/shiplink-logo2.png"
                               alt="ShipLink Logo"
                               width={130}
                               height={130}
                               quality={100}
                               priority
                             />
                           </div>
                           <ul className="mobile-nav-links">
                             <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                             <li><Link href="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
                             <li><Link href="/ServicesPage" onClick={() => setMenuOpen(false)}>Services</Link></li>
                             <li><Link href="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                             <li>
                               <button
                                 className="close-menu"
                                 onClick={() => setMenuOpen(false)}
                                 aria-label="Close navigation menu"
                               >
                                 Close
                               </button>
                             </li>
                           </ul>
                         </div>
                       </div>
                     )}


        </header>
        
        <div className="servicesHeroContent">
          <h1>Our Services</h1>
          <p>
            We specialize in shipping goods efficiently and securely.<br />
            Explore the wide range of services we offer to simplify your logistics.
          </p>
        </div>
      </section>

      {/* ===== 2) IMAGE LEFT + TEXT RIGHT (AUTO FLIP) ===== */}
      <section className="introSection">
        <div className="introBox">
          {/* LEFT: auto-flipping images */}
          <div className="introImage">
            {flipImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Shipping ${index + 1}`}
                className={`flipImage ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* RIGHT: text */}
          <div className="introText">
            <div className="textOverlay">
              <h2>Reliable Logistics Solutions</h2>
              <p>
                From China to Zimbabwe, we deliver excellence in every shipment.
                Experience top-class service, transparent pricing, and unbeatable reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3) UPDATED SERVICES CONTAINERS ===== */}
      <section className="servicesSection">
        {/* TOP CONTAINER */}
           <div className="headtag"><h1>CM Logistics</h1></div>
        <div className="servicesContainer topContainer">
          {topServices.map((service, index) => (
            <div className="serviceCard" key={index}>
              <div className="serviceIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM CONTAINER */}
        <div className="servicesContainer bottomContainer">
          {bottomServices.map((service, index) => (
            <div className="serviceCard" key={index}>
              <div className="serviceIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>


          
 {/* our work 22 Section */}  
    <section>
      <div className="our-works">
        <h2>Our Works</h2>
        <p className="work-text">
          We create visually striking branding and marketing campaigns that
          captivate audiences and tell your story.
        </p>

        <div className="carousel">
          {images.map((img, index) => {
            let position = index - current;
            if (position < 0) position += images.length;

            let className = "card";
            if (position === 0) className += " left2";
            else if (position === 1) className += " left1";
            else if (position === 2) className += " active";
            else if (position === 3) className += " right1";
            else className += " right2";

            return (
              <div
                key={index}
                className={className}
                style={{
                  backgroundImage: `url(${img.src?.src || img.src})`
                }}
              ></div>
            );
          })}
        </div>

        <div className="caption">
          <h3>{images[current].title}</h3>
          <p>{images[current].author}</p>
        </div>

        <div className="controls">
          <button onClick={prevSlide}>&larr;</button>
          <button onClick={nextSlide}>&rarr;</button>
        </div>
      </div>
    </section>

    



      {/* ===== 4) SERVICE OVERVIEW SECTION ===== */}
              <section className="serviceOverviewSection">
                <h1>Service Overview</h1>
                <div className="overviewText">
                  <div className="textOverlay">
                    <p>
                      At <span className="companyName">CM Logistics</span>, we specialize in providing end-to-end shipping solutions from China to Zimbabwe. 
                      Our comprehensive services include sea freight, air freight, land transport, customs clearance, warehousing, and packaging. 
                      We ensure that your goods are transported efficiently, safely, and on schedule, backed by our expert team and cutting-edge logistics systems.
                    </p>
                    <p>
                      With years of experience and a commitment to customer satisfaction, <span className="companyName">CM Logistics</span> streamlines international shipping, 
                      providing transparency, reliability, and peace of mind for every client. We handle all the complex documentation and logistics, 
                      allowing you to focus on growing your business while we take care of your shipments from start to finish.
                    </p>
                    <p>
                      With years of experience and a commitment to customer satisfaction, <span className="companyName">CM Logistics</span> streamlines international shipping, 
                      providing transparency, reliability, and peace of mind for every client. We handle all the complex documentation and logistics, 
                      allowing you to focus on growing your business while we take care of your shipments from start to finish.
                    </p>
                  </div>
                </div>
              </section>



    {/* Scrolling bottom strip */}
    <div className="pricingline"></div>
      <div className="scrolling-strip">
        <div className="scrolling-text">
          <span>Digital Design ✱ Digital Marketing ✱ Web Design & Development ✱ Creative Marketing ✱ Media Production ✱ Signage Solutions ✱</span>
          <span>Digital Design ✱ Digital Marketing ✱ Web Design & Development ✱ Creative Marketing ✱ Media Production ✱ Signage Solutions ✱</span>
        </div>
      </div>


        {/* CTA */}
      <section className="ctaSection">
        <div className="ctaContent">
          <h2>Ready to ship your goods?</h2>
          <p>Contact us today to get a free quote or discuss your shipping needs.</p>
          <Link href="/Contact">
            <button>Get in Touch</button>
          </Link>
        </div>
      </section>





      {/* Pricing Section */}
        <section className="pricing">
          <div className="pricingline2"></div>
          <h5>Pricing Plan</h5>
          <h2>We Make Shipping Simple And Less Expensive</h2>
          <p>
          Flexible pricing designed to grow with your vision, choose the plan that fits your journey
          </p>

          <div className="pricing-cards">
            {[
              {
                title: 'Basic Plan',
                price: '$460',
                target: 'Good For Personal Portfolio',
                benefits: [
                  'Logo design + social kit',
                  '1-Page Website',
                  '1 Month Support',
                ],
              },
              {
                title: 'Premium Plan',
                price: '$1000',
                target: 'Good For Small Company',
                benefits: [
                  'Full branding & guidelines',
                  'Corporate Website (5 Pages)',
                  '2 Months Support + SEO Setup',
                ],
                highlight: true,
              },
              {
                title: 'Corporate Plan',
                price: '$1500',
                target: 'Good For Big Company',
                benefits: [
                  'Brand strategy + marketing kit',
                  'Advanced Website + eCommerce',
                  '3 Months Support & Analytics',
                ],
              },
            ].map((plan, index) => (
              <div
                className={`pricing-card ${plan.highlight ? 'highlight-card' : ''}`}
                key={index}
              >
                <h4>{plan.title}</h4>
                <h2>{plan.price}<span>/cbm</span></h2>
                <p>{plan.target}</p>
                <ul>
                  {plan.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button>Choose Plan</button>
              </div>
            ))}
          </div>
        </section>

              {/*=====6 FOOTER OUR FOOTER==== */}

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
