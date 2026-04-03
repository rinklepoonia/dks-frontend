import DetailDescripation from '@/app/components/blog/details/DetailDescripation'
import DetailHeader from '@/app/components/blog/details/DetailHeader'
import { getBlogs } from '@/app/utils/api/apiList'
import { slugify } from '@/app/utils/commonFun'
import { BLOG_DATA_LIST } from '@/app/utils/helper'
import { blogsProp } from '@/app/utils/type'
import React from 'react'

const page =  async ({params} : {params:{slug:string}}) => {
    const {slug} = await params

    const blogData = await getBlogs()
     const blogDetails = blogData.data || []

    const detailBlog = blogDetails.find(
      (obj:blogsProp) => slugify(obj.slug) === slug
    )

    if (!detailBlog) return <div className="pt-8 text-center">Blog not found</div>
  return (
    <div>
        <DetailHeader detailBlog={detailBlog}/>
          <DetailDescripation detailBlog={detailBlog}/>
    </div>
  )
}

export default page