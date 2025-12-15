import React from 'react';

const images = [
  { 
    url: '/Gallery/utensils.png', 
    title: 'Gold PVD Cutlery' 
  },
  { 
    url: '/Gallery/pvdrailings.png', 
    title: 'Architectural Railings' 
  },
  { 
    url: '/Gallery/sink.png', 
    title: 'Designer Steel Sink' 
  },
  { 
    url: '/Gallery/others.png', 
    title: 'Sanitary Fittings' 
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h4 className="text-gold-600 font-semibold tracking-wide uppercase mb-2">Portfolio</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Coating Excellence</h2>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right hidden md:block">
            Showcasing the versatility of our coating recipes on various substrates including stainless steel, brass, and plastic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg cursor-pointer h-64 shadow-lg">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg border-b-2 border-gold-500 pb-1">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-lg border-l-4 border-gold-500">
           <p className="text-gray-700 italic text-center text-lg">
             "RR PVD Coating provided us with the perfect Rose Gold recipe that significantly increased our product sales. Their technical support is unmatched."
           </p>
           <p className="text-gray-500 text-center mt-4 text-sm font-bold">- Mayura PVD</p>
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;