// components/layout/Header.tsx
// Universal header with text logo

import Link from 'next/link';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-white border-b z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Text Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center text-3xl shadow">
              📽️
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tighter font-serif text-gray-900">
                Projector Rental NG
              </h1>
              <p className="text-xs text-amber-600 -mt-1 tracking-widest">PREMIUM AV RENTALS</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-amber-600 transition">Home</Link>
            <Link href="#packages" className="hover:text-amber-600 transition">Packages</Link>
            <Link href="#how-it-works" className="hover:text-amber-600 transition">How it Works</Link>
            <Link href="#faq" className="hover:text-amber-600 transition">FAQ</Link>
          </nav>

          {/* Desktop WhatsApp CTA */}
          <a
            href="https://wa.me/2348149660626"
            target="_blank"
            className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold text-sm transition"
          >
            💬 WhatsApp
          </a>
        </div>
      </header>

      <FloatingWhatsApp phone="08149660626" />
    </>
  );
};

export default Header;