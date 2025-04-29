import React from 'react'
import { CustomDiv, Pera, Pera2 } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'
import EnquiryButton from '../utilities/EnquiryButton'

const OurPricing = () => {
  return (
    <section className="pt-[50px] bg-[#EBEAE6] relative">
      <Image
        src="/assets/images/services/bg.png"
        alt="background image"
        width={100} // specify width
        height={200} // specify height
        className="absolute top-[44%] left-0"
        priority // if you want to load early (optional)
      />

      <Image
        src="/assets/images/services/bg.png"
        alt="background image mirrored"
        width={100}
        height={200}
        className="absolute top-[44%] right-0 transform scale-x-[-1]"
        priority
      />
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[50px]">
          <Price text={"Our Pricing"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>

        {/* Paragraph */}
        <div className="w-[60%] mx-auto mb-[50px]">
          <Pera2 CustomClass="text-center">
            At DN Kingsland, Odisha, we offer premium residences that redefine
            luxury living. Our pricing reflects the exceptional quality, prime
            location, and world-class amenities that come with every residence.
          </Pera2>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="relative">
        <img
          src="/assets/images/pricing/image1.png"
          alt="Pricing Image"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full flex justify-center align-center h-full">
        <div className="w-full flex flex-col items-center justify-center text-center gap-[10px] h-[80%]">
            <Price text={" 4 BHK"} />
            <BorderBottom CustomClass={"w-[200px]"} />
            <Pera>3930 - 4070 SQ.FT.</Pera>
            <Price text={" ₹ 5.10 cr*"} />
            <span>onwards</span>
            <EnquiryButton/>
          </div>
          <div className="w-full flex flex-col items-center justify-center text-center gap-[10px] h-[80%]">
            <Price text={" 5 BHK"} />
            <BorderBottom CustomClass={"w-[200px]"} />
            <Pera>4370 - 4760 SQ.FT.</Pera>
            <Price text={" ₹ 5.66 cr*"} />
            <span>onwards</span>
            <EnquiryButton/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPricing