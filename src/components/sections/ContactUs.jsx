import React from "react";
import { CustomDiv, Pera2 } from "../utilities/CustomTag";
import Price from "../utilities/Price";
import BorderBottom from "../utilities/BorderBottom";
import Image from "next/image";
import CallButton from "../utilities/CallButton";
import CustomForm from "../CustomForm";

const ContactUs = () => {
  return (
    <section className="py-[50px] px-[15px] md:px-[0] bg-[#EBEAE6]" id="contact">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          {/* Left Section */}
          <div className="flex flex-col gap-6 ">
            <div CustomClass="mb-[30px]">
              <Price
                text={"Get in Touch"}
                firstText="text-[46px]"
                CustomClass="!justify-start"

              />
              <div className="flex items-center justify-start gap-[30px] ps-[40px]">
                <div
                  className={`h-[1px] bg-gradient-to-l bg-[#705118] w-[150px]`}
                ></div>
                <Price text={"with Us"} firstText="text-[46px]" />
              </div>
            </div>

            <div className="flex justify-between relative ">
              <div className="flex flex-col gap-6 justify-center">
                {/* Contact Numbers */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2"
                target="_blank"
              >
                <CallButton
                  CustomClass="rounded-full w-[40px] h-[40px]"
                  IconClass="!w-[16px]"
                />
                <span className="text-[18px]">+91 1234567890</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/918888888888"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <CallButton
                  CustomClass="rounded-full w-[40px] h-[40px]"
                  IconUrl="/assets/icons/whatsapp.png"
                  IconClass="!w-[18px]"
                />
                <span className="text-[18px]">+91 888-888-8888</span>
              </a>
            </div>
              </div>
              <div className="absolute right-[72px] top-[-36px] w-[150px] h-[150px] md:relative md:w-[250px] md:h-[250px]">

                                <Image
                                  src="/assets/images/location/bg1.png"
                                  alt="Decoration"
                                  fill
                                  className="object-contain"
                                />
                              </div>
            </div>

            

            {/* RERA Number */}
            <div className="bg-[#705118] text-white p-4 w-[80%] mt-[40px] mx-auto md:mx-[0]">
              <p className="text-[18px] text-center">
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
            <CustomForm/>
          </div>
        </div>

        {/* Disclaimer Text */}

        <BorderBottom CustomClass={"w-full mt-[70px]"} />
        <div className="mt-[50px]">
          <Pera2 CustomClass="text-[12px] text-center">
            This is only for information purposes and does not constitute any
            offer or contract. Customers are advised to have their independent
            evaluation. Artistic impression as shown is a pictorial
            conceptualization and indicative only and actual may differ. The
            sale is subject to the terms of Booking Application and Agreement
            For Sale. All information, contents, plans, specifications are
            subject to change as may he decided by the Promoter or directed by
            any competent authority subject to applicable laws and availability.
            All furniture, fittings and specifications shown herein are for
            portraying a possible layout/interior for reference purposes only
            and do not form part of the standard
            specifications/amenities/services to be provided in the unit/project
            and is subject to changes. The provision of social infrastructure
            and other amenities will be as per approved plans.
          </Pera2>
        </div>

        {/* Footer */}
        <div className="mt-[30px] text-center ">
          <p className="text-[14px] text-[#000000] font-montserrat font-medium">
            <a
              href="#"
              className="hover:underline text-[#705118] font-montserrat"
            >
              Disclaimer & Privacy Policy
            </a>{" "}
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
