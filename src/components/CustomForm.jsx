import React, { useState } from 'react';
import { Pera2 } from './utilities/CustomTag';
import { usePathname } from 'next/navigation';
import { useFormSubmit } from '@/app/hooks/UseFormSubmit';

const CustomForm = ({ CustomClass }) => {
  const path = usePathname();

  let finalFormName = "";
  if (path === "/remarketing/") {
    finalFormName = "DN Kingsland Remarketing";
  } else if (path === "/discovery/") {
    finalFormName = "DN Kingsland Discovery";
  } else {
    finalFormName = "DN Kingsland";
  }

  const { handleSubmit, loading } = useFormSubmit(finalFormName);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});

  const fields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'contact', type: 'tel', placeholder: 'Contact' },
    { name: 'message', type: 'textarea', placeholder: 'Message', rows: 1 }
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.contact) {
      newErrors.contact = "Contact is required.";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be 10 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.consent) newErrors.consent = "You must accept the terms.";

    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    await handleSubmit(formData);
    setFormData({ name: '', email: '', contact: '', message: '', consent: false });
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col gap-6 border-2 border-[#705118] py-[20px] px-[20px] md:py-[25px] md:px-[25px] xxl:py-[40px] xxl:px-[50px] bg-[#7051181A] w-full max-w-[500px] mx-auto ${CustomClass}`}
    >
      {fields.map((field, index) =>
        field.type === 'textarea' ? (
          <div key={field.name} className="flex flex-col gap-1">
            <textarea
              placeholder={field.placeholder}
              rows={field.rows}
              value={formData[field.name]}
              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
              className="w-full text-[#705118] p-3 md:p-4 text-[12px] sm:text-[14px] md:text-[16px] font-montserrat font-semibold border-0 border-b border-[#705118] bg-[#EBEAE6] focus:outline-none focus:ring-2 focus:ring-[#705118] tracking-[2px] uppercase"
            ></textarea>
            {errors[field.name] && <span className="absolute bottom-[-18px] left-0 text-red-600 text-[10px] sm:text-xs">{errors[field.name]}</span>}
          </div>
        ) : (
          <div key={field.name} className="flex flex-col gap-1 relative">
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
              className="w-full text-[#705118] p-2 md:p-3 xxl:p-4 text-[12px] sm:text-[14px] md:text-[16px] font-montserrat font-semibold border-0 border-b border-[#705118] bg-[#EBEAE6] focus:outline-none focus:ring-0 focus:border-[#705118] tracking-[2px] uppercase"
            />
            {errors[field.name] && <span className="absolute bottom-[-18px] left-0 text-red-600 text-[10px] sm:text-xs">{errors[field.name]}</span>}
          </div>
        )
      )}

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-[14px] relative">
          <Pera2 CustomClass="!leading-[14px] sm:!leading-[18px] md:!leading-[20px] xxl:!leading-[24px] !text-[10px] xxl:!text-[12px] !tracking-[0px] !text-start md:!text-center">
            I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
          </Pera2>
          {errors.consent && <div className="absolute bottom-[-13px] left-0 text-red-600 text-xs mt-1">{errors.consent}</div>}
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#705118] text-white px-8 py-3 w-full max-w-[250px] font-montserrat mx-auto hover:bg-[#c49945] transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Now"}
      </button>
    </form>
  );
};

export default CustomForm;
