"use client";
import React, { useState } from 'react';
const EnquiryButton = ({onClick, CustomClass }) => {

  return (
    <>
      <button 
        onClick={onClick}
        className={`bg-[#705118] cursor-pointer text-white w-[150px] h-[40px] ${CustomClass}`}
      >
        Enquire Now
      </button>
      
    </>
  );
};

export default EnquiryButton;