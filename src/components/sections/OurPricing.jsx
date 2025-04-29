import React from 'react'
import { CustomDiv, Pera, Pera2 } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'
import EnquiryButton from '../utilities/EnquiryButton'

const OurPricing = ({onEnquireClick}) => {
  return (
    <section className="pt-[80px] bg-[#EBEAE6] relative" id="pricing">
      <Image
        src="/assets/images/services/bg.png"
        alt="background image"
        width={100} // specify width
        height={200} // specify height
        className="absolute top-[44%] left-0 hidden md:block"
        priority // if you want to load early (optional)
      />

      <Image
        src="/assets/images/services/bg.png"
        alt="background image mirrored"
        width={100}
        height={200}
        className="absolute top-[44%] right-0 transform scale-x-[-1] hidden md:block"
        priority
      />
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[50px]">
          <Price text={"Our Pricing"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>

        {/* Paragraph */}
        <div className=" w-full md:w-[60%] mx-auto mb-[50px] px-[15px] md:px-[0]">
          <Pera2 CustomClass="!text-center">
            At DN Kingsland, Odisha, we offer premium residences that redefine
            luxury living. Our pricing reflects the exceptional quality, prime
            location, and world-class amenities that come with every residence.
          </Pera2>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="relative pb-[150px] md:pb-[0]">
        <img
          src="/assets/images/pricing/image1.png"
          alt="Pricing Image"
          
          className="object-cover hidden md:block"
        />


        <div className="absolute top-0 left-0 w-full hidden md:flex justify-center align-center h-full">
        <div className="w-full flex flex-col items-center justify-center text-center gap-[0px] h-[80%]">
            <Price text={" 4 BHK"} />
            <BorderBottom CustomClass={"w-[200px] mt-[1px]"} />
            <Pera CustomClass={"mt-[20px]"}>3930 - 4070 SQ.FT.</Pera>
            <Price text={" ₹ 5.10 cr*"} CustomClass="leading-[30px] mt-[20px]"/>
            <span className='mt-[5px]'>onwards</span>
            <EnquiryButton CustomClass={"mt-[20px]"} onClick={onEnquireClick}/>
          </div>
          <div className="w-full flex flex-col items-center justify-center text-center gap-[0px] h-[80%]">
            <Price text={" 5 BHK"} />
            <BorderBottom CustomClass={"w-[200px]  mt-[1px]"} />
            <Pera CustomClass={"mt-[20px]"}>4370 - 4760 SQ.FT.</Pera>
            <Price text={" ₹ 5.66 cr*"} CustomClass="leading-[30px] mt-[20px]"/>
            <span className='mt-[5px]'>onwards</span>
            <EnquiryButton onClick={onEnquireClick} CustomClass={"mt-[20px]"}/>
          </div>
        </div>
        {/* mobile start */}
        <div className="absolute inset-x-0 bottom-0 z-[1] block md:hidden h-[80%] w-full">
  <Image
    src="/assets/images/pricing/mobile_bg.png"
    alt="Background"
    fill
    className="object-cover object-bottom"
  />
</div>
        <div className=' block md:hidden w-full relative z-10'>
        <div className='mt-[30px] w-full max-w-[300px] mx-auto rounded-[10px] border border-[#705118] bg-white/50 shadow-[3px_3px_4px_0px_rgba(112,81,24,0.81)] px-[20px] py-[20px] flex flex-col items-center justify-center gap-[10px]'>
            <Price text={" 4 BHK"} />
            <BorderBottom CustomClass={"w-[200px]"} />
            <Pera>3930 - 4070 SQ.FT.</Pera>
            <Price text={" ₹ 5.10 cr*"} />
            <span>onwards</span>
            <EnquiryButton onClick={onEnquireClick}/>
        </div>
        <div className='mt-[50px] w-full max-w-[300px] mx-auto  rounded-[10px] border border-[#705118] bg-white/50 shadow-[3px_3px_4px_0px_rgba(112,81,24,0.81)] px-[20px] py-[20px] flex flex-col items-center justify-center gap-[10px]'>
            <Price text={" 5 BHK"} />
            <BorderBottom CustomClass={"w-[200px]"} />
            <Pera>4370 - 4760 SQ.FT.</Pera>
            <Price text={" ₹ 5.66 cr*"} />
            <span>onwards</span>
            <EnquiryButton onClick={onEnquireClick}/>
        </div>
        </div>
        {/* mobile end */}

      </div>
    </section>
  );
}

export default OurPricing