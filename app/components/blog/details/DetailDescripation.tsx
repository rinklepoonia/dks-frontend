import Image from "next/image";
import React from "react";
import Paragraph from "../../common/Paragraph";
import { blogsProp } from "@/app/utils/type";
import { getSiteUrl } from "@/app/utils/commonFun";

const DetailDescripation = ({ detailBlog }: { detailBlog: blogsProp }) => {
  return (
    <div className="py-10 ">
      <div className="max-w-[1360px] mx-auto px-5">
        <div className="space-y-6">
          {detailBlog?.blogDetails?.map((obj, i) => (
            <div key={i}>
              <h5 className="text-4xl text-black">{obj.title}</h5>
              {obj.image?.url && (
              <Image
                alt="descripation img"
                width={700}
                height={464}
                src={getSiteUrl(obj.image.url)}
              />
              )}
              <Paragraph className="max-w-[500px]">{obj.description}</Paragraph>
              <ul>
                <li
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: obj.detail }}
                ></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailDescripation;
