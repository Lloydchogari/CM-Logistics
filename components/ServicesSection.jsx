'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/ServicesSection.scss';
import {
  FaTruck,
  FaShip,
  FaWarehouse,
  FaPlane,
  FaBoxOpen,
  FaGlobe,
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
  return (
    <section className="services-section">
      <div className="heading-container">
        <h1>Our Services</h1>
      </div>

      <div className="services-grid">
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

      <div className="see-more-left-wrapper">
        <Link href="/ServicesPage" className="see-more-left-btn">
          See More
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
