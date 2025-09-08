'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/Header.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    // Detect mobile screen
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);



  return (
     <header className="headder">
              <nav className="nav">
                <div className="logo">
                  <Image
                    src="/shiplink-logo2.png"
                    alt="ShipLink Logo"
                    width={80}
                    height={80}
                    quality={100}
                    priority
                  />
                </div>
    
                {/* Show mobile menu button only on mobile */}
                {isMobile && (
                  <button
                    className="mobile-menu-toggle"
                    aria-label="Open navigation menu"
                    onClick={() => setMenuOpen(true)}
                  >
                    Menu
                  </button>
                )}
    
                {/* Desktop nav-links */}
                {!isMobile && (
                  <ul className="nav-links desktop-nav">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/ServicesPage">Services</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                  </ul>
                )}
              </nav>
    
              {/* Mobile overlay menu */}
              {isMobile && (
                <div className={`mobile-nav-blur${menuOpen ? ' open' : ''}`}>
                  <div className="mobile-nav-content">
                    <div className="mobile-logo-side">
                      <Image
                        src="/shiplink-logo2.png"
                        alt="ShipLink Logo"
                        width={130}
                        height={130}
                        quality={100}
                        priority
                      />
                    </div>
                    <ul className="mobile-nav-links">
                      <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                      <li><Link href="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
                      <li><Link href="/ServicesPage" onClick={() => setMenuOpen(false)}>Services</Link></li>
                      <li><Link href="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                      <li>
                        <button
                          className="close-menu"
                          onClick={() => setMenuOpen(false)}
                          aria-label="Close navigation menu"
                        >
                          Close
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </header>
  );
}
