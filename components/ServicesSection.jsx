'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import '../styles/ServicesSection.scss';
import {
  FaTruck,
  FaShip,
  FaWarehouse,
  FaPlane,
  FaBoxOpen,
  FaGlobe,
  FaChevronUp,
  FaChevronDown,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaTruck />,
    title: 'Land Freight',
    description: 'Reliable trucking services across the country.',
    path: '/services/land-freight',
  },
  {
    icon: <FaShip />,
    title: 'Sea Freight',
    description: 'Cost-effective shipping via sea routes.',
    path: '/services/sea-freight',
  },
  {
    icon: <FaPlane />,
    title: 'Air Freight',
    description: 'Fast and secure air transport.',
    path: '/services/air-freight',
  },
  {
    icon: <FaWarehouse />,
    title: 'Warehousing',
    description: 'Secure and efficient storage solutions.',
    path: '/services/warehousing',
  },
  {
    icon: <FaBoxOpen />,
    title: 'Packaging',
    description: 'Professional packaging to protect items.',
    path: '/services/packaging',
  },
  {
    icon: <FaGlobe />,
    title: 'Customs Clearance',
    description: 'Smooth import/export documentation.',
    path: '/services/customs-clearance',
  },
];

const ServicesSection = () => {
  const [currentPair, setCurrentPair] = useState(0);
  const carouselRef = useRef(null);
  
  // Group services into pairs
  const servicePairs = [];
  for (let i = 0; i < services.length; i += 2) {
    servicePairs.push(services.slice(i, i + 2));
  }

  const scrollToNext = () => {
    if (currentPair < servicePairs.length - 1) {
      setCurrentPair(currentPair + 1);
    }
  };

  const scrollToPrev = () => {
    if (currentPair > 0) {
      setCurrentPair(currentPair - 1);
    }
  };

  return (
    <section className="services-section">
      <div className="heading-container">
        <h1>Our Services</h1>
      </div>

      {/* Desktop Grid */}
      <div className="services-grid desktop-only">
        {services.map((service, index) => (
          <Link href={service.path} key={index} className="service-card">
            <div className="card-header">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
            <div className="card-body">
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="mobile-carousel mobile-only">
        <div className="carousel-container">
          <div 
            className="carousel-wrapper"
            ref={carouselRef}
            style={{ transform: `translateY(-${currentPair * 100}%)` }}
          >
            {servicePairs.map((pair, pairIndex) => (
              <div key={pairIndex} className="carousel-pair">
                <div className="pair-container">
                  {pair.map((service, index) => (
                    <Link href={service.path} key={index} className="mobile-service-card">
                      <div className="mobile-card-header">
                        <div className="mobile-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                      </div>
                      <div className="mobile-card-body">
                        <p>{service.description}</p>
                      </div>
                    </Link>
                  ))}
                  
                  {/* Navigation buttons inside container */}
                  <div className="carousel-nav">
                    <button 
                      onClick={scrollToPrev} 
                      className={`nav-btn nav-up ${currentPair === 0 ? 'disabled' : ''}`}
                      disabled={currentPair === 0}
                    >
                      <FaChevronUp />
                    </button>
                    <span className="page-indicator">
                      {currentPair + 1} / {servicePairs.length}
                    </span>
                    <button 
                      onClick={scrollToNext} 
                      className={`nav-btn nav-down ${currentPair === servicePairs.length - 1 ? 'disabled' : ''}`}
                      disabled={currentPair === servicePairs.length - 1}
                    >
                      <FaChevronDown />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="see-more-left-wrapper">
        <Link href="/ServicesPage" className="see-more-left-btn">
          See More
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;