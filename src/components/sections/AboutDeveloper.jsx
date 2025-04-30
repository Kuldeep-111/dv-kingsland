"use client";
import React from 'react'
import { CustomDiv, Pera, Pera2 } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'
import EnquiryButton from '../utilities/EnquiryButton'

const AboutDeveloper = ({onEnquireClick}) => {
  return (
    <section className="py-[80px] relative" id="about-developer">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/about-developer/bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[20px] md:mb-[30px] xxl:mb-[50px]">
          <Price text={"About Developer"} CustomClass="!text-white" />
          <BorderBottom CustomClass={"w-[250px] mt-2"} isWhite={true} />
        </CustomDiv>

        {/* Content */}
        <div className="flex flex-col items-center px-[15px] md:px-[0]">
          {/* Logo */}
          <div className="mb-[10px] md:mb-[30px] w-[200px] h-[60px] md:h-[100px] relative">
            <Image
              src="/assets/images/about-developer/logo.png"
              alt="Developer Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Sub Heading */}
          <h2 className="text-white text-[20px] md:text-[24px] font-normal mb-[20px] text-center">
            One of the Fastest-Growing Real Estate
          </h2>

          {/* Paragraph */}
          <div className="w-full md:w-[60%] mx-auto mb-[50px] mt-[40px]">
            <Pera2 CustomClass="text-center !text-white !text-[12px] md:!text-[14px] !leading-[25px]">
              India's fastest growing real estate conglomerate with a reputation for identifying emerging real estate markets, recognizing aspirations in lifestyle evolution, perfecting the modulations of luxury and responding with projects that capture the unique spirit of changing India.
            </Pera2>
          </div>

          {/* Enquiry Button */}
          <EnquiryButton CustomClass={'!bg-white !text-black !text-[16px]'} onClick={onEnquireClick}/>
        </div>
      </div>
    </section>
  )
}

export default AboutDeveloper