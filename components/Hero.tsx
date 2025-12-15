import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/192/1920/1080" 
          alt="Industrial PVD Coating Machine Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-sm">
            <span className="text-gold-400 text-sm font-semibold tracking-wider uppercase">Advanced Surface Engineering</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Mastering the Art of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">PVD Coating</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            From complete machine installation to custom color recipes. RR PVD Coating and Solutions delivers industrial-grade excellence for all your vacuum coating needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold rounded shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center">
              Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#services" className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-all flex items-center justify-center">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;