import React from "react";
import { CustomDiv, Pera, Pera2 } from "../utilities/CustomTag";
import Image from "next/image";
import BorderBottom from "../utilities/BorderBottom";
import Price from "../utilities/Price";
import EnquiryButton from "../utilities/EnquiryButton";

const Residences = ({onEnquireClick}) => {
  return (
    <section className="py-[50px] bg-[#EBEAE6] relative" id="residences">
      <Image
        src="/assets/images/residences/bg.png"
        alt="background image"
        width={150} // adjust as per actual image size or layout
        height={250}
        className="absolute top-[24%] left-0 hidden md:block"
      />

      <Image
        src="/assets/images/residences/bg.png"
        alt="background image"
        width={150}
        height={250}
        className="absolute top-[24%] right-0 transform scale-x-[-1] hidden md:block"
      />
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[25px] xxl:mb-[50px]">
        <Price
                text={
                  "Odisha's Prestigious Clubhouse"
                }
                firstText="!text-[15px] sm:!text-[18px] md:!text-[28px] xxl:!text-[32px]"
                OtherText="!text-[13px] sm:!text-[16px] md:!text-[26px] xxl:!text-[30px]"
              />
          <Pera CustomClass="!text-[12px] sm:!text-[14px] md:!text-[20px] md:text-[24px] mt-[0px]">
            Experience The Extraordinary
          </Pera>
        </CustomDiv>

        {/* Image */}
        <div className="relative m-auto w-full md:w-[65%] h-[350px] xll:h-[400px] mb-[25px] xll:mb-[50px]">
          <div className="left-border hidden md:block absolute top-[-30px] left-[-30px] h-[150px] w-[150px] ">
            <div className="before:block before:w-full before:h-[1px] before:bg-[#A39264] before:absolute before:left-[-15px] before:top-[6px]"></div>
            <div className="after:block after:w-[1px] after:h-[150px] after:bg-[#A39264] after:absolute after:top-[-20px] after:left-[6px]"></div>
          </div>
          <div className="right-border hidden md:block absolute bottom-[-30px] right-[-30px] h-[150px] w-[150px] ">
            <div className="before:block before:w-full before:h-[1px] before:bg-[#A39264] before:absolute before:right-[-15px] before:bottom-[6px]"></div>
            <div className="after:block after:w-[1px] after:h-[150px] after:bg-[#A39264] after:absolute after:bottom-[-20px] after:right-[6px]"></div>
          </div>
          <Image
            src="/assets/images/residences/about.png"
            alt="Residences"
            fill
            className="object-cover"
          />
        </div>

        {/* Second Heading */}
        <CustomDiv CustomClass="mb-[20px] md:mb-[25px] xll:mb-[50px]">
          <EnquiryButton onClick={onEnquireClick}/>
          {/* <Price
            text={"king of all residences"}
            firstText="!text-[22px]"
            OtherText="!text-[20px]"
          /> */}
          {/* <Pera CustomClass="text-[24px]">king of all residences</Pera> */}
          {/* <BorderBottom CustomClass={"w-[300px] mt-[5px]"} /> */}
        </CustomDiv>

        {/* Two Paragraphs Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[80px]  px-[15px] md:px-[0] w-full xl:w-[65%] mx-auto">
          <Pera2 CustomClass="!leading-[25px]">
            Welcome to DN Kingsland, Odisha's first and only high-rise luxury
            residential development since 1960. Rising proudly in the heart of
            Janpath, Shaheed Nagar, Annexe Bhubaneswar, DN Kingsland isn't just
            a residence—it's a landmark.
          </Pera2>
          <Pera2 CustomClass="!leading-[25px]">
            Designed for those who seek timeless elegance, extraordinary space,
            and a lifestyle beyond the ordinary, our twin towers stand as a
            symbol of ambition, refinement, and urban exclusivity.
          </Pera2>
        </div>
      </div>
    </section>
  );
};

export default Residences;
