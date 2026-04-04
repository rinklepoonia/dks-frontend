import { API_URLS } from "./apiUrls"
import { GET_METHOD, handleApiRequest, POST_METHOD, PUT_METHOD } from "./fetchResponse"
/* eslint-disable @typescript-eslint/no-explicit-any */
export const navgationDataGet =  async() => {
     return await handleApiRequest ({
         method:GET_METHOD ,
         url : API_URLS.GLOBAL +'?populate=header.navLinks&populate=header.logo&populate=header.navCta',
     })
}
export const homeHeroData = async() => {
    return await handleApiRequest ({
        method:GET_METHOD ,
        url : API_URLS.LANDING_PAGE + '?populate=hero&populate=hero.cta&populate=hero.review&populate=hero.review.icon',
    })
}
export const homeTrustedData = async() => {
    return await handleApiRequest({
        method:GET_METHOD ,
        url : API_URLS.LANDING_PAGE + '?populate=trusted&populate=trusted.logos',
    })
}
export const loveByData = async() => {
    return await handleApiRequest({
         method:GET_METHOD ,
        url : API_URLS.LANDING_PAGE + '?populate=loveBy&populate=loveBy.testimonials&populate=loveBy.testimonials.profileImage&populate=loveBy.testimonials.rating&populate=loveBy.testimonials.socialIcon' 
    })
}

export const getBlogs = async() => {
    return await handleApiRequest ({
         method:GET_METHOD ,
            // Strapi sorting by publish date in ascending order (oldest first)
            // Adjust field name (publishedAt/createdAt) according to your CMS schema
            url : API_URLS.BLOG_PAGE + '?populate=thumbnail&sort=publishedAt:desc&populate=blogDetails&populate=blogDetails.image'
    })
}
export const getContactData = async() => {
    return await handleApiRequest ({
         method:GET_METHOD ,
            url : API_URLS.CONTACT_PAGE +'?populate=hourofOperation&populate=hourofOperation.infoList'
    })
}
export const postContactFormData = async(data:any) => {
    return await handleApiRequest ({
         method:POST_METHOD  ,
            url : API_URLS.CONTACT_fORM_DATA ,
            data
    })
}
export const getContactStaticData = async() => {
    return await handleApiRequest ({
             method:GET_METHOD  ,
            url : API_URLS.CONTACT_DETAIL_STATIC_DATA ,
            
    })
}
export const getContactFormData = async() => {
    return await handleApiRequest ({
             method:GET_METHOD  ,
            url : API_URLS.CONTACT_fORM_DATA ,
            
    })
}
export const postContactFormDataUpdate = async(data:any , id:string) => {
    return await handleApiRequest ({
            method:PUT_METHOD  ,
            url : API_URLS.CONTACT_fORM_DATA + `/${id}`,
            data
    })
}
