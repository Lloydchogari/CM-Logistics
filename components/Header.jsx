'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../styles/Header.scss';

export default function Header() {
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
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/ServicesPage">Services</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
