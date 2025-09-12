'use client';
import React from 'react';
import Slider from 'react-slick'; // ✅ import Slider
import Image from 'next/image';
import '../styles/Testimonials2.scss';
import "slick-carousel/slick/slick.css"; // ✅ slick carousel CSS
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Edwin Moyo",
    position: "Furniture",
    text: "These guys transformed my brand presence with their innovative approach and attention to detail. Packages always arrive on time and in perfect condition.",
    rating: 5,
  },
  {
    name: "Feng Wei",
    position: "Kitchen utensils",
    text: "Their approach transforms ideas into impactful brand experiences, positioning them as trusted partners and true architects of meaningful marketing and storytelling excellence.",
    rating: 4,
  },
  {
    name: "Grace Ncube",
    position: "Karan Investiments",
    text: "Very affordable rates and clear tracking updates. I’m impressed.",
    rating: 3,
  },
  {
    name: "Tonderai Rudyi",
    position: "Tatu Capital",
    text: "Switched to CM Logistics after repeated delays with another carrier. Since then, my online shop’s orders have been reaching customers faster and in better condition.",
    rating: 5,
  },
  {
    name: "Huang Min",
    position: "Clothing Owner",
    text: "Was my first time working with them and the care they gave me was like we have decades working together, and up to now they’re my only shipping support.",
    rating: 5,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // 1 cards at a time
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // 1 card on mobile
      },
    },
  ],
};

const Testimonials2 = () => {
  return (
    <section className="testimonials-section">
      <h4 className="section-subtitle">Testimonials</h4>
      <h2 className="section-title">What clients say about us...</h2>

      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-text-box">
              <span className="quote-mark">“</span>
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-position">{t.position}</p>

              {/* Rating Stars */}
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < t.rating ? "star filled" : "star"}>
                    ★
                  </span>
                ))}
              </div>

              <p className="testimonial-text">{t.text}</p>
            </div>
          </div>
        ))}
      </Slider>

      <h4 className="section-subtitle">Happy Clients</h4>
      <h2 className="section-title">Successfully worked with them</h2>
    </section>
  );
};

export default Testimonials2;
