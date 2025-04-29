import React from 'react'
import { CustomDiv, Pera, Pera2 } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'
import Slider from '../Slider'


const amenitiesData = [
  {
    image: '/assets/images/ameneties/image1.png',
    title: 'Swimming Pool',
    description: 'Relax and enjoy our beautiful pool area.'
  },
  {
    image: '/assets/images/ameneties/image2.png',
    title: 'Family Lounge',
    description: 'A TOUCH OF ROYALTY IN EVERY DETAIL'
  },
  {
    image: '/assets/images/ameneties/image3.png',
    title: 'Kids Play Area',
    description: 'Safe and fun environment for kids.'
  },
  {
    image: '/assets/images/ameneties/image4.png',
    title: 'Garden',
    description: 'Beautifully landscaped green gardens.'
  },
]

const Amenities = () => {
  return (
<section className="py-[50px] bg-[#EBEAE6] relative" id="amenities">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/assets/images/ameneties/bg.png"
      alt="Amenities Background"
      fill
      className="object-cover"
    />
    {/* Black Overlay with opacity */}
    <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
  </div>

  <div className="container mx-auto relative z-20">
    <CustomDiv CustomClass="mb-[50px]">
      <Price text={'World-Class Amenities'} CustomClass={'!text-white'} />
      <BorderBottom CustomClass={'w-[250px] mt-2'} isWhite={true} />
    </CustomDiv>

    <div className="w-full md:w-[60%] mx-auto px-[15px] md:px-[0]">
      <Pera2 CustomClass="text-center !text-white mb-[25px]">
        At DN Kingsland, Odisha, amenities transcend the ordinary—they're thoughtfully curated experiences tailored for a refined lifestyle. Welcome to a world where luxury meets legacy.
      </Pera2>
    </div>
  </div>
  <Slider items={amenitiesData} />
</section>

  )
}

export default Amenities 