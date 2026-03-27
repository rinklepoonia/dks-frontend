import { API_URLS } from "./apiUrls"
import { GET_METHOD, handleApiRequest, POST_METHOD } from "./fetchResponse"
/* eslint-disable @typescript-eslint/no-explicit-any */
export const navgationDataGet =  async(data:any) => {
     return await handleApiRequest ({
         method:GET_METHOD ,
         url : API_URLS.LANDING,
         data
     })
}