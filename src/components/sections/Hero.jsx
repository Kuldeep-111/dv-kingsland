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
    <section
      className="bg-[#EBEAE6] relative h-auto md:h-screen w-full pt-[100px]"
      id="hero"
    >
      <Header />
      <WhatsappButton />

      <Image
        src="/assets/images/hero/hero1.webp"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        quality={100}
        className="hidden md:block"
      />
      <div className="parent hidden md:flex flex-col h-full w-full absolute left-0 top-0 pt-[90px] ">
        <CustomDiv CustomClass=" h-[35%] flex flex-col justify-start">
          <Pera CustomClass={"text-[24px]"}>Odisha's </Pera>
          <Price text={"Largest & Most Expensive"} />
          <Pera>Residences</Pera>
          <EnquiryButton onClick={onEnquireClick} CustomClass="mt-[20px]" />
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
            {/* location  */}
            <div className="flex items-center gap-[5px] mt-[10px]">
            <Image src="/assets/icons/location.webp" alt="Location background" width="20" height="20"/>
            <Pera CustomClass=" !text-[16px] !leading-normal">  Janpath, Saheed Nagar, </Pera>
            </div>
            <Pera CustomClass=" !text-[16px] !leading-normal">Annexe Bhubaneswar</Pera>
          </CustomDiv>
        </div>
      </div>
      {/* Mobile bottom content */}

      <CustomDiv CustomClass="  flex md:hidden flex-col justify-start">
        <Pera CustomClass={"text-[16px] md:text-[24px]"}>Odisha's</Pera>
        <Price
          text={" Largest & Most Expensive"}
          CustomClass={"!text-[16px]"}
        />
        <Pera>Residences</Pera>
      </CustomDiv>
      <div className="relative block md:hidden ">
        <img
          src="/assets/images/hero/mobile_hero.webp"
          alt="mobile hero"
          className="block md:hidden w-full"
        />
        <CustomDiv CustomClass="right h-full ml-auto w-1/2 flex flex-col justify-start absolute top-[30%] right-0">
          <Pera CustomClass={"text-[16px] md:text-[24px]"}>First & Last</Pera>
          <Price text={" Since 1960"} />
          <BorderBottom />
          
            {/*mobile location  */}
            <div className="flex items-start gap-[5px] mt-[10px] ps-[25px] sm:ps-[45px]">
            <Image src="/assets/icons/location.webp" alt="Location Background" width="15" height="15"/>
            <Pera CustomClass=" !text-[12px] !leading-normal text-start">  Janpath, Saheed Nagar, Annexe Bhubaneswar</Pera>
            </div>
        </CustomDiv>
      </div>
      <div className=" w-full px-4 block md:hidden mt-[30px]">
        <div className="flex flex-col items-start gap-4">
          <CustomDiv CustomClass="left w-full flex flex-col justify-start">
            <Pera>Starting Price</Pera>
            <Price text={" ₹ 5.40 cr*"} span={"onwards"} />
            <BorderBottom CustomClass={"w-[200px]"} />
          </CustomDiv>
          <EnquiryButton
            onClick={onEnquireClick}
            CustomClass="w-[250px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
