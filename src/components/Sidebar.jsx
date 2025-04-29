"use client";
import React from 'react';
import Image from 'next/image';

const Sidebar = ({ isOpen, onClose }) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'residences', label: 'Residences' },
    { id: 'deck', label: 'Deck' },
    { id: 'location', label: 'Location' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'floorplan', label: 'Floor Plan' },
    { id: 'virtual-journey', label: 'Virtual Journey' },
    { id: 'about-developer', label: 'About Developer' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-[300px] bg-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Logo and Close Button */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="w-[150px] h-[50px] relative">
          <Image
            src="/assets/images/logo.png"
            alt="DN Kingsland"
            fill
            className="object-contain"
          />
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="p-6">
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleNavigation(section.id)}
                className="w-full text-left text-[#705118] hover:text-[#8a6a2b] transition-colors duration-300"
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 