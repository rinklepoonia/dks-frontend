import SingleContactDetail from '@/app/components/contact-detail/detail-pag-data/SingleContactDetail'
import { getContactFormData } from '@/app/utils/api/apiList'
import { slugify } from '@/app/utils/commonFun'
import { singleDetail } from '@/app/utils/type'
import React from 'react'

const page = async ({params} :{params:{slug:string}}) => {
  const {slug} = await params
  const  detail = await getContactFormData(slug)
   const singleDetail = detail.data
 
  return (
    <div>
      <SingleContactDetail detailsingle={singleDetail}/>
    </div>
  )
}

export default page