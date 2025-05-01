import React from 'react'
import { Pera2 } from './utilities/CustomTag'

const CustomForm = ({CustomClass}) => {
  // Array of form fields with their configurations
  const fields = [
    { type: 'text', placeholder: 'Name' },
    { type: 'email', placeholder: 'Email' },
    { type: 'tel', placeholder: 'Contact' },
    { type: 'textarea', placeholder: 'Message', rows: 1 }
  ]

  return (
    <form className={`flex flex-col  gap-6 border-2 border-[#705118] py-[20px] px-[20px] md:py-[40px] md:px-[50px]  bg-[#7051181A] w-full max-w-[500px] mx-auto ${CustomClass}`}>
      {/* Dynamically render form fields */}
      {fields.map((field, index) => (
        field.type === 'textarea' ? (
          <textarea
            key={index}
            placeholder={field.placeholder}
            rows={field.rows}
            className="w-full text-[#705118] p-3 md:p-4 text-[12px] sm:text-[14px] md:text-[16px] font-montserrat font-semibold border-0 border-b border-[#705118] bg-[#EBEAE6]  focus:outline-none focus:ring-2 focus:ring-[#705118] tracking-[2px] uppercase"
          ></textarea>
        ) : (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full text-[#705118] p-3 md:p-4 text-[12px] sm:text-[14px] md:text-[16px] font-montserrat font-semibold border-0 border-b border-[#705118] bg-[#EBEAE6] focus:outline-none focus:ring-0 focus:border-[#705118] tracking-[2px] uppercase"
          />
        )
      ))}

      {/* Checkbox */}
      <div className="flex items-start gap-3">
      <input type="checkbox" id="consent" className="mt-1" />
        <label htmlFor="consent" className="text-[14px]">
            <Pera2 CustomClass="!leading-[14px] md:!leading-[18px] sm:!leading-[20px] md:!leading-[24px] !text-[10px] md:!text-[12px] !tracking-[0px] !text-start md:!text-center">
          I authorize company representatives to Call, SMS, Email or
          WhatsApp me about its products and offers. This consent
          overrides any registration for DNC/NDNC.</Pera2>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#705118] text-white px-8 py-3 w-full max-w-[250px] font-montserrat mx-auto hover:bg-[#8a6a2b] transition-all duration-300"
      >
        Submit Now
      </button>
    </form>
  )
}

export default CustomForm
