'use client';

import { useEffect, useState } from 'react';

export default function GDPRBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('gdprAccepted');
    if (!accepted) {
      setShowBanner(true);
      // Trigger slide down after component mounts
      setTimeout(() => setVisible(true), 100);
    }
  }, []);

  const handleAccept = () => {
    setVisible(false); // start slide up animation
    setTimeout(() => {
      localStorage.setItem('gdprAccepted', 'true');
      setShowBanner(false);
    }, 300); // match animation duration
  };

  if (!showBanner) return null;

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 bg-teal-500 text-white z-[9999] flex items-center justify-between
        p-4 text-sm shadow-lg
        transform transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        flex-col sm:flex-row
        space-y-3 sm:space-y-0
      `}
      role="alert"
      aria-live="assertive"
    >
      <span className="text-center sm:text-left">
        We use cookies to improve your experience and to show you relevant offers. By continuing, you agree to our use of cookies.
      </span>
      <button
        onClick={handleAccept}
        className="bg-white text-teal-600 font-semibold px-4 py-2 rounded hover:bg-teal-100 transition"
      >
        Accept
      </button>
    </div>
  );
}
