export const  Pera = ({ children ,CustomClass}) => (
    <p className={`${CustomClass} text-[#202020] text-center font-cinzel text-[18px] font-medium leading-[30px] tracking-[1px] capitalize`}>{children}</p>
  );
  export const  Pera2 = ({ children ,CustomClass}) => (
    <p className={`${CustomClass} text-[#202020] text-justify font-montserrat text-[14px] font-normal leading-[30px] tracking-[1px] capitalize`}>{children}</p>
  );
  export const CustomDiv = ({ children, CustomClass }) => (
    <div className={` flex items-center justify-start flex-col  ${CustomClass}`}>
      {children}
    </div>
  );
  


