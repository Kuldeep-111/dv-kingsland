import React from 'react'

const CallButton = ({CustomClass,IconUrl,IconClass}) => {
  return (
    <button className={`bg-[#705118] cursor-pointer flex items-center justify-center text-white w-[30px] h-[30px] mr-[20px] ${CustomClass}`}>
      <img className={`w-[13px] h-auto ${IconClass}`} src={`${IconUrl ? IconUrl : '/assets/icons/call.png'}`} alt="Phone Icon" />
    </button>
  )
}

export default CallButton
