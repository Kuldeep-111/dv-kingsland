import React, { useEffect, useState } from "react";
import Price from "../utilities/Price";
import { CustomDiv, Pera } from "../utilities/CustomTag";
import Header from "./Header";
import Image from "next/image";
import BorderBottom from "../utilities/BorderBottom";
import WhatsappButton from "../utilities/WhatsappButton";
import EnquiryButton from "../utilities/EnquiryButton";
import Link from "next/link";

const Hero = ({ onEnquireClick }) => {

  const [imageSrc, setImageSrc] = useState("/assets/images/hero/hero1.webp");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setImageSrc("/assets/images/hero/hero3.webp");
      } else {
        setImageSrc("/assets/images/hero/hero1.webp");
      }
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className="bg-[#EBEAE6] relative h-auto md:h-screen w-full pt-[100px]"
      id="hero"
    >
      <Header />
      <WhatsappButton />

      <Image
        src={imageSrc}
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
            <Price text={" ₹ 5.10 cr*"}  />
            <BorderBottom CustomClass={"w-[200px]"} />
            <span className="mt-[10px]">onwards</span>
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
          src="/assets/images/hero/mobile_hero1.webp"
          alt="mobile hero"
          className="block md:hidden w-full"
        />
      </div>
      
      <CustomDiv CustomClass=" h-full ml-auto w-full flex flex-col justify-start block md:hidden mt-[30px]">
          <Pera CustomClass={"text-[16px] md:text-[24px]"}>First & Last</Pera>
          <Price text={" Since 1960"} />
          <BorderBottom />
          
            {/*mobile location  */}
            <div className="flex items-start gap-[5px] mt-[20px] ">
            <Image src="/assets/icons/location.webp" alt="Location Background" width="15" height="15"/>
            <Pera CustomClass=" !text-[12px] !leading-normal text-start">  Janpath, Saheed Nagar, </Pera>
            </div>
            <Pera CustomClass=" !text-[12px] !leading-normal text-center mt-[5px]">  Annexe Bhubaneswar</Pera>
        </CustomDiv>
      <div className=" w-full px-4 block md:hidden mt-[30px]">
        <div className="flex flex-col items-start gap-4">
          <CustomDiv CustomClass="left w-full flex flex-col justify-start">
            <Pera>Starting Price</Pera>
            <Price text={" ₹ 5.40 cr*"} span={"onwards"} />
            <BorderBottom CustomClass={"w-[200px]"} />
          </CustomDiv>
          <div className="flex flex-wrap justify-center gap-[5px] sm:gap-[10px] mb-[20px] md:px-[0] w-full">
          <EnquiryButton onClick={onEnquireClick} CustomClass="!text-[12px] sm:!text-[14px]"/>
          
          <Link
              href="tel:+917064333999"
              className="flex items-center gap-2"
              target="_blank"
            >
          <button
            type="button"
            className="bg-[#705118] hover:bg-[#c49945] transition-all duration-300 cursor-pointer text-[12px] sm:text-[14px] md:text-[16px] xxl:text-[20px] text-white py-[8px] xxl:py-[12px] px-[17px] sm:px-[35px] xxl:px-[55px] tracking-[1px] sm:tracking-[2px]"
          >
            Tap To Call
          </button>
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
