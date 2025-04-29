'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Slider = ({ items = [],isJourney=false,CustomClass ,CustomHeight}) => {
  return (
    <div className={`relative w-full md:!h-[400px] ${CustomHeight}`}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        centeredSlides={true}  // Center the active slide
        spaceBetween={0}  // No space between slides
        initialSlide={1}
        loop={true}
        className="h-full"
        breakpoints={{
          0: {
            slidesPerView: 1.2, // Mobile (default)
          },
          768: {
            slidesPerView: 1.5, // Tablet and above
          },
        }}
      >
        {/* Slides */}
        {items.map((item, index) => (
          <SwiperSlide key={index} className="!flex !justify-center">
            <div className="relative w-[90%] h-full flex flex-col items-center transition-all duration-500 ease-in-out">
              <div className="relative w-full h-full transition-all duration-500 ease-in-out">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title || `Slide ${index}`}
                  fill
                  className="object-cover"
                />
                {/* Description */}
                {item.description && (
                  <div className="Slide_Content absolute bottom-0 left-0 right-0 p-4 text-center">
                    <p className="text-lg text-black text-[14px] md:text-[18px]">{item.description}</p>
                  </div>
                )}
              </div>
              {/* Title below the image */}
              {item.title && (
                <div className="mt-[50px] text-center">
                  <h3 className="text-xl font-semibold p-[5px_10px] bg-white">{item.title}</h3>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        {isJourney ? <>
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !w-[40px] !h-[40px]   !text-white flex items-center justify-center absolute !left=[5%] md:!left-[15%] md:top-1/2 transform -translate-y-1/2">
          <Image src='/assets/icons/clr-left-arrow.png' alt="Previous" width={40} height={40} />
        </div>
        
        <div className="swiper-button-next !w-[40px] !h-[40px]   !text-white flex items-center justify-center absolute !left=[5%] md:!right-[15%]  md:top-1/2 transform -translate-y-1/2">
         
          <Image src='/assets/icons/clr-right-arrow.png' alt="Next" width={40} height={40} />
        </div>
        
        </> : <>
        
        
        <div className="swiper-button-prev !w-[40px] !h-[40px] border border-white rounded-full !text-white flex items-center justify-center absolute !left-[3%] md:!left-[15%] top-1/2 transform -translate-y-1/2">
        <Image src='/assets/icons/left-arrow.png' alt="Previous" width={20} height={20} />
        </div>
        
        <div className="swiper-button-next !w-[40px] !h-[40px] border border-white rounded-full !text-white flex items-center justify-center absolute !right-[3%] md:!right-[15%] top-1/2 transform -translate-y-1/2">
        <Image src='/assets/icons/right-arrow.png' alt="Next" width={20} height={20} />
        </div>
        </>}


      </Swiper>
    </div>
  )
}

export default Slider
