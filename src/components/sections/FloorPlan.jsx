"use client";
import React, { useState } from 'react'
import { CustomDiv } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'

const FloorPlan = ({onEnquireClick}) => {
  const [activeTab, setActiveTab] = useState('site-plan')
  const [isBlurred, setIsBlurred] = useState(true)

  const plans = [
    { 
      id: 'site-plan', 
      label: 'Site Plan',
      image: '/assets/images/floorplan/master-plan-img-1.png',
      title: 'Strategic Site Planning'
    },
    { 
      id: '4bhk-plan', 
      label: '4 BHK Plan',
      image: '/assets/images/floorplan/master-plan-img-1.png',
      title: '4 BHK Luxury Residence'
    },
    { 
      id: '5bhk-plan', 
      label: '5 BHK Plan',
      image: '/assets/images/floorplan/master-plan-img-1.png',
      title: '5 BHK Premium Residence'
    }
  ]

  const handleViewPlan = () => {
    setIsBlurred(false)
  }

  return (
    <section className="pt-[80px] bg-[#EBEAE6] relative" id="floorplan">
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[50px]">
          <Price text={"Site & Floor Plan"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center gap-4 mb-[50px]">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => {
                setActiveTab(plan.id)
                setIsBlurred(true)
              }}
              className={`px-6 py-2 transition-all duration-300 py-[12px] px-[55px] tracking-[2px] ${
                activeTab === plan.id
                  ? 'bg-[#705118] text-white'
                  : 'bg-white text-[#705118] hover:bg-[#705118] hover:text-white'
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* Desktop Image Container */}
        <div className="hidden md:block relative w-[80%] mx-auto h-[450px]">
          {/* Blur Overlay */}
          {isBlurred && (
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-10 flex items-center justify-center">
              <button
                onClick={onEnquireClick}
                className="bg-[#705118] text-white px-8 py-3  hover:bg-[#8a6a2b] transition-all duration-300"
              >
                View Plan
              </button>
            </div>
          )}

          {/* Image */}
          <Image
            src={plans.find(p => p.id === activeTab).image}
            alt={plans.find(p => p.id === activeTab).title}
            fill
            className="object-contain"
          />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 px-[15px]">
          {plans.map((plan) => (
            <div key={plan.id} className="space-y-4 mt-[55px]">
              {/* Plan Title */}
              <div className="text-center">
              <button
                className="bg-[#705118] text-white px-8 py-3 mb-[20px] hover:bg-[#8a6a2b] transition-all duration-300"
              >
                {plan.label}
              </button>
                {/* <h3 className="text-[24px] font-cinzel text-[#705118]">{plan.label}</h3> */}
              </div>

              {/* Image Container */}
              <div className="relative w-full h-[300px]">
                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-10 flex items-center justify-center">
                  <button
                    onClick={onEnquireClick}
                    className="bg-white border-1 border-[#705118] text-[#705118] px-8 py-3  hover:bg-[#8a6a2b] transition-all duration-300"
                  >
                    View Plan
                  </button>
                </div>

                {/* Image */}
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FloorPlan