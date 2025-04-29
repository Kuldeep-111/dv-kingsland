'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Slider = ({ items = [],isJourney=false,CustomClass ,CustomHeight}) => {
  return (
    <div className={`relative w-full ${isJourney ? "md:!h-[500px]" : "md:!h-[600px]"}  ${CustomHeight}`}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        centeredSlides={true}  // Center the active slide
        initialSlide={1}
        loop={true}
        className="h-full"
        breakpoints={{
          0: {
            slidesPerView: 1.4, // Mobile (default)
            spaceBetween:40
          },
          768: {
            slidesPerView: 1.5, // Tablet and above
            spaceBetween:50
          },
        }}
      >
        {/* Slides */}
        {items.map((item, index) => (
          <SwiperSlide key={index} className="!flex !justify-center">
            <div className="relative w-[100%] h-full flex flex-col items-center transition-all duration-500 ease-in-out">
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
                <div className="mt-[25px] md:mt-[50px] text-center">
                  <h3 className="text-xl font-semibold py-[12px] px-[55px] tracking-[2px] bg-white">{item.title}</h3>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        {isJourney ? <>
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !w-[40px] !h-[40px]   !text-white flex items-center justify-center absolute !left-[7%] md:!left-[14.2%] !top-[60%] md:!top-[55%] transform -translate-y-1/2">
          <Image src='/assets/icons/clr-left-arrow.png' alt="Previous" width={40} height={40} />
        </div>
        
        <div className="swiper-button-next !w-[40px] !h-[40px]   !text-white flex items-center justify-center absolute !right-[7%] md:!right-[14.2%]  !top-[60%] md:!top-[55%] transform -translate-y-1/2">
         
          <Image src='/assets/icons/clr-right-arrow.png' alt="Next" width={40} height={40} />
        </div>
        
        </> : <>
        
        
        <div className="swiper-button-prev !w-[40px] !h-[40px] border border-white rounded-full !text-white flex items-center justify-center absolute !left-[7%] md:!left-[14.2%] !top-[47%] md:!top-1/2 transform -translate-y-1/2">
        <Image src='/assets/icons/left-arrow.png' alt="Previous" width={20} height={20} />
        </div>
        
        <div className="swiper-button-next !w-[40px] !h-[40px] border border-white rounded-full !text-white flex items-center justify-center absolute !right-[7%] md:!right-[14.2%] !top-[47%] md:!top-1/2 transform -translate-y-1/2">
        <Image src='/assets/icons/right-arrow.png' alt="Next" width={20} height={20} />
        </div>
        </>}


      </Swiper>
    </div>
  )
}

export default Slider
