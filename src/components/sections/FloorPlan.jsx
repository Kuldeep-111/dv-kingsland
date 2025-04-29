"use client";
import React, { useState } from 'react'
import { CustomDiv } from '../utilities/CustomTag'
import Price from '../utilities/Price'
import BorderBottom from '../utilities/BorderBottom'
import Image from 'next/image'

const FloorPlan = () => {
  const [activeTab, setActiveTab] = useState('site-plan')
  const [isBlurred, setIsBlurred] = useState(true)

  const tabs = [
    { id: 'site-plan', label: 'Site Plan' },
    { id: '4bhk-plan', label: '4 BHK Plan' },
    { id: '5bhk-plan', label: '5 BHK Plan' }
  ]

  const content = {
    'site-plan': {
      image: '/assets/images/floorplan/master-plan-img-1.png',
      title: 'Strategic Site Planning'
    },
    '4bhk-plan': {
      image: '/assets/images/floorplan/master-plan-img-1.png',
      title: '4 BHK Luxury Residence'
    },
    '5bhk-plan': {
      image: '/assets/images/floorplan/master-plan-img-1.png',
      title: '5 BHK Premium Residence'
    }
  }

  const handleViewPlan = () => {
    setIsBlurred(false)
  }

  return (
    <section className="py-[50px] bg-[#EBEAE6] relative">
      <div className="container mx-auto">
        {/* Top Heading */}
        <CustomDiv CustomClass="mb-[50px]">
          <Price text={"Site & Floor Plan"} />
          <BorderBottom CustomClass={"w-[250px] mt-2"} />
        </CustomDiv>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-[50px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setIsBlurred(true)
              }}
              className={`px-6 py-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#705118] text-white'
                  : 'bg-white text-[#705118] hover:bg-[#705118] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[600px]">
          {/* Blur Overlay */}
          {isBlurred && (
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-10 flex items-center justify-center">
              <button
                onClick={handleViewPlan}
                className="bg-[#705118] text-white px-8 py-3 rounded-full hover:bg-[#8a6a2b] transition-all duration-300"
              >
                View Plan
              </button>
            </div>
          )}

          {/* Image */}
          <Image
            src={content[activeTab].image}
            alt={content[activeTab].title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default FloorPlan