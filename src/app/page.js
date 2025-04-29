"use client";
import EnquiryModal from "@/components/EnquiryModal";
import AboutDeveloper from "@/components/sections/AboutDeveloper";
import Amenities from "@/components/sections/Amenities";
import ContactUs from "@/components/sections/ContactUs";
import Deck from "@/components/sections/Deck";
import FloorPlan from "@/components/sections/FloorPlan";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import OurPricing from "@/components/sections/OurPricing";
import Residences from "@/components/sections/Residences";
import Services from "@/components/sections/Services";
import VirtualJourney from "@/components/sections/virtualJourney";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
        <Hero onEnquireClick={handleOpenModal}/>
      <Residences/>
      <Deck/>
      <Location onEnquireClick={handleOpenModal}/>
      <Amenities/>
      <Services onEnquireClick={handleOpenModal}/>
      <OurPricing onEnquireClick={handleOpenModal}/>
      <FloorPlan onEnquireClick={handleOpenModal}/>
      <VirtualJourney/>
      <AboutDeveloper onEnquireClick={handleOpenModal}/>
      <ContactUs/>
      <EnquiryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
