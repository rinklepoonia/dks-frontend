import { getSiteUrl } from '@/app/utils/commonFun'
import { BLOG_DATA_LIST } from '@/app/utils/helper'
import { blogsProp } from '@/app/utils/type'
import Image from 'next/image'
import React from 'react'


const DetailHeader = ({detailBlog}:{detailBlog:blogsProp}) => {
  return (
    <div>
        <div className='max-w-[1360px] mx-auto px-5'>
   <h4 className='text-[64px] '>{detailBlog.title}</h4>
    <Image width={1024} height={500} className='w-full h-[500px] object-cover object-top' src={getSiteUrl(detailBlog.thumbnail.url)} alt="blogimg" />
     <p className="pt-3 text-xl">{detailBlog.description}</p>
        </div>
    </div>
  )
}

export default DetailHeader