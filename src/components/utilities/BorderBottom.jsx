import React from 'react'

const BorderBottom = ({ CustomClass, isWhite = false }) => {
  return (
    <div className={`h-[1px] ${isWhite ? 'gradient-white-border bg-gradient-to-l from-transparent via-[#ffff] to-transparent' : 'gradient-color-border bg-gradient-to-l from-transparent via-[#705118] to-transparent'} w-[150px] ${CustomClass}`}>
    </div>
  )
}

export default BorderBottom
