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
    position: "MyCash",
    text: "Creative Journey transformed our brand presence with their innovative approach and attention to detail. Their team is professional, creative, and truly invested in our success from start to finish.",
    rating: 5,
  },
  {
    name: "Feng Wei",
    position: "Leengate",
    text: "Their approach transforms ideas into impactful brand experiences, positioning them as trusted partners and true architects of meaningful marketing and storytelling excellence.",
    rating: 4,
  },
  {
    name: "Grace Ncube",
    position: "Karan Investiments",
    text: "Creative Journey delivered stunning signage that turned heads and boosted our visibility bold, professional, and perfectly on brand.",
    rating: 5,
  },
  {
    name: "Tonderai Rudyi",
    position: "Tatu Capital",
    text: "The visuals from Creative Journey captured our event’s energy perfectly crisp photography and cinematic videography that truly impressed.",
    rating: 5,
  },
  {
    name: "Huang Min",
    position: "Nbs Bank",
    text: "Creative Journey delivered powerful visuals for NBS sharp, professional shots that brought our brand story to life beautifully.",
    rating: 3,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // 1 cards at a time
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
