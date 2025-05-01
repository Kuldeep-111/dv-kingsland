"use client";
import dynamic from "next/dynamic";

import EnquiryModal from "@/components/EnquiryModal";
import Hero from "@/components/sections/Hero";
import Residences from "@/components/sections/Residences";
import Deck from "@/components/sections/Deck";
import Location from "@/components/sections/Location";

const Amenities = dynamic(() => import('@/components/sections/Amenities'));
const Services = dynamic(() => import('@/components/sections/Services'));
const OurPricing = dynamic(() => import('@/components/sections/OurPricing'));
const FloorPlan = dynamic(() => import('@/components/sections/FloorPlan'));
const VirtualJourney = dynamic(() => import('@/components/sections/virtualJourney'));
const AboutDeveloper = dynamic(() => import('@/components/sections/AboutDeveloper'));
const ContactUs = dynamic(() => import('@/components/sections/ContactUs'));

import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Hero onEnquireClick={handleOpenModal} />
      <Residences onEnquireClick={handleOpenModal} />
      <Deck onEnquireClick={handleOpenModal} />
      <Location onEnquireClick={handleOpenModal} />
      <Amenities onEnquireClick={handleOpenModal} />
      <Services onEnquireClick={handleOpenModal} />
      <OurPricing onEnquireClick={handleOpenModal} />
      <FloorPlan onEnquireClick={handleOpenModal} />
      <VirtualJourney onEnquireClick={handleOpenModal} />
      <AboutDeveloper onEnquireClick={handleOpenModal} />
      <ContactUs />
      <EnquiryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
