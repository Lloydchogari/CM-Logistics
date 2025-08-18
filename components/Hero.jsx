'use client';
import Link from 'next/link';
import '../styles/Hero.scss';

const whatsappNumber = '263771234567';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Reliable Shipping from<br />China to Zimbabwe
        </h1>
        <p className="hero-subtitle">Fast, Affordable, and Trusted Logistics Solutions.</p>
      </div>

      <div className="hero-cards">
        <div className="hero-card">
          <div className="card-image framed" style={{ backgroundImage: "url('/Cont1.jpg')" }}></div>
          <div className="card-label">45<span>Days</span></div>
        </div>
        <div className="hero-card">
          <div className="card-image framed" style={{ backgroundImage: "url('/ship1.jpg')" }}></div>
          <div className="card-label">$460<span>/cbm</span></div>
        </div>
      </div>
    </section>
  );
}
