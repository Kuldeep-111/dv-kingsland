import React from 'react'
import EnquiryButton from '../utilities/EnquiryButton';
import CallButton from '../utilities/CallButton';

const Header = () => {
  return (
    <header className="py-[25px] w-full absolute left-0 top-0 ">
      <div className="flex items-center justify-between  container mx-auto">
        <EnquiryButton/>
        <div className='w-[200px]'>
          <img src="/assets/images/logo.png" alt="DN Kingsland" />
        </div>
        <div className='flex items-center '>
          {/* <button className='w-[35px] mr-[15px]'>
            <img src="/assets/icons/call-now.png" alt="Call Now" />
          </button> */}
          <CallButton/>
          <button className='w-[30px]'>
            <img src="/assets/icons/menu.svg" alt="Menu Buttons" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header