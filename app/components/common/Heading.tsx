import React from 'react'

interface headingProps  {
    children : React.ReactNode
}

const Heading = ({children}:headingProps) => {
  return (
   <h2 className='font-semibold text-[48px] leading-[120%] text-[#010101]'>
    {children}
   </h2>
  )
}

export default Heading