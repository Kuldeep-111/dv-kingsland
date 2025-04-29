import React from 'react'
import { CustomDiv, Pera } from '../utilities/CustomTag'
import Image from 'next/image'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'

const Deck = () => {
  return (
    <section className="relative h-screen w-full" id="deck">
      {/* Background Image */}
      <Image
        src="/assets/images/deck/spacious_deck.png"
        alt="Deck"
        layout="fill" // Ensures the image fills the container
        objectFit="cover" // Makes the image cover the entire section
        className="absolute top-0 left-0"
      />

      {/* Headings - Absolutely Positioned */}
      <div className="absolute top-[100px] left-[50px] md:left-[100px] hidden md:flex flex-col items-center">
        <Pera CustomClass="text-[32px] mb-2">
          Odisha's <span className='text-[#A39264] text-[32px] font-bold'>largest</span> deck
        </Pera>
        <Price text={'king of all deck'} CustomClass={'mt-2 !text-[24px] text-center'} />
        <BorderBottom CustomClass={'w-[250px] hidden md:block'} />
      </div>
      <div className='absolute top-[30px] left-0 w-full flex justify-center block md:hidden'>
      <Pera CustomClass="text-[24px] py-[15px] px-[25px] text-white mb-2  mx-auto bg-gradient-to-r from-[#705118] to-[#A39264]">
          Odisha's largest deck
      </Pera>
        </div>
        
      <div className='absolute bottom-[30px] left-0 w-full flex justify-center block md:hidden'>
      <Price text={'king of all deck'} firstText="!text-[22px]" OtherText="!text-[20px]" CustomClass={'mt-2 !text-white'} />
      </div>

    </section>
  )
}

export default Deck
