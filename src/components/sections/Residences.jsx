import React from 'react'
import { CustomDiv, Pera, Pera2 } from '../utilities/CustomTag'
import Image from 'next/image'
import BorderBottom from '../utilities/BorderBottom'
import Price from '../utilities/Price'

const Residences = () => {
  return (
    <section className="py-[50px] bg-[#EBEAE6] relative">
      <img 
        src="/assets/images/residences/bg.png" 
        alt="background image" 
        className='absolute top-[24%] left-0'
      />
      <img 
        src="/assets/images/residences/bg.png" 
        alt="background image" 
        className='absolute top-[24%] right-0 transform scale-x-[-1]'
      />
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[50px]">
          <Pera CustomClass="text-[24px]">Odisha's <span className='text-[#A39264] text-[32px] font-bold'>largest</span> luxury residences</Pera>
        </CustomDiv>

        {/* Image */}
        <div className="relative m-auto w-[65%]  h-[400px] mb-[50px]">
        <div className="left-border absolute top-[-30px] left-[-30px] h-[150px] w-[150px] ">
        <div className="before:block before:w-full before:h-[1px] before:bg-[#A39264] before:absolute before:left-[-15px] before:top-[6px]"></div>
        <div className="after:block after:w-[1px] after:h-[150px] after:bg-[#A39264] after:absolute after:top-[-20px] after:left-[6px]"></div>
  </div>
        <div className="right-border absolute bottom-[-30px] right-[-30px] h-[150px] w-[150px] ">
        <div className="before:block before:w-full before:h-[1px] before:bg-[#A39264] before:absolute before:right-[-15px] before:bottom-[6px]"></div>
        <div className="after:block after:w-[1px] after:h-[150px] after:bg-[#A39264] after:absolute after:bottom-[-20px] after:right-[6px]"></div>
  </div>
          <Image
            src="/assets/images/residences/about.png"
            alt="Residences"
            fill
            className="object-cover"
          />
        </div>

        {/* Second Heading */}
        <CustomDiv CustomClass="mb-[50px]">
            <Price text={'king of all residences'}/>
          {/* <Pera CustomClass="text-[24px]">king of all residences</Pera> */}
          <BorderBottom CustomClass={'w-[300px] mt-2'}/>
        </CustomDiv>

        {/* Two Paragraphs Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] w-[65%] mx-auto">
          <Pera2>
          Welcome to DN Kingsland, Odisha's first and only high-rise luxury residential development since 1960. Rising proudly in the heart of Janpath, Shaheed Nagar, Annexe Bhubaneswar, DN Kingsland isn't just a residence—it's a landmark.
          </Pera2>
          <Pera2>
          Designed for those who seek timeless elegance, extraordinary space, and a lifestyle beyond the ordinary, our twin towers stand as a symbol of ambition, refinement, and urban exclusivity.
          </Pera2>
        </div>
      </div>
    </section>
  )
}

export default Residences