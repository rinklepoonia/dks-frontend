import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navgationDataGet } from "../../utils/api/apiList";
import { getSiteUrl } from "@/app/utils/commonFun";
import Button from "./Button";
interface NavLink {
  url:string;
  label:string;
  id:number
  }

const Navigation = async () => {
  const navbar = await navgationDataGet();
  console.log(navbar, "checking data");
  const navbarDetails = navbar.data;
console.log(navbarDetails?.header , 'btnbtnbtnbtn')
  return (
    <div className="">
      <div className="max-w-[1320px] mx-auto px-5 py-5 flex items-center justify-between w-full">
        <Link href="#">
          <Image
            loading="eager"
            width="193"
            height="41"
            src={getSiteUrl(navbarDetails.header.logo.url)}
            alt="nav-logo"
          />
        </Link>

        <ul className="flex items-center gap-5">
          {navbarDetails?.header?.navLinks?.map((obj:NavLink,i:number) => (
            <li key={obj.id || i}>
               <Link  href={obj.url}>
              <p>{obj.label}</p>
              </Link>
            </li>
          ))}
        </ul>

       <Button>{navbarDetails?.header?.navCta?.title}</Button>
      </div>
    </div>
  );
};

export default Navigation;
