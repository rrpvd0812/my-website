import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">RR</span>
              </div>
              <span className="font-bold text-xl">RR PVD</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for Vacuum Coating Technology, Installation, and Consultancy. Elevating surface finishing standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold-500">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold-500">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>PVD Machine Installation</li>
              <li>Color Recipe Development</li>
              <li>Plant Maintenance</li>
              <li>Technical Consultancy</li>
              <li>Spare Parts Supply</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold-500">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} RR PVD Coating and Solutions. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-gray-800 hover:bg-gold-500 hover:text-gray-900 rounded-full transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;