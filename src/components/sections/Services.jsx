import React from "react";
import { CustomDiv, Pera, Pera2 } from "../utilities/CustomTag";
import Price from "../utilities/Price";
import BorderBottom from "../utilities/BorderBottom";
import Image from "next/image";
import EnquiryButton from "../utilities/EnquiryButton";

const servicesLeft = [
  "household",
  "Family Support",
  "Skill Development",
  "Leisure & Entmt.",
  "Shopping Assistance",
  "Automotive Serv.",
];
const servicesRight = [
    "Pets",
    "Documentation",
    "Bill Payments",
    "Mind & Body",
    "Travel Assistance",
    "Wealth Mgmt.",
  ];

const Services = ({onEnquireClick}) => {
  return (
    <section className="py-[50px] bg-[#EBEAE6] relative" id="services">
 <Image 
  src="/assets/images/services/bg.png" 
  alt="background image" 
  width={100}   // specify width
  height={200}  // specify height
  className="absolute top-[44%] left-0 hidden md:block"
  priority // if you want to load early (optional)
/>

<Image 
  src="/assets/images/services/bg.png" 
  alt="background image mirrored" 
  width={100}
  height={200}
  className="absolute top-[44%] right-0 transform scale-x-[-1] hidden md:block"
  priority
/>
      <div className="container mx-auto relative">

   
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[50px]">
          <Price text={"White-Glove Services"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>

        {/* Paragraph */}
        <div className="w-full md:w-[60%] mx-auto mb-[50px] px-[15px] md:px-[0]">
          <Pera2 CustomClass="text-center">
            At DN Kingsland, Odisha, services transcend the ordinary—they're
            thoughtfully curated experiences tailored for a refined lifestyle.
            Welcome to a world where luxury meets legacy.
          </Pera2>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-[30%_40%_30%] text-center">
          {/* Left Column (30%) */}
          <div className="relative h-[400px] hidden md:block">
            <ul>
              {servicesLeft.map((service, index) => (
                <li
                  key={index}
                  className="relative text-center border-b-2 border-[#705118] pb-2 pr-6 mt-[45px]"
                >
                  {service}
                  <span className="absolute left-0 bottom-[-8px] -translate-y-1/2 w-2 h-2 bg-[#705118] rounded-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column (40%) */}
          <div className="relative h-[500px]">
            <Image
              src="/assets/images/services/image1.png"
              alt="Center Service"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column (30%) */}
          <div className="relative h-[400px] hidden md:block">
          <ul>
              {servicesRight.map((service, index) => (
                <li
                  key={index}
                  className="relative text-center border-b-2 border-[#705118] pb-2 pr-6 mt-[45px]"
                >
                  {service}
                  <span className="absolute right-0 bottom-[-8px] -translate-y-1/2 w-2 h-2 bg-[#705118] rounded-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* for mobile  */}
        <div className="flex justify-center md:hidden px-[15px] mt-[20px]">
        <ul className="w-1/2">
              {servicesLeft.map((service, index) => (
                <li
                  key={index}
                  className="relative text-center border-b-1 border-r-1 border-[#CFCFCF] pb-2 pr-6 pt-[30px]"
                >
                  {service}
                  
                </li>
              ))}
            </ul>
            <ul className="w-1/2">
              {servicesRight.map((service, index) => (
                <li
                  key={index}
                  className="relative text-center border-b-1 border-[#CFCFCF] pb-2 pr-6 mt-[30px]"
                >
                  {service}
                   </li>
              ))}
            </ul>
        </div>

        {/* Enquiry Button */}
        <div className="flex justify-center mt-[50px]">
          <EnquiryButton  onClick={onEnquireClick} />
        </div>
      </div>
    </section>
  );
};

export default Services;
