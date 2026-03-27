import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    try{
          await handleApiRequest({data: {...data}})
    }catch(error){
       
    }

  return (
    <div className='max-w-[1320px] mx-auto px-5'>
       <div className='py-5'>
         <Link href="#"><Image   loading="eager" width="193" height="41" src="/assets/images/webp/logo.webp" alt="nav-logo"/></Link>
       </div>
    </div>
  )
}

export default Navigation