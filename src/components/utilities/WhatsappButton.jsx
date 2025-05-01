import React from 'react'

const WhatsappButton = () => {
  return (
    <button className='fixed bottom-[51px] right-[20px] cursor-pointer z-2 w-[40px]'>
      <a
                    href="https://wa.me/919861922925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
      <img src="/assets/icons/whatsapp-icon.png" alt="Whatsapp Icon" />
      </a>
    </button>
  )
}

export default WhatsappButton
