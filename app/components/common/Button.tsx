import React from 'react'
interface ButtonProps {
      children: React.ReactNode;
}
const Button = ({children}:ButtonProps) => {
  return (
   <button className='font-semibold text-sm leading-[160%] text-[#FAFAFA] bg-[#19AE1A] py-3 px-6 rounded-[243px] cursor-pointer hover:bg-transparent hover:text-[#19AE1A] border border-transparent hover:border-[#19AE1A] transition-all ease-linear duration-300'>{children}</button>
  )
}

export default Button