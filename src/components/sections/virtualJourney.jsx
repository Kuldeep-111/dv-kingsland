"use client";
import React, { useState } from "react";
import { CustomDiv, Pera2 } from "../utilities/CustomTag";
import Price from "../utilities/Price";
import BorderBottom from "../utilities/BorderBottom";
import Slider from "../Slider";
import Image from "next/image";
import EnquiryButton from "../utilities/EnquiryButton";
import VideoModal from "../VideoModal";

const virtualJourneyData = [
  {
    image: "/assets/images/virtual-journey/image2.png",
  },
  {
    image: "/assets/images/virtual-journey/image1.png",
  },
  {
    image: "/assets/images/virtual-journey/image3.png",
  },
  {
    image: "/assets/images/virtual-journey/image1.png",
  },
];

const VirtualJourney = ({ onEnquireClick }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenVideoModal = () => setIsVideoModalOpen(true);
  const handleCloseVideoModal = () => setIsVideoModalOpen(false);

  return (
    <section className="py-[80px] bg-[#EBEAE6] relative" id="virtual-journey">
      {/* Background Image */}
      <div className="absolute top-[10%] right-[15%] w-[200px] h-[200px] hidden md:block">
        <Image
          src="/assets/images/location/bg1.png"
          alt="Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass=" mb-[30px] xxl:mb-[50px]">
          <Price text={"Virtual Journey"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>
        <Pera2 CustomClass="!text-center mb-[20px]">
          Step inside DN Kingsland — where every detail tells a story of luxury
          and comfort.
        </Pera2>

        <div className="flex flex-wrap justify-center gap-[10px] mb-[20px] px-[15px] md:px-[0]">
          <button
            type="button"
            onClick={handleOpenVideoModal}
            className="bg-[#705118] text-white px-8 py-3 w-[250px] font-montserrat hover:bg-[#8a6a2b] transition-all duration-300"
          >
            Walkthrough
          </button>
          <EnquiryButton onClick={onEnquireClick} />
        </div>
      </div>

      {/* Slider */}
      <div className="md:mb-[50px]">
        <Slider
          items={virtualJourneyData}
          isJourney={true}
          CustomHeight="!h-[250px]"
        />
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={handleCloseVideoModal} />
    </section>
  );
};

export default VirtualJourney;
