import Image from 'next/image'
import { homeHeroData } from '../utils/api/apiList'
import { getSiteUrl } from '../utils/commonFun'

// Image assets from Figma
const imgHeroSection = "https://www.figma.com/api/mcp/asset/118f494c-864d-4fcd-967d-76a1e305a791"
const imgImage562 = "https://www.figma.com/api/mcp/asset/d1476597-6710-499b-b237-d6d4e8a8d935"
const imgAttachment41 = "https://www.figma.com/api/mcp/asset/09ef57df-9d8c-4fb4-9ca3-a342d315bf41"
const imgAttachment52 = "https://www.figma.com/api/mcp/asset/739bc3c1-3884-4f7c-aa65-625cc0296256"
const imgVector1 = "https://www.figma.com/api/mcp/asset/e817c784-30a5-407b-83ca-c8bf2c6b4df3"
const imgVector4 = "https://www.figma.com/api/mcp/asset/f94e7064-345a-42a6-b35c-e0befa297dc8"
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/a3247f1f-69d4-4e3e-8721-f5851229c73a"
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/28d50470-db82-48a6-8ce2-3787250b6c27"
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/68c3891f-bf66-4696-8ded-ccac2becf4a1"
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/93ae766d-eaf1-4860-87a9-dab3bc4bbc03"
const imgFrame6 = "https://www.figma.com/api/mcp/asset/9bf5f276-dedb-4cb7-b2d4-ac86879e9037"
const imgLogosWhatsappIcon = "https://www.figma.com/api/mcp/asset/5a4d8db8-b531-4f33-855d-61bcecc1a37b"
const imgVector2 = "https://www.figma.com/api/mcp/asset/46d4292e-48e3-4dbc-818a-b6d9cdd0afb9"
const imgGroup2085662856 = "https://www.figma.com/api/mcp/asset/f75a2672-87b1-498c-af29-dc244e24e06e"
const imgImage572 = "https://www.figma.com/api/mcp/asset/08b59e6b-328c-4636-b182-614b46775316"

const Hero = async() => {
      const heroData = await homeHeroData()
      console.log(heroData , 'heroDta check')
      const heroDetail = heroData.data
      console.log(heroDetail , 'heroDetail check')
  return (
    <section className=" w-full min-h-[600px] md:min-h-[700px] lg:h-[800px] bg-light-white overflow-hidden py-12 md:py-16 lg:py-0">
      <div className="max-w-[1320px] px-5 mx-auto h-full relative">
        <div className="absolute w-full max-w-[1160px] h-[300px] md:h-[400px] lg:h-[547px] left-1/2 -translate-x-1/2 top-[300px] md:top-[350px] lg:top-[414px] bg-cream blur-[62px] -z-10" />
        <div className="relative lg:absolute lg:left-[150px] lg:top-[201px] flex flex-col gap-4 pt-8 lg:pt-0 z-10">
          {/* Google Rating */}
          <div className="flex flex-col gap-1.5">
            <p className="text-light-black text-sm md:text-base font-medium">Highly Rated on Google</p>
            <div className="flex items-center gap-3">
           
              <Image width={32}
                height={32} alt="Google" src={getSiteUrl(heroDetail.hero.review.icon.url)}/>
              <img
                alt="5 stars"
                className="w-[120px] md:w-[150px] h-[24px] md:h-[30px]"
                src={imgFrame6}
                width={150}
                height={30}
              />
            </div>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col gap-6 md:gap-8 mt-2 md:mt-4">
            <div className="flex flex-col gap-3 md:gap-4 max-w-full lg:w-[431px]">
              <h1 className="text-custom-3xl md:text-custom-4xl lg:text-5xl leading-120 font-semibold">
               {heroDetail.hero.title}
              </h1>
              <p className="text-grey text-sm md:text-base leading-160 max-w-full lg:w-[429px]">
                {heroDetail.hero.descripation}
              </p>
            </div>

            {/* WhatsApp Button */}
            <button className="flex items-center justify-center gap-2.5 px-6 md:px-7 py-2.5 md:py-3 bg-green rounded-full hover:opacity-90 transition-opacity w-fit">
              <img
                alt="WhatsApp"
                className="w-5 h-5 md:w-6 md:h-6"
                src={imgLogosWhatsappIcon}
                width={24}
                height={24}
              />
              <span className="text-light-white text-sm md:text-base font-semibold">{heroDetail.hero.cta.title}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
