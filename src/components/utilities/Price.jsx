import React from 'react'

const Price = ({ text, span, CustomClass, firstText,OtherText }) => {
  return (
    <p className={`font-cinzel  font-semibold tracking-wide uppercase bg-gradient-to-r from-[#705118] to-[#A39264] bg-clip-text text-transparent text-center flex flex-wrap justify-center items-baseline ${CustomClass ? CustomClass : "gradient-text"}`}>
      {text?.split(' ').map((word, index) => (
        <span key={index} className={`flex leading-normal items-baseline mr-2 text-[20px] md:text-[24] xl:text-[32px] ${OtherText}`}>
          <span className={`line-normal text-[22px] md:text-[26px] xl:text-[34px] ${firstText}`}>{word.charAt(0)}</span>
          {word.slice(1)}
        </span>
      ))}
      {span && (
        <span className=" text-[14px] mt-2">{span}</span>
      )}
    </p>
  );
};

export default Price;
