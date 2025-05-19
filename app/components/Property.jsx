'use client';

import { useState, useRef, useEffect } from 'react';
import { FiLayers, FiMapPin } from 'react-icons/fi';

export default function Properties() {
  const properties = [
    {
      id: 1,
      title: "3-Bedroom Unfinished House – Customize Your Dream Home",
      status: "For Sale",
      price: "$45,000",
      size: "45×100ft",
      location: "Abokobi Boi (near Aburi mountains)",
      image: "property1.jpeg",
      features: [
        "3 Bedrooms",
        "2 Bathrooms",
        "Hall & Kitchen",
        "Plastering completed",
        "Burglar proofing installed",
        "Fully walled and gated"
      ],
      contact: "+233 53 379 7792",
      media: [
        { type: 'image', src: 'property1.jpeg' },
        { type: 'image', src: 'property1_2.jpeg' },
        { type: 'video', src: 'property1_3.mp4' },
        { type: 'video', src: 'property1_4.mp4' },
        { type: 'video', src: 'property1_5.mp4' },
      ]
    },
  ];

  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && currentProperty?.media[selectedMediaIndex]?.type === 'video') {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [selectedMediaIndex, currentProperty]);

  const openModal = (property, index = 0) => {
    setCurrentProperty(property);
    setSelectedMediaIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateMedia = (direction) => {
    if (direction === 'prev') {
      setSelectedMediaIndex((prev) => (prev === 0 ? currentProperty.media.length - 1 : prev - 1));
    } else {
      setSelectedMediaIndex((prev) => (prev === currentProperty.media.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Properties</h3>
      <div className="space-y-6">
        {properties.map(property => (
          <div key={property.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              {/* Property Image */}
              <div className="md:w-1/3">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onClick={() => openModal(property, 0)}
                  />
                </div>
              </div>
              
              {/* Property Details */}
              <div className="md:w-2/3">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold text-gray-800">{property.title}</h4>
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-medium">
                    {property.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-3 mb-4">
                  <div className="flex items-center text-gray-700">
                    <span>{property.price}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiLayers className="mr-2 text-teal-600" />
                    <span>{property.size}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiMapPin className="mr-2 text-teal-600" />
                    <span>{property.location}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 mb-2">Key Features:</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <svg className="w-4 h-4 mt-1 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${property.contact.replace(/\D/g, '')}`}
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Contact Us
                  </a>
                  <button
                    onClick={() => openModal(property, 0)}
                    className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    View All Media
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && currentProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Property title in modal */}
              <h3 className="text-xl font-bold mb-4">{currentProperty.title}</h3>
              
              {/* Main media display */}
              <div className="relative mb-4">
                {currentProperty.media[selectedMediaIndex].type === 'image' ? (
                  <img
                    src={currentProperty.media[selectedMediaIndex].src}
                    alt={`Property image ${selectedMediaIndex + 1}`}
                    className="rounded-lg w-full h-96 object-contain"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    muted
                    key={currentProperty.media[selectedMediaIndex].src}
                    className="rounded-lg w-full h-96 object-contain"
                  >
                    <source src={currentProperty.media[selectedMediaIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                
                {/* Navigation arrows */}
                <button
                  onClick={() => navigateMedia('prev')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => navigateMedia('next')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Carousel thumbnails */}
              <div className="flex space-x-2 overflow-x-auto py-2">
                {currentProperty.media.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedMediaIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 cursor-pointer rounded border-2 ${selectedMediaIndex === index ? 'border-teal-500' : 'border-transparent'}`}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-gray-200 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
