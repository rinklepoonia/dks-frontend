import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navgationDataGet } from '../../utils/api/apiList'

const Navigation = async () => {
    let data = null;
    try {
          data = await navgationDataGet({data: {...data}})
    } catch(error) {
       console.error("Navigation fetch error:", error);
    }
    console.log(data , "checking data")

  return (
    <div className='max-w-[1320px] mx-auto px-5'>
       <div className='py-5'>
         <Link href="#"><Image   loading="eager" width="193" height="41" src={data.logo} alt="nav-logo"/></Link>
       </div>
    </div>
  )
}

export default Navigation