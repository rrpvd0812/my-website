import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold-600 font-semibold tracking-wide uppercase mb-2">Get In Touch</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-600">Ready to upgrade your coating process? Let's talk.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-gray-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Reach out to us for consultancy, machine requirements, or any PVD related queries. We are available on WhatsApp and Email.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                  <div>
                    <h5 className="font-semibold text-lg">Phone</h5>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                  <div>
                    <h5 className="font-semibold text-lg">WhatsApp</h5>
                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                  <div>
                    <h5 className="font-semibold text-lg">Email</h5>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                  <div>
                    <h5 className="font-semibold text-lg">Location</h5>
                    <p className="text-gray-300">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <div className="w-full h-1 bg-gradient-to-r from-gold-500 to-transparent opacity-50"></div>
               <p className="text-sm text-gray-500 mt-4">© 2024 RR PVD Coating and Solutions</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                <select id="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white">
                  <option value="">Select a service</option>
                  <option value="consultancy">Consultancy</option>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="color">Color Recipes</option>
                  <option value="parts">Spare Parts</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full md:w-auto px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                onClick={() => alert("Thank you for your message! We will contact you shortly.")}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;