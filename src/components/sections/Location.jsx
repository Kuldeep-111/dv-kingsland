import React from "react";
import { CustomDiv, Pera, Pera2 } from "../utilities/CustomTag";
import Price from "../utilities/Price";
import BorderBottom from "../utilities/BorderBottom";
import Image from "next/image";

const Location = ({onEnquireClick}) => {
  return (
    <section className="py-[50px] xxl:py-[80px] bg-[#EBEAE6]" id="location">
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[25px] xxl:mb-[50px]">
          <Price text={"Prime Location"} />
          <BorderBottom CustomClass={"w-[250px] mt-2 mb-2 !h-[2px]"} />
        </CustomDiv>
      </div>

      {/* Background Image and Content Section */}
      <div className="relative">
        <Image
          src="/assets/images/location/background.svg"
          alt="Location Background"
          fill
          className="object-cover"
        />

        <div className="container mx-auto relative z-10 py-[20px] xll:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-12  gap-[50px]">
            {/* Left Section - Map */}
            <div className="relative  md:col-span-6 order-2 md:order-1 h-[300px] md:h-[400px] xll:[500px]">
              <Image
                src="/assets/images/location/map.png"
                alt="Location Map"
                fill
                className="object-cover"
              />
            
            </div>

            {/* Right Section - Content */}
            <div className="flex order-1  md:col-span-6 md:order-2 flex-col justify-start xll:justify-center">
              <Price
                text={
                  "Where Prestige Meets Proximity"
                }
                CustomClass={" !text-black font-normal justify-center md:justify-start pr-[0] sm:pr-[15px]"}
                firstText="!text-[16px] sm:!text-[20px] md:!text-[26px]"
                OtherText="!text-[14px] sm:!text-[18px] md:!text-[24px]"
              />
              <Price
                text={
                  "DN Kingsland at the"
                }
                CustomClass={" !text-black font-normal justify-center md:justify-start pr-[0] sm:pr-[15px]"}
                firstText="!text-[16px] sm:!text-[20px] md:!text-[26px]"
                OtherText="!text-[14px] sm:!text-[18px] md:!text-[24px]"
              />
              <Price
                text={
                  "Heart of Bhubaneswar"
                }
                CustomClass={" !text-black font-normal justify-center md:justify-start pr-[0] sm:pr-[15px]"}
                firstText="!text-[16px] sm:!text-[20px] md:!text-[26px]"
                OtherText="!text-[14px] sm:!text-[18px] md:!text-[24px]"
              />
              <Pera2 CustomClass="mt-[20px]">
                The Only High-Rise Luxury Landmark in Central Bhubaneswar since
                1960 crafted for those who desire the extraordinary.
              </Pera2>
              <div className="relative hidden md:flex items-center gap-4 mt-[40px] ">
                <button className="bg-[#705118] text-white w-[240px] h-[45px] mt-[40px] cursor-pointer" onClick={onEnquireClick}>
                  View Location Map
                </button>
                <div className="absolute right-0 top-[-75%] w-[250px] h-[250px]">
                  <Image
                    src="/assets/images/location/bg1.png"
                    alt="Decoration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
          </div>
          <button className="bg-[#705118] text-white py-[12px] px-[55px]   mt-[80px] mx-auto  cursor-pointer block md:hidden" onClick={onEnquireClick}>
                  View Location Map
                </button>
          
    
        </div>
      </div>
    </section>
  );
};

export default Location;
