import React from 'react'

const BorderBottom = ({ CustomClass, isWhite = false }) => {
  return (
    <div className={`h-[1px] ${isWhite ? 'bg-white' : 'bg-gradient-to-l from-[#E5DDD2] via-[#705118] to-[#E5DDD2]'} w-[150px] ${CustomClass}`}>
    </div>
  )
}

export default BorderBottom
