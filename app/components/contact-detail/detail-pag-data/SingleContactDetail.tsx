"use client";
import React, { useState } from "react";
import Link from "next/link";
import { singleDetail } from "@/app/utils/type";
import Input from "../../common/Input";
import Textarea from "../../common/Textarea";
import { deleteFormData, postFormDataUpdate } from "@/app/utils/api/apiList";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const SingleContactDetail = ({
  detailsingle,
}: {
  detailsingle: singleDetail;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: detailsingle.name || "",
    email: detailsingle.email || "",
    phoneNumber: detailsingle.phoneNumber || "",
    message: detailsingle.message || "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await postFormDataUpdate(
        { data: { ...formData } },
        detailsingle.documentId,
      );
      toast.success("Updated successfully!");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

   const handelDelete = async (id:string) => {
       const confirmDelete = confirm("Are you sure to delete entry")
         if (!confirmDelete) return;
       try {
         await deleteFormData(id)
         toast.success("Entery delete succussfully")
         router.push("/contact-detail")
       } catch (error) {
        toast.error("error")
       }
  };
  return (
    <section className="bg-[#F4F5F0] py-16 min-h-[calc(100vh-100px)]">
      <div className="max-w-[800px] px-5 mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#61A146]">Contact Details</h2>
          <Link
            href="/contact-detail"
            className="font-semibold text-sm text-[#61A146] border border-[#61A146] py-2 px-6 rounded-full hover:bg-[#61A146] hover:text-white transition-all duration-300"
          >
            &larr; Back
          </Link>
        </div>

        <div className="bg-white border border-[#61A146] rounded-2xl shadow-sm p-8 lg:p-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">
                Name
              </span>
              {/* <span className="text-lg text-gray-800 font-medium capitalize">
                {detailsingle.name}
              </span> */}
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={detailsingle.name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">
                Email
              </span>
              {/* <span className="text-lg text-gray-600">
                {detailsingle.email}
              </span> */}
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-2">
              <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">
                Phone Number
              </span>
              {/* <span className="text-lg text-gray-800 font-medium">
                {detailsingle.phoneNumber}
              </span> */}
              <Input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone"
                type="tel"
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-2">
              <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">
                Message
              </span>
              {/* <div className="bg-[#F4F5F0] p-4 md:p-6 rounded-xl mt-2 text-gray-700 whitespace-pre-wrap leading-relaxed shadow-inner border border-gray-100">
                {detailsingle.message}
              </div> */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message..."
              />
            </div>
            <button 
              disabled={isLoading}
              type="submit"
              className={`font-semibold text-sm leading-[160%] text-[#FAFAFA] bg-[#19AE1A] py-3 px-8 rounded-xl cursor-pointer hover:bg-transparent hover:text-[#19AE1A] border border-transparent hover:border-[#19AE1A] shadow-sm transition-all ease-linear duration-300 text-center flex items-center justify-center ${isLoading && "opacity-30"}`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2 text-center">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin text-center"></span>
                  Saving...
                </span>
              ) : (
                "Save"
              )}
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
            {/* <button className="font-semibold text-sm leading-[160%] text-[#19AE1A] bg-transparent py-3 px-8 rounded-xl cursor-pointer hover:bg-[#19AE1A] hover:text-[#FAFAFA] border border-[#19AE1A] shadow-sm transition-all ease-linear duration-300">
              Edit Details
            </button> */}
            {/* <button
              type="submit"
              className="font-semibold text-sm leading-[160%] text-[#FAFAFA] bg-[#19AE1A] py-3 px-8 rounded-xl cursor-pointer hover:bg-transparent hover:text-[#19AE1A] border border-transparent hover:border-[#19AE1A] shadow-sm transition-all ease-linear duration-300"
            >
              Save
            </button> */}
             <button type="button"
             onClick = {() => handelDelete(detailsingle.documentId)}
                        className="font-semibold text-sm leading-[160%] text-[#FAFAFA] bg-[#19AE1A] py-2 px-6 rounded-xl cursor-pointer hover:bg-transparent hover:text-[#19AE1A] border border-transparent hover:border-[#19AE1A] transition-all ease-linear duration-300"
                      >
                        DELETE
                      </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleContactDetail;
