'use client';
import React from 'react';
import '../styles/Offices.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Offices = () => {
  return (
    <section className="officeSection">

      {/* City Header Block */}
      <div className="cityHeader">
        <div className="line"></div>
        <h1 className="cityName">GUANGZHOU</h1>
        <div className="line"></div>
      </div>
      <h3 className="countrySubheading">China</h3>

      <div className="officeWrapper">
        <div className="officeCardsRow mobileFlip">
          <div className="flipCard">
            <div className="flipCardInner">
              {/* Front side - China */}
              <div className="flipCardFront officeCard">
                <h3>China</h3>
                <p><FaMapMarkerAlt className="icon" /> 88 NanJing Road, Shanghai</p>
                <p><FaPhoneAlt className="icon" /> +86 18 6579 02702</p>
                <p><FaEnvelope className="icon" /> isaacmuponya@gmail.com</p>
              </div>
              {/* Back side - Zimbabwe */}
              <div className="flipCardBack officeCard">
                <h3>Zimbabwe</h3>
                <p><FaMapMarkerAlt className="icon" /> 45 Samora Machel Ave, Harare</p>
                <p><FaPhoneAlt className="icon" /> +263 77 123 4567</p>
                <p><FaEnvelope className="icon" /> zim@shiplink.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="officeVideo">
          <video autoPlay loop muted playsInline>
            <source src="/ZeggVid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
};

export default Offices;