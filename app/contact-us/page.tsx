import React from "react";
import ContactForm from "../components/contact-us/ContactForm";
import { getContactData, getContactFormData } from "../utils/api/apiList";

const page = async () => {
  // get api
  const contatcData = await getContactData();
  const contactHourDetail = contatcData.data.hourofOperation;
  // for form post api
  // try {
  //   const contactForm = await getContactFormData()
  //        const contactFormDetail = contactForm.data
  // } catch(error){
      
  // }
  return (
    <div>
      <ContactForm contactHourDetail={contactHourDetail}  />
    </div>
  );
};

export default page;
