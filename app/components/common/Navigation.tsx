import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navgationDataGet } from '../../utils/api/apiList'
import { getSiteUrl } from '@/app/utils/commonFun'

const Navigation = async () => {
   const  navbar = await navgationDataGet()
    console.log(navbar , "checking data")
    const navbarDetails = navbar.data

  return (
    <div className='max-w-[1320px] mx-auto px-5'>
       <div className='py-5'>
         <Link href="#"><Image   loading="eager" width="193" height="41" src={getSiteUrl(navbarDetails.header.logo.url)} alt="nav-logo"/></Link>
         <p className="text-black">{navbarDetails.vvv}</p>
       </div>
    </div>
  )
}

export default Navigation