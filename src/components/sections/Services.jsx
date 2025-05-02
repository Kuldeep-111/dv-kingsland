import React from "react";
import { CustomDiv, Pera, Pera2 } from "../utilities/CustomTag";
import Price from "../utilities/Price";
import BorderBottom from "../utilities/BorderBottom";
import Image from "next/image";
import EnquiryButton from "../utilities/EnquiryButton";
import Link from "next/link";

const servicesLeft = [
  "household",
  "Family Support",
  "Skill Development",
  "Leisure & Entertainment",
  "Shopping Assistance",
  "Automotive Service",
];
const servicesRight = [
  "Pets",
  "Documentation",
  "Bill Payments",
  "Mind & Body",
  "Travel Assistance",
  "Wealth Management",
];

const Services = ({ onEnquireClick }) => {
  return (
    <section className="pt-[50px] xxl:py-[80px] bg-[#EBEAE6] relative" id="services">
      <Image
        src="/assets/images/bg.webp"
        alt="background image"
        width={100} // specify width
        height={200} // specify height
        className="absolute top-[44%] left-0 hidden md:block"
        priority // if you want to load early (optional)
      />

      <Image
        src="/assets/images/bg.webp"
        alt="background image mirrored"
        width={100}
        height={200}
        className="absolute top-[44%] right-0 transform scale-x-[-1] hidden md:block"
        priority
      />
      <div className="container mx-auto relative">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[25px] xxl:mb-[50px]">
          <Price text={"White-Glove Services"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>

        {/* Paragraph */}
        <div className="w-full hidden md:block xxl:w-[60%] mx-auto mb-[25px] xxl:mb-[50px] px-[15px] md:px-[0]">
          <Pera2 CustomClass="!text-center text-[12px] md-text[14px]">
          Experience professionally managed white-glove services at your doorstep.
          </Pera2>
          <Pera2 CustomClass="!text-center text-[12px] md-text[14px]">DN Kingsland brings you unparalleled service from the comfort of your device.</Pera2>
        </div>
        <div className="w-full block md:hidden mx-auto mb-[25px] xxl:mb-[50px] md:px-[0]">
          <Pera2 CustomClass="!text-center">
          Experience professionally managed white-glove services at your doorstep.DN Kingsland brings you unparalleled service from the comfort of your device.
          </Pera2>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-[35%_30%_35%] xxl:grid-cols-[30%_40%_30%] text-center">
          {/* Left Column (30%) */}
          <div className="relative  hidden md:block ps-0 lg:ps-[80px]">
            <ul>
              {servicesLeft.map((service, index) => (
                <li
                  key={index}
                  className="relative text-center text-[16px] text-nowrap lg:text-[18px] xxl:text-[24px]   border-b-2 border-[#705118] pb-2 pr-6 mt-[30px] xxl:mt-[45px] first:mt-[20px]"
                >
                  {service}
                  <span className="absolute left-0 bottom-[-8px] -translate-y-1/2 w-2 h-2 bg-[#705118] rounded-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column (40%) */}
          <div className="relative h-[400px] md:h-[420px] xxl:h-[600px]">
            <Image
              src="/assets/images/services/image1.webp"
              alt="Center Service"
              fill
              className="object-cover"
            />
            <ul class="absolute left-[0] bottom-[0] py-[6px] px-[6px] flex  place-items-center justify-between bg-[#191616] w-full"><li class="leading-[normal] text-[#fff] normal-case tracking-[normal] text-[8px] md:text-[10px]">Artistic Impression</li><li class="leading-[normal] text-[#fff] normal-case tracking-[normal] text-[8px] md:text-[10px]">MP/19/2023/01042</li><Link class="text-[8px] normal-case text-[#fff] leading-[0] md:text-[10px] tracking-[normal] leading-[normal]" href="https://rera.odisha.gov.in/" target="_blank">https://rera.odisha.gov.in/</Link></ul>
          </div>

          {/* Right Column (30%) */}
          <div className="relative  hidden md:block pr-0 lg:pr-[80px]">
            <ul>
              {servicesRight.map((service, index) => (
                <li
                  key={index}
                  className="relative text-[16px] text-nowrap  lg:text-[18px] xxl:text-[24px]  text-center border-b-2 border-[#705118] pb-2 pr-6 mt-[30px] xxl:mt-[45px] first:mt-[20px]"
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
                className="relative text-center text-[14px] flex items-end justify-center min-h-[60px] border-b-1 border-r-1 border-[#CFCFCF] pb-2  "
              >
                {service}
              </li>
            ))}
          </ul>
          <ul className="w-1/2">
            {servicesRight.map((service, index) => (
              <li
                key={index}
                className="relative text-center flex text-[14px] items-end justify-center min-h-[60px] border-b-1  border-[#CFCFCF] pb-2  "
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Enquiry Button */}
        <div className="flex justify-center mt-[30px] xxl:mt-[50px]">
          <EnquiryButton onClick={onEnquireClick} />
        </div>
      </div>
    </section>
  );
};

export default Services;
