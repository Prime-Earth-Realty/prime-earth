'use client';

import { useState } from 'react';

export default function Properties() {
  const media = [
    { type: 'image', src: 'property1.jpeg' },
    { type: 'image', src: 'property1_2.jpeg' },
    { type: 'video', src: 'property1_3.mp4' },
    { type: 'video', src: 'property1_4.mp4' },
    { type: 'video', src: 'property1_5.mp4' },
  ];

  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index = 0) => {
    setSelectedMediaIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateMedia = (direction) => {
    if (direction === 'prev') {
      setSelectedMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    } else {
      setSelectedMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Property for Sale</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Media section */}
        <div className="space-y-4">
          {media[0].type === 'image' ? (
            <img
              src={media[0].src}
              alt="Property main image"
              className="rounded-lg shadow-md w-full h-72 object-cover cursor-pointer"
              onClick={() => openModal(0)}
            />
          ) : (
            <video
              controls
              muted
              className="rounded-lg shadow-md w-full h-72 object-cover cursor-pointer"
              onClick={() => openModal(0)}
            >
              <source src={media[0].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Details section */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">USD 45,000.00</h2>
            <p className="text-lg text-gray-700">
              This property includes both the building and the land. Ideal for residential or investment purposes.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => openModal(0)}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              View All
            </button>
            <a
              href="/#contact"
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
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
              
              {/* Main media display */}
              <div className="relative mb-4">
                {media[selectedMediaIndex].type === 'image' ? (
                  <img
                    src={media[selectedMediaIndex].src}
                    alt={`Property image ${selectedMediaIndex + 1}`}
                    className="rounded-lg w-full h-96 object-contain"
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    muted
                    className="rounded-lg w-full h-96 object-contain"
                  >
                    <source src={media[selectedMediaIndex].src} type="video/mp4" />
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
                {media.map((item, index) => (
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