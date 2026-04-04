import React from "react";
import ContactForm from "../components/contact-us/ContactForm";
import { getContactData } from "../utils/api/apiList";

const page = async () => {
  const contatcData = await getContactData();
  const contactHourDetail = contatcData.data.hourofOperation;
  return (
    <div>
      <ContactForm contactHourDetail={contactHourDetail} />
    </div>
  );
};

export default page;
