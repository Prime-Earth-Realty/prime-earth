'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Next.js
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export default function Map({ coordinates }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize map
      const map = L.map(mapRef.current).setView(coordinates, 14);
      
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add marker
      markerRef.current = L.marker(coordinates)
        .addTo(map)
        .bindPopup('Plot Location')
        .openPopup();

      // Add circle to highlight area
      L.circle(coordinates, {
        color: '#0d9488',
        fillColor: '#0d9488',
        fillOpacity: 0.2,
        radius: 500
      }).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [coordinates]);

  return <div ref={mapRef} className="h-full w-full" />;
}