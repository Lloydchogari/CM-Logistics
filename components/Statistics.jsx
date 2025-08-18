'use client';
import { useEffect, useRef, useState } from 'react';
import '../styles/Statistics.scss';

const stats = [
  { value: 1500, label: 'Successful Shipments' },
  { value: 350, label: 'Returning Clients' },
  { value: 25, label: 'Shipping Partners' },
  { value: 10, label: 'Years Experience' },
];

const useInView = (ref, threshold = 0.5) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);

  return isIntersecting;
};

const StatCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    let duration = 2000;
    let increment = end / (duration / 5);

    if (inView) {
      setCount(0);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 5);
    } else {
      setCount(0);
    }
  }, [inView, value]);

  return <h2 ref={ref}>{count.toLocaleString()}+</h2>;
};

const StatsSection = () => {
  return (
    <div className="statsSection">
      {stats.map((stat, index) => (
        <div key={index} className="statBox">
          <StatCounter value={stat.value} />
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
