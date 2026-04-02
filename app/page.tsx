import Image from "next/image";
import Trusted from "./components/homepage.tsx/Trusted";
import LovedBySingapore from "./components/homepage.tsx/LovedBySingapore";
import BlogCards from "./components/homepage.tsx/BlogCards";
import Hero from "./components/homepage.tsx/Hero";
import { loveByData } from "./utils/api/apiList";
export default async function Home() {
  const loveData = await loveByData();
  console.log(loveByData, "loveByData");
  const loveByDetails = loveData.data;
  return (
    <div>
      <Hero />
      <Trusted />
      <LovedBySingapore loveByDetails={loveByDetails} />
      <BlogCards />
    </div>
  );
}
