import React from 'react'
import { CustomDiv, Pera, Pera2 } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'
import EnquiryButton from '../utilities/EnquiryButton'

const OurPricing = ({onEnquireClick}) => {
  return (
    <section className="pt-[50px] xxl:py-[80px] bg-[#EBEAE6] relative" id="pricing">
      <Image
        src="/assets/images/bg.webp"
        alt="background image"
        width={100} // specify width
        height={200} // specify height
        className="absolute top-[40%] left-0 hidden md:block"
        priority // if you want to load early (optional)
      />

      <Image
        src="/assets/images/bg.webp"
        alt="background image mirrored"
        width={100}
        height={200}
        className="absolute top-[40%] right-0 transform scale-x-[-1] hidden md:block"
        priority
      />
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[25px] xxl:mb-[50px]">
          <Price text={"Our Pricing"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>

        {/* Paragraph */}
        <div className=" w-full md:w-[80%] xxl:w-[60%] mx-auto mb-[25px] xxl:mb-[50px] md:px-[0]">
          <Pera2 CustomClass="!text-center !text-[12px] md:!text-[14px] !leading-[20px]"> Timeless design. Lasting value. </Pera2>
          <Pera2 CustomClass="!text-center !text-[12px] md:!text-[14px] !leading-[20px]"> Our curated luxury homes are priced to reftlect the sophistication you deserve</Pera2>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="relative pb-[50px] sm:pb-[150px] md:pb-[0]">
      <div className="relative w-full h-[500px] hidden md:block">
  <Image
    src="/assets/images/pricing/image2.webp"
    alt="Pricing Image"
    layout="fill"
    objectFit="cover"
      objectPosition="top"
    className="object-cover"
  />
</div>

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
    src="/assets/images/pricing/mobile_bg.webp"
    alt="Background"
    fill
    className="object-cover object-top"
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