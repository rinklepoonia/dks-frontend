"use client";
import React from "react";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Icons from "./common/Icons";
import Image from "next/image";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { getSiteUrl } from "../utils/commonFun";
/* eslint-disable @typescript-eslint/no-explicit-any */
interface loveByProps {
  loveBy: {
    title: string;
    description: string;
    testimonials: {
      description: string;
      author: string;
      role: string;
      profileImage: {
        url:string
      };
      rating: {
        url:string
      };
      socialIcon: {
        url:string
      };
    }[];
  };
}
const LovedBySingapore = ({
  loveByDetails,
}: {
  loveByDetails: loveByProps;
}) => {
  return (
    <div className="py-20">
      <div className="max-w-[1360px] px-5 mx-auto">
        <div className="flex gap-5 mb-10">
          <div className="w-1/2">
            <Heading>{loveByDetails.loveBy.title}</Heading>
          </div>
          <div className="w-1/2">
            <Paragraph>{loveByDetails.loveBy.description}</Paragraph>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {loveByDetails?.loveBy?.testimonials.map((obj, index) => (
            <SwiperSlide
              key={index}
              className="border border-[#01010129] p-5 rounded-md"
            >
              <Icons icon="topCommaa" />
              <Paragraph className="mt-4">{obj.description}</Paragraph>
              <div className="flex justify-between">
                <div className="mt-4">
                  <Paragraph>{obj.author}</Paragraph>
                  <Paragraph>{obj.role}</Paragraph>
                </div>
                <Image
                  width={60}
                  height={60}
                  src={getSiteUrl(obj.profileImage.url)}
                  alt="author-image"
                />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  className="size-6"
                  width={24}
                  height={24}
                  src={getSiteUrl(obj.socialIcon.url)}
                  alt="social-icon"
                />
                <Image width={116} height={20} src={getSiteUrl(obj.rating.url)} alt="rating" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LovedBySingapore;
