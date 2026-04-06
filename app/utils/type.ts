export interface blogsProp{
  title : string ,
  description :string,
   slug:string,
  thumbnail: {
    url:string,
  },
  blogDetails :{
     title : string ,
  description :string,
   image: {
    url:string,
  },
  detail:string[]
  }[]
}
export interface contactProps {
  title:string,
  infoList :{
    title:string,
    value:string,
    url:string
  }[],
  
}
export interface singleDetail {
   id: number;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  createdAt: string;
documentId :string

}