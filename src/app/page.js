
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

export default function Home() {
  return (
  <>
  <Hero/>
  <Residences/>
  <Deck/>
  <Location/>
  <Amenities/>
  <Services/>
  <OurPricing/>
  <FloorPlan/>
  <VirtualJourney/>
  <AboutDeveloper/>
  <ContactUs/>
  </>
  );
}
