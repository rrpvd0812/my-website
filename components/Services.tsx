import React from 'react';
import { Settings, Wrench, PenTool, Palette, ShoppingBag, Box } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'consultancy',
    title: 'PVD Consultancy',
    description: 'Expert advice on plant setup, process selection, and market trends.',
    details: ['Greenfield project planning', 'Process optimization', 'Cost reduction strategies', 'Technical training for staff'],
    icon: PenTool,
  },
  {
    id: 'installation',
    title: 'Machine Installation',
    description: 'Complete turnkey installation and commissioning of PVD vacuum systems.',
    details: ['Site inspection & layout planning', 'Assembly and calibration', 'Utility connection (Water, Air, Power)', 'Leak detection and vacuum testing'],
    icon: Settings,
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    description: 'Preventative and breakdown maintenance to ensure high uptime.',
    details: ['Routine vacuum pump servicing', 'Target and shield replacement', 'Troubleshooting electrical systems', 'Leak hunting and repair'],
    icon: Wrench,
  },
  {
    id: 'color',
    title: 'Color Recipes',
    description: 'Custom development of decorative coating colors.',
    details: ['TiN (Gold)', 'TiCN (Rose Gold/Copper)', 'TiAlN (Black/Grey)', 'Multi-color/Rainbow finishes'],
    icon: Palette,
  },
  {
    id: 'parts',
    title: 'Spare Parts Supplier',
    description: 'High-quality consumables and critical components.',
    details: ['Sputtering targets & Arc cathodes', 'Vacuum oils & greases', 'Sensors & Controllers', 'Custom jigs and fixtures'],
    icon: ShoppingBag,
  },
  {
    id: 'others',
    title: 'Other Services',
    description: 'Additional support for the coating industry.',
    details: ['Pre-treatment cleaning solutions', 'Quality testing', 'Substrate analysis', 'De-coating services'],
    icon: Box,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold-600 font-semibold tracking-wide uppercase mb-2">What We Do</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive PVD Solutions</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide a full spectrum of services tailored to meet the rigorous demands of the vacuum coating industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
              <div className="p-8">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 mr-2 shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;