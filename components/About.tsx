import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/seed/pvd_machine/600/800" 
              alt="PVD Machine Interior" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="space-y-4 pt-8">
              <img 
                src="https://picsum.photos/seed/metal_coating/600/600" 
                alt="Coated Products" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="bg-gray-900 p-6 rounded-lg text-white shadow-lg">
                <h4 className="text-3xl font-bold text-gold-500 mb-1">10+</h4>
                <p className="text-sm text-gray-400">Years of Industrial Experience</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h4 className="text-gold-600 font-semibold tracking-wide uppercase mb-2">Who We Are</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Excellence in Vacuum Coating Technology</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              RR PVD Coating and Solutions stands at the forefront of surface finishing technology. We specialize in physical vapor deposition (PVD) processes that enhance the durability, aesthetics, and value of your products.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to provide comprehensive support to the PVD industry—from setting up greenfield projects to optimizing existing coating lines. Whether you need precise color recipes for decorative finishes or robust technical maintenance, our team of experts is ready to serve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded border border-gray-100">
                <Target className="w-8 h-8 text-gold-600 mb-3" />
                <h5 className="font-bold text-gray-800 mb-1">Precision</h5>
                <p className="text-xs text-gray-500">Exact color matching and thickness control.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded border border-gray-100">
                <Users className="w-8 h-8 text-gold-600 mb-3" />
                <h5 className="font-bold text-gray-800 mb-1">Consultancy</h5>
                <p className="text-xs text-gray-500">Expert guidance at every step.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-gold-600 mb-3" />
                <h5 className="font-bold text-gray-800 mb-1">Reliability</h5>
                <p className="text-xs text-gray-500">Durable coatings and minimal downtime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;