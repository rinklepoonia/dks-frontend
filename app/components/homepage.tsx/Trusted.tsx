import { homeTrustedData } from "@/app/utils/api/apiList";
import { getSiteUrl } from "@/app/utils/commonFun";
import Image from "next/image";

interface logosProps {
  url: string;
}
[];

const Trusted = async () => {
  const trustData = await homeTrustedData();
  const trustDetail = trustData.data;
  return (
    <section className="w-full py-12 md:py-16  overflow-hidden max-w-[1320px] px-5 mx-auto">
      <div className="max-w-[1320px] px-5 mx-auto">
        <p className="text-light-grey text-xl font-semibold italic text-center mb-8">
          {trustDetail.trusted.heading}
        </p>

        {/* Marquee Container */}
        <div className="relative flex">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {trustDetail.trusted.logos.map(
              (logo: logosProps, index: number) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center min-w-[180px] h-[80px] opacity-90"
                >
                  <Image
                    src={getSiteUrl(logo.url)}
                    alt="trusted logo"
                    width="180"
                    height="80"
                    className="object-contain"
                  />
                </div>
              ),
            )}
          </div>
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {trustDetail.trusted.logos.map(
              (logo: logosProps, index: number) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center min-w-[180px] h-[80px] opacity-90"
                >
                  <Image
                    src={getSiteUrl(logo.url)}
                    alt="trusted logo"
                    width="180"
                    height="80"
                    className="object-contain"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
