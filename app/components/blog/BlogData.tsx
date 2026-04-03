import { getBlogs } from '@/app/utils/api/apiList'
import { getSiteUrl, slugify } from '@/app/utils/commonFun'
import { blogsProp } from '@/app/utils/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogData = async() => {
  const blogData = await getBlogs()
  const blogDetails = blogData.data || []

  // Client-side fallback sort if publish date exists in response
  // const sortedBlogs = [...blogDetails].sort((a: any, b: any) => {
  //   const aDate = a?.publishedAt ? new Date(a.publishedAt).getTime() : 0
  //   const bDate = b?.publishedAt ? new Date(b.publishedAt).getTime() : 0
  //   return bDate - aDate
  // })

  return (
    <div>
         <div className="py-25">
              <div className="max-w-[1360px] px-5 mx-auto">
                <div className="grid grid-cols-3 gap-4">
                  {blogDetails.map((obj:blogsProp, index:number) => (
                    <Link href={`/blog/${slugify(obj.slug)}`} key={index} className="border border-black rounded-xl p-5">
                      <Image width={364} height={300} src={getSiteUrl(obj.thumbnail.url)} alt="blogimg" />
                      <h3 className="pt-5">{obj.title}</h3>
                      <p className="pt-3">{obj.description}</p>
                      <button className="text-red-300 font-medium pt-4 cursor-pointer">
                        Learn More
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
    </div>
  )
}

export default BlogData