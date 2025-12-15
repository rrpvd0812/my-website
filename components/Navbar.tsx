import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      {/* Top Bar - Hidden on mobile, visible on lg screens */}
      <div className={`hidden lg:block container mx-auto px-6 mb-2 border-b ${isScrolled ? 'border-gray-200 pb-2' : 'border-gray-600/30 pb-2 text-white'}`}>
        <div className="flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-gold-500 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center hover:text-gold-500 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex space-x-4">
            <span className={isScrolled ? 'text-gray-500' : 'text-gray-300'}>Expert Coating Solutions</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center mr-3 shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">RR</span>
            </div>
            <div className={`flex flex-col ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="font-bold text-lg leading-tight tracking-wide">RR PVD</span>
              <span className="text-xs uppercase tracking-widest opacity-80">Coating & Solutions</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium text-sm uppercase tracking-wider hover:text-gold-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-800 font-medium hover:text-gold-600 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${CONTACT_INFO.phone}`} className="text-gold-600 font-bold py-2 mt-2">
            Call Us: {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;