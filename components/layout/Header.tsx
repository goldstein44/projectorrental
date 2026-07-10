// components/layout/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white border-b shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo - Improved */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center text-4xl shadow-md">
              📽️
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter font-serif text-gray-900 leading-none">
                Projector Rental NG
              </h1>
              <p className="text-xs text-amber-600 tracking-widest -mt-1">AV RENTAL SERVICES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-amber-600 transition">Home</Link>
            <Link href="/about" className="hover:text-amber-600 transition">About</Link>
            <Link href="/services" className="hover:text-amber-600 transition">Services</Link>
            <Link href="/locations" className="hover:text-amber-600 transition">Locations</Link>
            <Link href="/contact" className="hover:text-amber-600 transition">Contact</Link>
          </nav>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-4xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2348148080273"
            target="_blank"
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 text-sm transition"
          >
            💬 WhatsApp
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-8 px-6">
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link href="/" className="hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" className="hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/services" className="hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/locations" className="hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Locations</Link>
              <Link href="/contact" className="hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <FloatingWhatsApp phone="08148080273" />
    </>
  );
};

export default Header;