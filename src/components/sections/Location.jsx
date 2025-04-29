import React from 'react'
import { CustomDiv, Pera, Pera2 } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'

const Location = () => {
  return (
    <section className="py-[50px] bg-[#EBEAE6]">
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[50px]">
          <Price text={'Prime Location'}/>
          <BorderBottom CustomClass={'w-[250px] mt-2'}/>
        </CustomDiv>
      </div>

      {/* Background Image and Content Section */}
      <div className="relative">
        <Image
          src="/assets/images/location/background.svg"
          alt="Location Background"
          fill
          className="object-cover"
        />

        <div className="container mx-auto relative z-10 py-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-[50px]">
  {/* Left Section - Map */}
  <div className="relative h-[500px]">
    <Image
      src="/assets/images/location/map.png"
      alt="Location Map"
      fill
      className="object-cover"
    />
  </div>

  {/* Right Section - Content */}
  <div className="flex flex-col justify-center">
    <Price text={'ROYALS SHOULD NOT WAIT. LEADING THE WAY IN SUPERIOR CONNECTIVITY.'} CustomClass={'mb-4 !text-black font-normal !text-[24px]'} />
    <Pera2 CustomClass="mb-6">
      The Only High-Rise Luxury Landmark in Central Bhubaneswar since 1960 crafted for those who desire the extraordinary.
    </Pera2>
    <div className="flex items-center gap-4 mt-3">
      <button className="bg-[#705118] text-white w-[200px] h-[40px]">
        View Location Map
      </button>
      <div className="relative w-[250px] h-[250px]">
        <Image 
          src="/assets/images/location/bg1.png"
          alt="Decoration"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default Location