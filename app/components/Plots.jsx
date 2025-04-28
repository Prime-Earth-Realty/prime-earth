'use client'; // Required for interactivity

import { useState } from 'react';

export default function Plots() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState('');

  const plotOptions = [
    {
      size: "70×100",
      price: "$8,500",
      features: [
        "Standard residential plot",
        "Installment plans available",
        "Full documentation"
      ],
      highlight: false
    },
    {
      size: "100×100", 
      price: "$12,000",
      features: [
        "Premium residential plot",
        "Corner locations available",
        "Commercial use permitted"
      ],
      highlight: true
    },
    {
      size: "50×80",
      price: "$6,200",
      features: [
        "Starter residential plot",
        "Great for first-time buyers",
        "Quick ownership process"
      ],
      highlight: false
    }
  ];

  const handleReserveClick = (size) => {
    setSelectedPlot(size);
    setShowModal(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Spacious Plots For Every Dream
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plotOptions.map((plot, index) => (
            <div 
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plot.highlight 
                  ? "border-teal-600 shadow-md transform md:-translate-y-2" 
                  : "border-gray-200"
              }`}
            >
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{plot.size}</h3>
                  <p className="text-xl text-teal-600 font-medium mt-2">{plot.price}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plot.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handleReserveClick(plot.size)}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plot.highlight
                      ? "bg-teal-700 hover:bg-teal-800 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Book a Consultation
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your interest in the {selectedPlot} plot. Our team will contact you to schedule a meeting.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}