"use client";
import React, { useState, useEffect } from 'react';
import EnquiryButton from '../utilities/EnquiryButton';
import CallButton from '../utilities/CallButton';
import Image from 'next/image';
import Sidebar from '../Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`py-[25px] px-[10px] w-full absolute left-0 top-0 z-50 transition-all ease-in-out ${
          isScrolled
            ? 'bg-[#EBEAE6] shadow-lg fixed top-0 left-0 right-0'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between container mx-auto">
          <EnquiryButton CustomClass="hidden lg:block"/>
          <div className='w-[200px]'>
            <Image 
              src="/assets/images/logo.png" 
              alt="DN Kingsland" 
              width={200}
              height={50}
            />
          </div>
          <div className='flex items-center'>
          <a
                href="tel:+911234567890"
                className="flex items-center gap-2"
                target="_blank"
              >
            <CallButton/>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className='w-[30px] ml-4'
            >
              <Image
                src="/assets/icons/menu.svg"
                alt="Menu Button"
                width={30}
                height={30}
              />
            </button>
            </a>
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
