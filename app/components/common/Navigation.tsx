"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getSiteUrl } from "@/app/utils/commonFun";
import Button from "./Button";
import Icons from "./Icons";
interface NavLink {
 header:{
  logo :{
    url:string;
  };
  navLinks : {
    url:string;
    label:string;
  }[],
    navCta : {
    title:string;
  };
 }
}

const Navigation =  ({navbarDetails}:{navbarDetails:NavLink}) => {
  const [navOpen , setNavOpen] = useState(false);
  useEffect(() => {
    if(navOpen){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
    return()=> {
      document.body.style.overflow = 'auto';
    }
  }, [navOpen])
  return (
    <div className="overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 py-5 flex md:items-center justify-between w-full">
        <Link href="#">
          <Image
            loading="eager"
            width="193"
            height="41"
            src={getSiteUrl(navbarDetails.header.logo.url)}
            alt="nav-logo"
          />
        </Link>

        
          <ul className={`flex md:flex-row max-md:fixed max-md:top-0  max-md:min-h-screen max-md:justify-center max-md:z-20 max-md:bg-red-500 flex-col  items-center gap-5 max-md:w-full ${navOpen ? 'max-md:right-0' : 'max-md:right-[-100%]'} transition-all duration-300 ease-linear`}>
            {navbarDetails?.header?.navLinks?.map((obj,i) => (
                <li key={i} >
                 <Link onClick={() => setNavOpen(false)} href={obj.url}>
                <p>{obj.label}</p>
                </Link>
              </li>
            ))}
             <li> <Button className="md:hidden block">{navbarDetails?.header?.navCta?.title}</Button></li>
          </ul>
            <button onClick={() => setNavOpen(!navOpen)} className="md:hidden block z-[100] cursor-pointer"> {navOpen ? <Icons icon="closeNav" /> : <Icons icon="openNav"/>}</button>
                 <Button className="md:block hidden">{navbarDetails?.header?.navCta?.title}</Button>
       
      </div>
    </div>
  );
};

export default Navigation;
