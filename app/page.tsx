import Image from "next/image";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";

export default function Home() {
  return (
    <div>
      <Hero />
      <Trusted />
    </div>
  );
}
