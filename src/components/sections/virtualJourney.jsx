"use client";
import React from 'react'
import { CustomDiv } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Slider from '../Slider'
import Image from 'next/image'

const virtualJourneyData = [
    {
      image: '/assets/images/virtual-journey/image2.png',
    },
  {
    image: '/assets/images/virtual-journey/image1.png',
  },
  {
    image: '/assets/images/virtual-journey/image3.png',
  },
  {
    image: '/assets/images/virtual-journey/image1.png',
  }
]

const VirtualJourney = () => {
  return (
    <section className="py-[50px] bg-[#EBEAE6] relative">
      {/* Background Image */}
      <div className="absolute top-[10%] right-[15%] w-[200px] h-[200px]">
        <Image
          src="/assets/images/location/bg1.png"
          alt="Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[100px]">
          <Price text={"Virtual Journey"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>

      </div>
      
        {/* Slider */}
        <div className="mb-[50px]">
          <Slider items={virtualJourneyData} isJourney={true}/>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-[#705118] text-white px-8 py-3  hover:bg-[#8a6a2b] transition-all duration-300">
            View All
          </button>
        </div>
    </section>
  )
}

export default VirtualJourney