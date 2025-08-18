'use client';
import React from 'react';
import '../styles/Offices.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Offices = () => {
  return (
    <section className="officeSection">

      {/* 👇 NEW City Header Block */}
      <div className="cityHeader">
        <div className="line"></div>
        <h1 className="cityName">GUANGZHOU</h1>
        <div className="line"></div>
      </div>
      <h3 className="countrySubheading">China</h3>

      <div className="officeWrapper">
        <div className="officeLeft">
          <div className="officeCardsRow">
            <div className="officeCard">
              <h3>China</h3>
              <p><FaMapMarkerAlt className="icon" /> 88 NanJing Road, Shanghai</p>
              <p><FaPhoneAlt className="icon" /> +86 21 1234 5678</p>
              <p><FaEnvelope className="icon" /> china@shiplink.com</p>
            </div>
            <div className="officeCard">
              <h3>Zimbabwe</h3>
              <p><FaMapMarkerAlt className="icon" /> 45 Samora Machel Ave, Harare</p>
              <p><FaPhoneAlt className="icon" /> +263 77 123 4567</p>
              <p><FaEnvelope className="icon" /> zim@shiplink.com</p>
            </div>
          </div>
          <p className="officeNote">
            Clients from both Zimbabwe and China are welcome to visit us physically at our local offices for more information. We are open 24/7 to serve you better.
          </p>
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
