import Link from 'next/link'
import React from 'react'

const WhatsappButton = () => {
  return (
    <button className='fixed bottom-[51px] right-[20px] cursor-pointer z-2 w-[40px]'>
      <Link
                    href="https://wa.me/919891807073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
      <img src="/assets/icons/whatsapp-icon.png" alt="Whatsapp Icon" />
      </Link>
    </button>
  )
}

export default WhatsappButton
