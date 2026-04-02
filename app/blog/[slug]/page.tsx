import DetailHeader from '@/app/components/blog/details/DetailHeader'
import { slugify } from '@/app/utils/commonFun'
import { BLOG_DATA_LIST } from '@/app/utils/helper'
import React from 'react'

const page =  async ({params} : {params:{slug:string}}) => {
    const {slug} = await params
    const detailBlog = BLOG_DATA_LIST.find(
      (obj) => slugify(obj.title) === slug
    )
    if (!detailBlog) return <div className="pt-8 text-center">Blog not found</div>
  return (
    <div>
        <DetailHeader detailBlog={detailBlog}/>
    </div>
  )
}

export default page