"use client";
import React, { useState } from 'react';
const EnquiryButton = ({onClick, CustomClass }) => {

  return (
    <>
      <button 
        onClick={onClick}
        className={`bg-[#705118] cursor-pointer text-white py-[12px] px-[55px]  ${CustomClass}`}
      >
        Enquire Now
      </button>
      
    </>
  );
};

export default EnquiryButton;