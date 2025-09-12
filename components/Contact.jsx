'use client';
import React, { useEffect, useState } from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  const texts = [
    "We'd love to hear from you! Whether it's a question, feedback, or just a hello, reach out anytime.",
    "Our team is always here to help you get the best support, don’t hesitate to connect with us!",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000); // change text every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contactSection">
      <div className="contactOverlay" />
      <h2 className="contactHeading">Contact Us</h2>
      <div className="contactContent">
        {/* Right side now: Form */}
        <div className="contactForm">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Left side now: Text with border box */}
        <div className="contactText">
          <div className="corner-border-box">
            <div className="vertical-line-top" />
            <div className="vertical-line-bottom" />
            <p key={currentTextIndex} className="animatedText">
              {texts[currentTextIndex]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
