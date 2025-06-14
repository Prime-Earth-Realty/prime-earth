'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi';

// Dynamic import for map
const Map = dynamic(() => import('@/app/components/Map'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 flex items-center justify-center">Loading map...</div>,
});

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);

  const locations = [
    {
      id: 1,
      name: 'Ningo Prampram',
      coordinates: [5.808432294194406, 0.12828909900043034],
      description: 'Fast-growing residential area with upcoming infrastructure projects including new roads and commercial centers.',
      features : [],
      images: [],
    },
    {
      id: 2,
      name: 'Tema Community 25',
      coordinates: [5.72744634233405, 0.01574986897821217],
      description: 'Fast-growing residential area with upcoming infrastructure projects including new roads and commercial centers.',
      features : [],
      images: [],
    },
    {
      id: 3,
      name: 'Tsopoli',
      coordinates: [5.872741, 0.209403],
      description: 'Fast-growing residential area with upcoming infrastructure projects including new roads and commercial centers.',
      features: [
        'Fast selling. Total of 50 plots.',
        '30 mins drive from Central University, Miotso.',
        '20 mins drive from Dawa Industrial zone.',
        '13 mins drive from Saglemi Housing development.',
        '10 minutes drive from Tsopoli junction (along the main Accra-Aflao road).',
        '3 mins from D/A Primary School Amanakpo.',
        'Surrounding communities and housing present.',
        'Access to demarcated road network used by residents.',
        'Access to Akosombo and Volta Lake.',
        'The main Accra-Aflao road is currently under expansion and this will see a significant boost in residency and traffic flow.'
      ],
      images: [
        '/Tsopoli/Tsopoli_3.jpeg',
        '/Tsopoli/Tsopoli_2.jpeg',
        '/Tsopoli/Tsopoli_1.jpeg',
        '/Tsopoli/Tsopoli_4.jpeg',
        '/Tsopoli/Tsopoli_5.jpeg',
        '/Tsopoli/Tsopoli_6.jpeg',
        '/Tsopoli/Tsopoli_7.jpeg',
        '/Tsopoli/Tsopoli_8.jpeg',
        '/Tsopoli/Tsopoli_9.jpeg',
        '/Tsopoli/Tsopoli_10.jpeg',
        '/Tsopoli/Tsopoli_11.jpeg',
        '/Tsopoli/Tsopoli_12.jpeg',
        '/Tsopoli/Tsopoli_13.jpeg',
      ],
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedLocation.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedLocation.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-teal-800 mb-2">Our Land Locations</h1>
        <p className="text-lg text-center text-gray-600 mb-12">Select a location to explore available land</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Available Land</h2>
              <div className="space-y-3">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => {
                      setSelectedLocation(location);
                      setCurrentImageIndex(0);
                    }}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedLocation?.id === location.id
                        ? 'bg-teal-100 text-teal-800'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <h3 className="font-medium">{location.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Prime land available
                    </p>
                  </button>
                ))}
                {selectedLocation && (
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="mt-4 w-full text-center py-2 px-4 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    Clear Selection
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-2">
            {selectedLocation ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Map */}
                <div className="h-96 w-full relative">
                  <Map coordinates={selectedLocation.coordinates} />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedLocation.name}</h2>
                    <div className="flex items-center text-gray-700">
                      <FiMapPin className="mr-2 text-teal-600" />
                      <span>Prime Land Available</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{selectedLocation.description}</p>

          <div className="mb-6">
           <h5 className="font-medium text-gray-800 mb-2">Key Features:</h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedLocation.features.map((features, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <svg
                    className="w-4 h-4 mt-1 mr-2 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {features}
                </li>
              ))}
            </ul>
          </div>


                  {/* Only show carousel if images exist */}
                  {selectedLocation.images && selectedLocation.images.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Location Photos</h3>
                      <div className="relative">
                        <div
                          ref={carouselRef}
                          className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-100"
                        >
                          <img
                            src={selectedLocation.images[currentImageIndex]}
                            alt={`${selectedLocation.name} view ${currentImageIndex + 1}`}
                            className="w-full h-full transition-opacity duration-300 object-cover"
                          />

                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                          >
                            <FiChevronLeft className="w-5 h-5 text-gray-800" />
                          </button>

                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                          >
                            <FiChevronRight className="w-5 h-5 text-gray-800" />
                          </button>

                          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                            {selectedLocation.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full ${
                                  currentImageIndex === index ? 'bg-teal-600' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contact Button */}
                  <div className="pt-4">
                    <a
                      href="/#contact"
                      className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm"
                    >
                      Inquire About This Land
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-700 mt-4">Select a location</h3>
                <p className="text-gray-500 mt-2">Choose from the list to view land details</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
