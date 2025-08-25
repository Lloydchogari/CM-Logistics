'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import '../styles/Testimonials.scss';

import client1 from '../public/client1.jpeg';
import client2 from '../public/client2.jpeg';
import client3 from '../public/client3.jpeg';
import client4 from '../public/client4.jpeg';
import client5 from '../public/client5.jpeg';
import client6 from '../public/client6.jpeg';
import client7 from '../public/client7.jpeg';
import client8 from '../public/client8.jpeg';
import client9 from '../public/client9.jpeg';

const testimonials = [
  { id: 1, name: 'Alice Chen', image: client1, text: '“Fast, affordable, and reliable service!”' },
  { id: 2, name: 'Brian Dube', image: client2, text: '“Helped me ship from China without hassle.”' },
  { id: 3, name: 'Chen Li', image: client3, text: '“Outstanding communication & support.”' },
  { id: 4, name: 'Diana Zhou', image: client4, text: '“Very impressed with the efficiency.”' },
  { id: 5, name: 'Edwin Moyo', image: client5, text: '“Saved me money and time!”' },
  { id: 6, name: 'Fang Wei', image: client6, text: '“Highly recommend for business shipping.”' },
  { id: 7, name: 'Grace Ncube', image: client7, text: '“Smooth from order to delivery.”' },
  { id: 8, name: 'Huang Min', image: client8, text: '“Reliable, honest, and transparent.”' },
  { id: 9, name: 'Isaac Zhou', image: client9, text: '“Professional team and good tracking.”' },
];

const Testimonials = () => {
  const trackRef = useRef(null); // ✅ fixed for JSX

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animation = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' },
      ],
      {
        duration: 50000, // ✅ Slower scroll: 50 seconds
        iterations: Infinity,
        easing: 'linear',
      }
    );

    return () => animation.cancel();
  }, []);

  const loopingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonialsSection">
      <div className="headingContainer">
        <h2>Testimonials</h2>
      </div>

      <div className="carouselContainer">
        <div className="cardTrackWrapper">
          <div className="cardTrack autoScroll" ref={trackRef}>
            {loopingTestimonials.map((item, idx) => (
              <div className="testimonialCard" key={`${item.id}-${idx}`}>
                <div className="imageCircle">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="cardContent">
                  <h4>{item.name}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
