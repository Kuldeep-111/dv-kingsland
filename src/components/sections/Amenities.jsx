import React from 'react'
import { CustomDiv, Pera, Pera2 } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'
import Slider from '../Slider'


const amenitiesData = [
  {
    image: '/assets/images/ameneties/bardeque_lounge.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/bay_seating.webp',
    title: 'The Expansive Living & Dining Experience'
  },
  {
    image: '/assets/images/ameneties/canopy_deck.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/conference_hall.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/creative_zone.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/dining_area.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/eco_courtyard.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/function_hall.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/gym.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/herhighness_zone.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/infinity_pool.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/kid_zone.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/library.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/living_area.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/lobby_lounge.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/lobby_reception.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/lounge_reception.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/mini_theatre.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/movie_theatre.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/mutlipurpose_hall.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/new_gate.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/private_dining.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/rooftop_pool.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/sky_bridge.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/sky_dining.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/sky_library.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/spa_saloon_reception.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/treatment_room.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/white_gloves.webp',
    title: 'Beautifully landscaped green gardens.'
  },
  {
    image: '/assets/images/ameneties/sky_bridge.webp',
    title: 'Beautifully landscaped green gardens.'
  }
]

const Amenities = ({onEnquireClick}) => {
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
    <CustomDiv CustomClass="mb-[25px] xxl:mb-[50px]">
      <Price text={'World-Class Amenities'} CustomClass={'!text-white'} />
      <BorderBottom CustomClass={'w-[250px] mt-2'} isWhite={true} />
    </CustomDiv>

    <div className="w-full md:w-[100%]  xxl:w-[60%] mx-auto px-[15px] md:px-[0] mb-[25px] xxl:mb-[50px]">
      <Pera2 CustomClass="!text-center !text-white !leading-[25px]">
        At DN Kingsland, Odisha, amenities transcend the ordinary—they're thoughtfully curated experiences 
      </Pera2>
      <Pera2 CustomClass="!text-center !text-white !leading-[25px]">Tailored for a refined lifestyle. Welcome to a world where luxury meets legacy.</Pera2>
    </div>
  </div>
  <Slider items={amenitiesData} CustomHeight="!h-[350px]" onEnquireClick={onEnquireClick}/>
</section>

  )
}

export default Amenities 