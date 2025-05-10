'use client';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.contact_number || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const response = await fetch("https://formspree.io/f/mjkwodkb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', contact_number: '', message: '' });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-white p-4 md:p-8 rounded-xl shadow-lg">
        {/* Contact Form Section */}
        <div className="space-y-4 md:space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="your@email.com"
              />
            </div>

            {/* Contact Number */}
            <div className="space-y-1">
              <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input 
                type="text" 
                id="contact_number" 
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Contact Number"
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      {/* Contact Information Section */}
      <div className="bg-teal-50 p-6 md:p-6 rounded-xl">
        <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-4 md:mb-6">Contact Information</h3>
        
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-teal-100 p-2 md:p-3 rounded-lg">
              {/* Phone Icon */}
              <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-3 md:ml-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-800">Phone Numbers</h4>
              <p className="mt-1 text-sm md:text-base text-gray-600">Ghana: +233 53 379 7792</p>
              <p className="mt-1 text-sm md:text-base text-gray-600">UK: +44 75 5581 9582</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-teal-100 p-2 md:p-3 rounded-lg">
              {/* Email Icon */}
              <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-3 md:ml-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-800">Email</h4>
              <p className="mt-1 text-sm md:text-base text-gray-600">info@primeearthrealty.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-teal-100 p-2 md:p-3 rounded-lg">
              {/* Location Icon */}
              <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="ml-3 md:ml-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-800">Office Hours</h4>
              <p className="mt-1 text-sm md:text-base text-gray-600">Monday - Friday: 9am - 5pm</p>
              <p className="mt-1 text-sm md:text-base text-gray-600">Saturday: 10am - 2pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
