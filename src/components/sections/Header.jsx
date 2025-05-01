"use client";
import React, { useState, useEffect } from 'react';
import EnquiryButton from '../utilities/EnquiryButton';
import CallButton from '../utilities/CallButton';
import Image from 'next/image';
import Sidebar from '../Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY < lastScrollY) {
          // Scrolling up
          setShowHeader(true);
        } else {
          // Scrolling down
          setShowHeader(false);
        }
      } else {
        // At top, don't show fixed header
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`
          py-[25px] px-[10px] w-full z-50 transition-transform duration-300 ease-in-out
          ${showHeader ? 'fixed top-0 left-0 bg-[#EBEAE6] shadow-lg translate-y-0' : 'absolute top-0 left-0'}
        `}
      >
        <div className="flex items-center justify-between container mx-auto">
          <div className='w-[120px] md:w-[200px]'>
            <Image 
              src="/assets/images/logo.png" 
              alt="DN Kingsland" 
              width={200}
              height={50}
            />
          </div>
          <div className='flex items-center'>
            <a
              href="tel:+917064333999"
              className="flex items-center gap-2"
              target="_blank"
            >
              <CallButton />
            </a>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className='w-[30px] ml-4 '
            >
              <Image
                src="/assets/icons/menu.svg"
                alt="Menu Button"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </header>

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
};

export default Header;
