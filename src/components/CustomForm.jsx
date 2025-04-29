import React from 'react'
import { Pera2 } from './utilities/CustomTag'

const CustomForm = () => {
  // Array of form fields with their configurations
  const fields = [
    { type: 'text', placeholder: 'Name' },
    { type: 'email', placeholder: 'Email' },
    { type: 'tel', placeholder: 'Contact' },
    { type: 'textarea', placeholder: 'Message', rows: 1 }
  ]

  return (
    <form className="flex flex-col  gap-6 border-2 border-[#705118] pt-[40px] pr-[50px] pb-[40px] pl-[50px] bg-[#7051181A] w-full max-w-[500px] mx-auto">
      {/* Dynamically render form fields */}
      {fields.map((field, index) => (
        field.type === 'textarea' ? (
          <textarea
            key={index}
            placeholder={field.placeholder}
            rows={field.rows}
            className="w-full text-[#705118] p-4 font-montserrat font-semibold border-0 border-b border-[#705118] bg-[#EBEAE6]  focus:outline-none focus:ring-2 focus:ring-[#705118] tracking-[2px] uppercase"
          ></textarea>
        ) : (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full text-[#705118] p-4 font-montserrat font-semibold border-0 border-b border-[#705118] bg-[#EBEAE6] focus:outline-none focus:ring-0 focus:border-[#705118] tracking-[2px] uppercase"
          />
        )
      ))}

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent" className="mt-2" />
        <label htmlFor="consent" className="text-[14px]">
            <Pera2 CustomClass="!leading-[24px] !text-[12px] !tracking-[0px]">
          I authorize company representatives to Call, SMS, Email or
          WhatsApp me about its products and offers. This consent
          overrides any registration for DNC/NDNC.</Pera2>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#705118] text-white px-8 py-3 w-[250px] font-montserrat mx-auto hover:bg-[#8a6a2b] transition-all duration-300"
      >
        Submit Now
      </button>
    </form>
  )
}

export default CustomForm
