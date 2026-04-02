import { BLOG_DATA_LIST } from '@/app/utils/helper'
import Image from 'next/image'
import React from 'react'

const DetailHeader = () => {
  return (
    <div>
       {BLOG_DATA_LIST.map((obj,index) => (
        <div key={index}>
   <h4 className='text-[64px] '>{obj.title}</h4>
    <Image width={1024} height={500} className='w-full h-[500px] object-cover object-top' src={obj.image} alt="blogimg" />
     <p className="pt-3 text-xl">{obj.description}</p>
        </div>
       ))

       }
    </div>
  )
}

export default DetailHeader