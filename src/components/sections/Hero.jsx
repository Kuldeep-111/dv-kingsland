import React from "react";
import Price from "../utilities/Price";
import { CustomDiv, Pera } from "../utilities/CustomTag";
import Header from "./Header";
import Image from "next/image";
import BorderBottom from "../utilities/BorderBottom";
import WhatsappButton from "../utilities/WhatsappButton";
import EnquiryButton from "../utilities/EnquiryButton";

const Hero = ({ onEnquireClick }) => {
  return (
    <section className="bg-[#EBEAE6] relative h-auto md:h-screen w-full pt-[100px]" id="hero">
      
      <Header onEnquireClick={onEnquireClick} />
      <WhatsappButton />

      <Image
        src="/assets/images/hero1.png"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        quality={100}
        className="hidden md:block"
      />
      <div className="parent hidden md:flex flex-col h-full w-full absolute left-0 top-0 pt-[90px] ">
        <CustomDiv CustomClass=" h-[35%] flex flex-col justify-start">
          <Pera CustomClass={"text-[24px]"}>Odisha's Most</Pera>
          <Price text={" Expensive & Largest"} />
          <Pera>Residences</Pera>
        </CustomDiv>
        <div className="bottom flex h-[65%] w-full">
          <CustomDiv CustomClass="left h-full w-1/2 hidden md:flex flex-col justify-start">
            <Pera>Starting Price</Pera>
            <Price text={" ₹ 5.40 cr*"} span={"onwards"} />
            <BorderBottom CustomClass={"w-[200px]"} />
          </CustomDiv>
          <CustomDiv CustomClass="right h-full ml-auto w-1/2 flex flex-col justify-start">
            <Pera>First & Last</Pera>
            <Price text={" Since 1960"} />
            <BorderBottom />
          </CustomDiv>
        </div>
      </div>
          {/* Mobile bottom content */}
          <CustomDiv CustomClass="  flex md:hidden flex-col justify-start">
          <Pera CustomClass={"text-[24px]"}>Odisha's Most</Pera>
          <Price text={" Expensive & Largest"} />
          <Pera>Residences</Pera>
        </CustomDiv>
      <img src="/assets/images/mobile_hero.png" alt="mobile hero" className="block md:hidden"/>
<div className=" w-full px-4 block md:hidden mt-[30px]">
  <div className="flex flex-col items-start gap-4">
    <CustomDiv CustomClass="left w-full flex flex-col justify-start">
      <Pera>Starting Price</Pera>
      <Price text={" ₹ 5.40 cr*"} span={"onwards"} />
      <BorderBottom CustomClass={"w-[200px]"} />
    </CustomDiv>
    <EnquiryButton CustomClass="w-[250px] mx-auto" />
  </div>
</div>

    </section>
  );
};

export default Hero;
