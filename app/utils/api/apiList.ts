import { API_URLS } from "./apiUrls"
import { handleApiRequest, POST_METHOD } from "./fetchResponse"
/* eslint-disable @typescript-eslint/no-explicit-any */
export const navgationDataGet =  async(data:any) => {
     await handleApiRequest ({
         method:POST_METHOD ,
         url : API_URLS.LANDING,
         data
     })
}