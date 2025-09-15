'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Services.scss';
import { FaShip, FaBox, FaTruck, FaPlane, FaWarehouse, FaBoxes, FaClipboardList } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Services() {
  // Mobile responsive nav-bar
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen - Use window check to prevent SSR issues
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    
    // Set initial state
    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
      return () => { 
        if (typeof document !== 'undefined') {
          document.body.style.overflow = ''; 
        }
      };
    }
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

  // Optimized images array - Use proper dimensions
  const images = [
    { src: "/abt.jpg", title: "Work One", author: "John Doe" },
    { src: "/shiplink-logo2.png", title: "Work Two", author: "Jane Smith" },
    { src: "/the1.jpg", title: "Work Three", author: "Alex Ray" },
    { src: "/solo.jpg", title: "Work Four", author: "Lisa Brown" },
    { src: "/tlogo.png", title: "Work Five", author: "David Lee" },
  ];

  const [current, setCurrent] = useState(2); // Start with middle image

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Optimized flip images
  const flipImages = [
    { src: '/abt.jpg', alt: 'Shipping 1' },
    { src: '/26.7.jpg', alt: 'Shipping 2' },
    { src: '/solo.jpg', alt: 'Shipping 3' },
    { src: '/tlogo.png', alt: 'Shipping 4' },
    { src: '/the1.jpg', alt: 'Shipping 5' },
    { src: '/ships.jpg', alt: 'Shipping 6' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flipImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [flipImages.length]);

  return (
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
                quality={85}
                priority
              />
            </div>

            {/* Mobile menu button */}
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
                <li><Link href="/" prefetch={false}>Home</Link></li>
                <li><Link href="/About" prefetch={false}>About</Link></li>
                <li><Link href="/ServicesPage" prefetch={false}>Services</Link></li>
                <li><Link href="/Contact" prefetch={false}>Contact</Link></li>
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
                    quality={85}
                    priority
                  />
                </div>
                <ul className="mobile-nav-links">
                  <li><Link href="/" onClick={() => setMenuOpen(false)} prefetch={false}>Home</Link></li>
                  <li><Link href="/About" onClick={() => setMenuOpen(false)} prefetch={false}>About</Link></li>
                  <li><Link href="/ServicesPage" onClick={() => setMenuOpen(false)} prefetch={false}>Services</Link></li>
                  <li><Link href="/Contact" onClick={() => setMenuOpen(false)} prefetch={false}>Contact</Link></li>
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

      {/* Image flip section with skeleton loading */}
      <section className="introSection">
        <div className="introBox">
          <div className="introImage">
            {flipImages.map((img, index) => (
              <div
                key={index}
                className={`flipImageContainer ${index === currentIndex ? 'active' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                  quality={75}
                />
              </div>
            ))}
          </div>

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

      {/* Services containers */}
      <section className="servicesSection">
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
        
      {/* Our work carousel */}  
      <section className="our-works">
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
              <div key={index} className={className}>
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  style={{ objectFit: 'cover' }}
                  priority={index === current}
                  quality={75}
                />
              </div>
            );
          })}
        </div>

        <div className="caption">
          <h3>{images[current].title}</h3>
          <p>{images[current].author}</p>
        </div>

        <div className="controls">
          <button onClick={prevSlide} aria-label="Previous image">&larr;</button>
          <button onClick={nextSlide} aria-label="Next image">&rarr;</button>
        </div>
      </section>

      {/* Service overview section */}
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
          </div>
        </div>
      </section>

      {/* Scrolling strip */}
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
          <Link href="/Contact" prefetch={false}>
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

      {/* Footer */}
      <footer className="footerSection">
        <div className="footerInnerContainer">
          <div className="footerContainer">
            <div className="footerLeft">
              <Image 
                src="/shiplink-logo2.png" 
                alt="ShipLink Logo" 
                width={140}
                height={140}
                className="logoImage"
                quality={75}
              />
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