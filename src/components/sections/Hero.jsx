import React from 'react'
import Price from '../utilities/Price'
import { CustomDiv, Pera } from '../utilities/CustomTag'
import Header from './Header'
import Image from 'next/image'
import BorderBottom from '../utilities/BorderBottom'
import WhatsappButton from '../utilities/WhatsappButton'

const Hero = () => {
  return (
    <div className="bg-[#EBEAE6] relative h-screen w-full">
      <Image 
        src="/assets/images/hero.png" 
        alt="Hero Image" 
        layout="fill" 
        objectFit="cover" 
        objectPosition="bottom"
        quality={100} 
      />
      <Header/>
      <WhatsappButton/>
      <div className="parent flex flex-col h-full w-full absolute left-0 top-0 pt-[90px]">
        <CustomDiv CustomClass=" h-[35%] flex flex-col justify-start">
          <Pera CustomClass={'text-[24px]'}>Odisha's Most</Pera>
          <Price text={" Expensive & Largest"} />
          <Pera>Residences</Pera>
        </CustomDiv>
        <div className="bottom flex h-[65%] w-full">
          <CustomDiv CustomClass="left h-full w-1/2 flex flex-col justify-start">
          <Pera>Starting Price</Pera>
            <Price text={" ₹ 5.40 cr*"} span={'onwards'}/>
            <BorderBottom CustomClass={'w-[200px]'}/>
          </CustomDiv>
          <CustomDiv CustomClass="right h-full w-1/2 flex flex-col justify-start">
             <Pera>First & Last</Pera>
            <Price text={" Since 1960"} />
            <BorderBottom/>
          </CustomDiv>
        </div>
      </div>
    </div>
  )
}

export default Hero