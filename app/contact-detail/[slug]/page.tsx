import SingleContactDetail from '@/app/components/contact-detail/detail-pag-data/SingleContactDetail'
import { getContactFormData } from '@/app/utils/api/apiList'
import { slugify } from '@/app/utils/commonFun'
import { singleDetail } from '@/app/utils/type'
import React from 'react'

const page = async ({params} :{params:{slug:string}}) => {
  const {slug} = await params
  const  detail = await getContactFormData()
   const singleDetail = detail.data
  const detailsingle = singleDetail.find((obj:singleDetail) => slugify(obj.documentId) === slug)

  return (
    <div>
      <SingleContactDetail detailsingle={detailsingle}/>
    </div>
  )
}

export default page