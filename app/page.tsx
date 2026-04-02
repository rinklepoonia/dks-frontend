import Image from "next/image";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import LovedBySingapore from "./components/LovedBySingapore";
import { loveByData } from "./utils/api/apiList";
export default async function Home() {
    const loveData = await loveByData();
    console.log(loveByData , "loveByData")
    const loveByDetails = loveData.data
  return (
    <div>
      <Hero />
      <Trusted />
      <LovedBySingapore loveByDetails={loveByDetails}/>
    </div>
  );
}
