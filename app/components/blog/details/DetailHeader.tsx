import { BLOG_DATA_LIST } from '@/app/utils/helper'
import Image from 'next/image'
import React from 'react'

const DetailHeader = ({detailBlog}:{detailBlog:any}) => {
  return (
    <div>
        <div>
   <h4 className='text-[64px] '>{detailBlog.title}</h4>
    <Image width={1024} height={500} className='w-full h-[500px] object-cover object-top' src={detailBlog.image} alt="blogimg" />
     <p className="pt-3 text-xl">{detailBlog.description}</p>
        </div>
      
    </div>
  )
}

export default DetailHeader