import React from 'react'
import { CustomDiv, Pera } from '../utilities/CustomTag'
import Image from 'next/image'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import EnquiryButton from '../utilities/EnquiryButton'

const Deck = ({onEnquireClick}) => {
  return (
    <section className="relative h-[90vh] xll:h-screen w-full" id="deck">
      {/* Background Image */}
      <Image
        src="/assets/images/deck/spacious_deck.png"
        alt="Deck"
        layout="fill" // Ensures the image fills the container
        objectFit="cover" // Makes the image cover the entire section
        className="absolute top-0 left-0"
      />

      {/* Headings - Absolutely Positioned */}
      <div className="absolute top-[150px] left-[50px] md:left-[100px] hidden md:flex flex-col items-center">
        <Pera CustomClass="text-[32px] mb-2">
          The Most  <span className='text-[#A39264] text-[32px] font-bold'>Expansive</span> Living  
        </Pera>
        <Pera CustomClass="text-[32px] mt-[20px]"> Now with a Deck </Pera>
        {/* <Price text={'king of all deck'} CustomClass={'mt-[42px] text-center'} firstText="!text-[26px]" OtherText="!text-[24px]"/> */}
        {/* <BorderBottom CustomClass={'w-[250px] !h-[2px] hidden md:block'} /> */}
        <EnquiryButton onClick={onEnquireClick} CustomClass="mt-[50px]"/>
      </div>


      {/* for mobile start */}
      <div className='absolute w-[96%]  top-[30px] left-[2%]  flex justify-center block md:hidden'>
      <Pera CustomClass="text-[14px] sm:text-[16px] sm:text-[24px] py-[5px] sm:py-[15px] px-[10px] sm:px-[25px] text-white mb-2  mx-auto bg-gradient-to-r from-[#705118] to-[#A39264]">
      The Most Expansive Living Now with a Deck
      </Pera>
      {/* <Pera CustomClass="text-[32px] mt-[20px]"> Now with a Deck </Pera> */}
        </div>
        
      <div className='absolute bottom-[30px] left-0 w-full  px-[15px] block md:hidden'>
      {/* <Price text={'king of all deck'} firstText="!text-[22px]" OtherText="!text-[20px]" CustomClass={'mt-2 !text-white !justify-start'} /> */}
      <EnquiryButton onClick={onEnquireClick} CustomClass="mt-[20px] bg-white !text-black"/>
      </div>
      {/* for mobile end */}

    </section>
  )
}

export default Deck
