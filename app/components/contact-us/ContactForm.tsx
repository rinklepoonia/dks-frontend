import React from 'react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';

const ContactForm = () => {
  return (
    <section className="bg-[#F4F5F0] py-16">
      <div className="max-w-[1360px] px-5 mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
          
          {/* Info Card */}
          <div className="bg-[#F4F5F0] border border-[#61A146] rounded-2xl p-6 lg:p-8 flex flex-col h-full">
            {/* Map Placeholder */}
            <div className="w-full h-[250px] sm:h-[300px] xl:h-[350px] mb-8 rounded-xl overflow-hidden shadow-sm bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.912!2d103.882!3d1.353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da177e77b47b85%3A0xe104db8!2sDefu%20Industrial%20Estate!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <h2 className="text-3xl font-bold text-[#61A146] mb-6">Hour of Operation</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Monday to Friday</h3>
                  <p className="text-gray-500 mt-1">9am to 6pm</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Saturday</h3>
                  <p className="text-gray-500 mt-1">9am to 6pm</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Sunday & P/H</h3>
                  <p className="text-gray-500 mt-1">Closed</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Location</h3>
                  <p className="text-gray-500 mt-1 leading-relaxed">
                    Defu Industrial Estate<br/>
                    Address: 37 Defu Lane 10,<br/>
                    #01/41, Singapore 539214
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Contact us</h3>
                  <p className="text-gray-500 mt-1">62844186</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-[#F4F5F0] border border-[#61A146] rounded-2xl p-6 lg:p-8 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl font-bold text-[#61A146] mb-2">Contact Us</h2>
              <p className="text-gray-600 mb-8">Fastest way to get your quote send us photos directly.</p>

              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                </div>
                <Input placeholder="Phone" type="tel" />
                <Textarea placeholder="Message..." />
              </form>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button type="button" className="w-full bg-[#61A146] hover:bg-[#528d3a] text-white font-medium py-[14px] px-6 rounded-full transition-colors shadow-sm">
                Send
              </button>
              <button type="button" className="w-full bg-[#F4F5F0] border border-[#61A146] text-[#61A146] hover:bg-[#eff1ea] font-medium flex items-center justify-center gap-2 py-[14px] px-6 rounded-full transition-colors shadow-sm">
                <WhatsappIcon />
                Start a WhatsApp Chat
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#61A146">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default ContactForm;