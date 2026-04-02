import { BLOG_DATA_LIST } from '@/app/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogData = () => {
  return (
    <div>
         <div className="py-25">
              <div className="max-w-[1360px] px-5 mx-auto">
                <div className="grid grid-cols-3 gap-4">
                  {BLOG_DATA_LIST.map((obj, index) => (
                    <Link href={"/blog/slug"} key={index} className="border border-black rounded-xl p-5">
                      <Image width={364} height={300} src={obj.image} alt="blogimg" />
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