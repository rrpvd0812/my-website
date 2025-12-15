import React from 'react';

const steps = [
  { number: '01', title: 'Consultation', desc: 'We analyze your requirements, substrate types, and desired output to recommend the best PVD solution.' },
  { number: '02', title: 'Implementation', desc: 'Our team handles the installation, calibration, or recipe development with precision engineering.' },
  { number: '03', title: 'Validation', desc: 'Rigorous testing of the coating quality, adhesion, and color consistency to meet industry standards.' },
  { number: '04', title: 'Support', desc: 'Ongoing maintenance, spare parts supply, and troubleshooting to keep your production running smooth.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-gold-500 font-semibold tracking-wide uppercase mb-2">How We Work</h4>
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute top-0 right-0 text-6xl font-black text-gray-800 opacity-50 -mt-4 -mr-4 select-none group-hover:text-gold-500/20 transition-colors">
                {step.number}
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-full hover:border-gold-500/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;