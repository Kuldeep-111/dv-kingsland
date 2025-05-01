import React from "react";
import { CustomDiv, Pera2 } from "../utilities/CustomTag";
import Price from "../utilities/Price";
import BorderBottom from "../utilities/BorderBottom";
import Image from "next/image";
import CallButton from "../utilities/CallButton";
import CustomForm from "../CustomForm";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section
      className="pt-[50px] pb-[20px] xxl:py-[80px] md:pb-[50px]  md:px-[0] bg-[#EBEAE6]"
      id="contact"
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] w-full xl:w-[90%] mx-auto">
          {/* Left Section */}
          <div className="flex flex-col gap-4 xxl:gap-6 ">
            <div className="mb-[30px]">
              <Price
                text={"Get in Touch"}
                firstText="!text-[36px] md:!text-[46px] lg:!text-[56px]"
                OtherText="!text-[20px] md:!text-[30px] lg:!text-[40px]"
                CustomClass="!justify-start gradient-text"
              />
              <div className="flex items-center justify-start gap-[10px] md:gap-[20px] lg:gap-[30px] ps-[0] md:ps-[10px] lg:ps-[40px]">
                <div
                  className={`h-[1px] bg-gradient-to-l bg-[#705118] w-[100px] md:w-[120px] lg:w-[150px]`}
                ></div>
                <Price text={"with Us"} 
                firstText="!text-[36px] md:!text-[46px] lg:!text-[56px]"
                OtherText="!text-[20px] md:!text-[30px] lg:!text-[40px]" />
              </div>
            </div>

            <div className="flex justify-between relative ">
              <div className="flex flex-col gap-6 w-full justify-center">
                {/* Contact Numbers */}
                <div className="flex items-center gap-4">
                  <a
                    href="tel:+917064333999"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <CallButton
                      CustomClass="rounded-full w-[40px] h-[40px]"
                      IconClass="!w-[16px]"
                    />
                    <span className="text-[18px]">+91 7064333999</span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://wa.me/919861922925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <CallButton
                      CustomClass="rounded-full w-[40px] h-[40px]"
                      IconUrl="/assets/icons/whatsapp.png"
                      IconClass="!w-[18px]"
                    />
                    <span className="text-[18px]">+91 9861922925 </span>
                  </a>
                </div>
              </div>
              <div className="absolute right-[72px] md:right-[30px] lg:right-[72px] top-[-36px] w-[150px] h-[150px] md:relative md:w-[100px] md:h-[100px] lg:w-[250px] lg:h-[150px] xxl:[250px]">
                <Image
                  src="/assets/images/fullBg.webp"
                  alt="Decoration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* RERA Number */}
            <div className="bg-[#705118]   text-white p-3 md:p-4 w-full md:w-[80%] mt-[20px] xxl:mt-[40px] mx-auto md:mx-[0]">
              <p className="text-[16px] md:text-[18px] text-center">
                Rera no. MP/19/2023/01042
              </p>
            </div>

            {/* Website Link */}
            <div className="flex flex-wrap justify-center md:justify-start md:flex-nowrap items-center gap-4">
              Rera website link :
              <a
                href="https://www.example.com"
                className="text-[18px] hover:text-[#705118] transition-colors"
              >
                https://rera.odisha.gov.in/
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex flex-col gap-6">
            <CustomForm CustomClass="!ml-auto !mr-0"/>
          </div>
        </div>

        {/* Disclaimer Text */}

        {/* <BorderBottom CustomClass={"w-full mt-[70px]"} /> */}
        <div className=" mt-[25px] md:mt-[50px]">
          <Pera2 CustomClass="!text-[10px] xxl:!text-[12px] !leading-[20px] md:!leading-[20px] xxl:!leading-[25px] !text-center">
          This is only for information purposes and does not constitute an offer or contract. Customers are advised to have their independent evaluation. Artistic impression, as shown, is a pictorial conceptualization and indicative only, and actual may differ. The sale is subject to the terms of the Booking Application and Agreement For Sale. All information, contents, plans, and specifications are subject to change as may be decided by the Promoter or directed by any competent authority subject to applicable laws and availability. All furniture, fittings and specifications shown herein are for portraying a possible layout/interior for reference purposes only and do not form part of the standard specifications/amenities/services to be provided in the unit/project and are subject to change. The provision of social infrastructure and other amenities will be as per approved plans.
          </Pera2>
        </div>

        {/* Footer */}
        <div className="mt-[10px] md:mt-[30px] text-center ">
          <p className="text-[10px] md:text-[14px] text-[#000000] font-montserrat font-normal md:font-medium">
            <Link  href="/disclaimer"
              className="hover:underline text-[#705118] font-montserrat">
              Disclaimer & Privacy Policy
            </Link>{" "}
            | Copyright ©DN Kingsland 2025. All Rights Reserved | Crafted by{" "}
            <a
              href="https://www.gtftechnologies.com/"
              className="hover:underline text-[#705118] font-montserrat"
            >
              GTF Technologies
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
