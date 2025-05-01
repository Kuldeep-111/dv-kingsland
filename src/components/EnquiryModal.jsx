"use client";
import React from 'react';
import CustomForm from './CustomForm';
import Image from 'next/image';
// import { CustomForm } from './CustomForm';

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-51 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#EBEAE6] p-4 md:p-6 xll:p-8 max-w-[600px] w-[90%] mx-auto z-10">
        <div className='flex justify-between px-[20px] items-center'>
        <div className='w-[120px] '>
                    <Image 
                      src="/assets/images/logo.png" 
                      alt="DN Kingsland" 
                      width={120}
                      height={30}
                    />
                  </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className=" bg-[#705118] p-2 rounded-full text-white  hover:text-gray-100"
        >
          <Image src="/assets/icons/close.webp" alt="Close icon"  width="14" height="14"/>
        </button>
        </div>

        {/* Form */}
        <div className="mt-4 xxl:mt-6 ">
          <CustomForm />
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal; 