import { getContactFormData, getContactStaticData } from "@/app/utils/api/apiList";
import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import { slugify } from "@/app/utils/commonFun";
import { singleDetail } from "@/app/utils/type";

// const mockContactData = [
//   {
//     id: 3,
//     name: "Rinkle Poonia",
//     email: "rinklepoonia889@gmail.com",
//     phoneNumber: "3,333,333,333",
//     message: "-",
//     createdAt: "Saturday, April 4, 2026 at 10:49 AM",
//   },
//   {
//     id: 1,
//     name: "dsad",
//     email: "asd@gmail.com",
//     phoneNumber: "1,234,567,898",
//     message: "ds",
//     createdAt: "Saturday, April 4, 2026 at 10:05 AM",
//   },
//   {
//     id: 5,
//     name: "radha",
//     email: "rinklepoonia889@gmail.com",
//     phoneNumber: "2,222,222,222",
//     message: "-",
//     createdAt: "Saturday, April 4, 2026 at 11:52 AM",
//   },
// ];

 
// interface detailListProps{
//   id: number;
//   name: string;
//   email: string;
//   phoneNumber: string;
//   message: string;
//   createdAt: string;
// }
const ContactInfoList = async() => {
    const formList =  await getContactFormData();
     const detailFormList = formList.data
    const staticData =  await getContactStaticData();
    const  allStaticData = staticData.data
  return (
    <section className="bg-[#F4F5F0] py-16 min-h-screen">
      <div className="max-w-[1360px] px-5 mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#61A146] mb-2">
             {allStaticData.title}
            </h2>
            <p className="text-gray-600">
              {allStaticData.description}
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#61A146] rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-[#eff1ea] border-b border-[#61A146]">
                  <th className="py-4 px-6 font-semibold text-[#61A146] text-sm uppercase tracking-wider w-[60px]">
                    ID
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#61A146] text-sm uppercase tracking-wider">
                    NAME
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#61A146] text-sm uppercase tracking-wider">
                    EMAIL
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#61A146] text-sm uppercase tracking-wider">
                    PHONENUMBER
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#61A146] text-sm uppercase tracking-wider">
                    MESSAGE
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#61A146] text-sm uppercase tracking-wider">
                   EDIT OPTION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {detailFormList?.map((row:singleDetail) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#F4F5F0]/50 transition-colors group"
                  >
                    <td className="py-4 px-6 text-gray-800 font-medium">
                      {row.id}
                    </td>
                    <td className="py-4 px-6 text-gray-800 font-medium">
                      {row.name}
                    </td>
                    <td className="py-4 px-6 text-gray-600">{row.email}</td>
                    <td className="py-4 px-6 text-gray-600">
                      {row.phoneNumber}
                    </td>
                    <td className="py-4 px-6 text-gray-600 max-w-[200px] truncate group-hover:whitespace-normal group-hover:break-words transition-all">
                      {row.message}
                    </td>
                   <td className="py-4 px-6">
                     <Link href={`/contact-detail/${slugify(row.documentId)}`} className="font-semibold text-sm leading-[160%] text-[#FAFAFA] bg-[#19AE1A] py-2 px-6 rounded-xl cursor-pointer hover:bg-transparent hover:text-[#19AE1A] border border-transparent hover:border-[#19AE1A] transition-all ease-linear duration-300">EDIT</Link>
                   </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {detailFormList?.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No contact submissions found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoList;