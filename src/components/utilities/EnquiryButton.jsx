import React from 'react'

const EnquiryButton = ({CustomClass}) => {
  return (
    <button className={`bg-[#705118] text-white w-[150px] h-[40px] ${CustomClass}`}>
    Enquire Now
  </button>
  )
}

export default EnquiryButton