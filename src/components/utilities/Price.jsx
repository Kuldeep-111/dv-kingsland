import React from 'react'

const Price = ({ text, span, CustomClass, firstText }) => {
  return (
    <p className={`font-cinzel font-semibold tracking-wide uppercase bg-gradient-to-r from-[#705118] to-[#A39264] bg-clip-text text-transparent text-center flex flex-wrap justify-center ${CustomClass}`}>
      {text?.split(' ').map((word, index) => (
        <span key={index} className={`flex items-center mr-2 text-[32px]`}>
          <span className={`text-[36px] ${firstText}`}>{word.charAt(0)}</span>
          {word.slice(1)}
        </span>
      ))}
      {span && (
        <span className="block w-full text-[14px] mt-2">{span}</span>
      )}
    </p>
  );
};

export default Price;
