"use client";
import React, { useState } from 'react';
const EnquiryButton = ({onClick, CustomClass }) => {

  return (
    <>
      <button 
        onClick={onClick}
        className={`bg-[#705118] hover:bg-[#c49945] transition-all duration-300 cursor-pointer text-[14px] md:text-[16px] xxl:text-[20px] text-white  px-[20px] py-[8px] sm:px-[35px] xxl:px-[55px] xxl:py-[12px] tracking-[2px] ${CustomClass}`}
      >
        Enquire Now
      </button>
      
    </>
  );
};

export default EnquiryButton;