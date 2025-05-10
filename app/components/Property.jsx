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

  const [viewAll, setViewAll] = useState(false);
  const displayedMedia = viewAll ? media : [media[0]];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Property for Sale</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Media section */}
        <div className="space-y-4">
          {displayedMedia.map((item, index) =>
            item.type === 'image' ? (
              <img
                key={index}
                src={item.src}
                alt={`Property image ${index + 1}`}
                className="rounded-lg shadow-md w-full h-72 object-cover"
              />
            ) : (
              <video
                key={index}
                controls
                muted
                className="rounded-lg shadow-md w-full h-72 object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
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
              onClick={() => setViewAll(!viewAll)}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              {viewAll ? 'View Less' : 'View All'}
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
    </div>
  );
}
