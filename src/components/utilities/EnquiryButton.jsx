"use client";
import React, { useState } from 'react';
const EnquiryButton = ({onClick, CustomClass }) => {

  return (
    <>
      <button 
        onClick={onClick}
        className={`bg-[#705118] cursor-pointer text-[14px] md:text-[20px] text-white py-[12px] px-[20px] sm:px-[55px] tracking-[2px] ${CustomClass}`}
      >
        Enquire Now
      </button>
      
    </>
  );
};

export default EnquiryButton;