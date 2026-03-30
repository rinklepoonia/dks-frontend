import Image from 'next/image'

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

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:h-[800px] bg-light-white overflow-hidden py-12 md:py-16 lg:py-0">
      <div className="max-w-[1320px] px-5 mx-auto h-full relative">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
          <Image
            alt=""
            className="absolute w-full h-[119.65%] top-[-6.41%] left-0 object-cover"
            src={imgHeroSection}
            width={1920}
            height={1080}
            priority
          />
        </div> */}

        {/* Blur Effect */}
        <div className="absolute w-full max-w-[1160px] h-[300px] md:h-[400px] lg:h-[547px] left-1/2 -translate-x-1/2 top-[300px] md:top-[350px] lg:top-[414px] bg-cream blur-[62px] -z-10" />

        {/* Decorative Elements - Top Left - Hidden on mobile */}
        {/* <Image
          alt=""
          className="hidden lg:block absolute w-[62px] h-[62px] left-[43px] top-[160px]"
          src={imgVector1}
          width={62}
          height={62}
        />
        <Image
          alt=""
          className="hidden lg:block absolute w-[35px] h-[35px] left-[87px] top-[201px]"
          src={imgVector4}
          width={35}
          height={35}
        /> */}

        {/* Decorative Circles - Top Right - Hidden on mobile/tablet */}
        <div className="hidden xl:block absolute left-[1394.21px] top-[-520px] w-[960px] h-[960px] -scale-y-100 rotate-180 -z-10">
          {/* <Image
            alt=""
            className="w-full h-full"
            src={imgEllipse3}
            width={960}
            height={960}
          /> */}
        </div>
        <div className="hidden xl:block absolute left-[1306.21px] top-[-496px] w-[960px] h-[960px] -scale-y-100 rotate-180 -z-10">
          {/* <Image
            alt=""
            className="w-full h-full"
            src={imgEllipse3}
            width={960}
            height={960}
          /> */}
        </div>
        <div className="hidden xl:block absolute left-[1217px] top-[-709px] w-[1203.206px] h-[1203.206px] -scale-y-100 rotate-[-162.59deg] -z-10">
          {/* <Image
            alt=""
            className="w-[960px] h-[960px]"
            src={imgEllipse4}
            width={960}
            height={960}
          /> */}
        </div>

        {/* 12-Month Warranty Badge - Repositioned for responsive */}
        <div className="hidden lg:block absolute right-4 xl:right-[100px] bottom-4 lg:bottom-[43px]">
          {/* <Image
            alt=""
            className="w-[100px] lg:w-[127px] h-[100px] lg:h-[127px]"
            src={imgEllipse2}
            width={127}
            height={127}
          />
          <Image
            alt=""
            className="absolute w-[57px] lg:w-[72.417px] h-[57px] lg:h-[72.417px] left-[21.5px] lg:left-[27.56px] top-[21.5px] lg:top-[27.56px]"
            src={imgEllipse5}
            width={72}
            height={72}
          /> */}
          <div className="absolute left-[38px] lg:left-[48px] top-[35px] lg:top-[44px] text-light-white text-[13px] lg:text-base font-medium text-center transform rotate-[155.7deg]">
            12-Month Warranty
          </div>
        </div>

        {/* Main Content - Responsive positioning */}
        <div className="relative lg:absolute lg:left-[150px] lg:top-[201px] flex flex-col gap-4 pt-8 lg:pt-0 z-10">
          {/* Google Rating */}
          <div className="flex flex-col gap-1.5">
            <p className="text-light-black text-sm md:text-base font-medium">Highly Rated on Google</p>
            <div className="flex items-center gap-3">
              {/* <Image
                alt="Google"
                className="w-6 h-6 md:w-8 md:h-8"
                src={imgImage562}
                width={32}
                height={32}
              />
              <Image
                alt="5 stars"
                className="w-[120px] md:w-[150px] h-[24px] md:h-[30px]"
                src={imgFrame6}
                width={150}
                height={30}
              /> */}
            </div>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col gap-6 md:gap-8 mt-2 md:mt-4">
            <div className="flex flex-col gap-3 md:gap-4 max-w-full lg:w-[431px]">
              <h1 className="text-custom-3xl md:text-custom-4xl lg:text-5xl leading-120 font-semibold">
                <span className="text-green">Upholstery Services </span>
                <span className="text-light-black">Trusted Across Singapore</span>
              </h1>
              <p className="text-grey text-sm md:text-base leading-160 max-w-full lg:w-[429px]">
                Complete upholstery solutions for homes and businesses sofas, cushions, built ins, headboards, and more.
              </p>
            </div>

            {/* WhatsApp Button */}
            <button className="flex items-center justify-center gap-2.5 px-6 md:px-7 py-2.5 md:py-3 bg-green rounded-full hover:opacity-90 transition-opacity w-fit">
              {/* <Image
                alt="WhatsApp"
                className="w-5 h-5 md:w-6 md:h-6"
                src={imgLogosWhatsappIcon}
                width={24}
                height={24}
              /> */}
              <span className="text-light-white text-sm md:text-base font-semibold">WhatsApp Us Now</span>
            </button>
          </div>
        </div>

        {/* Decorative Arrow - Hidden on mobile */}
        <div className="hidden lg:block absolute left-[403px] top-[535px] w-[194.325px] h-[189.318px] -scale-y-100 rotate-[142.76deg]">
          {/* <Image
            alt=""
            className="w-[150px] h-[123.785px]"
            src={imgVector2}
            width={150}
            height={124}
          /> */}
        </div>

        {/* Star Decoration - Hidden on mobile */}
        {/* <Image
          alt=""
          className="hidden lg:block absolute w-[62px] h-[62px] left-[618px] top-[201px]"
          src={imgGroup2085662856}
          width={62}
          height={62}
        /> */}

        {/* Before & After Images - Responsive layout */}
        <div className="relative lg:absolute lg:left-[802px] lg:top-[103px] mt-12 lg:mt-0 flex flex-col md:flex-row lg:flex-col gap-6 md:gap-8 lg:gap-0 items-center lg:items-start">
          {/* Before Image */}
          <div className="relative lg:absolute lg:-rotate-15 w-full max-w-[320px] md:max-w-[280px] lg:max-w-none">
            <div className="w-full lg:w-[373px] h-[220px] lg:h-[251px] bg-fade-grey border-2 lg:border-[3.249px] border-light-white rounded-lg lg:rounded-none" />
            <p className="absolute right-4 lg:left-[270px] top-3 lg:top-[15px] text-light-black text-lg lg:text-xl font-semibold">Before &</p>
            {/* <Image
              alt="Before upholstery"
              className="absolute left-4 lg:left-[50px] top-12 lg:top-[65px] w-[calc(100%-2rem)] lg:w-[322.29px] h-[160px] lg:h-[229.963px] object-cover rounded-md lg:rounded-none"
              src={imgAttachment41}
              width={322}
              height={230}
            /> */}
          </div>

          {/* After Image */}
          <div className="relative lg:absolute lg:top-[271px] lg:-rotate-15 w-full max-w-[320px] md:max-w-[280px] lg:max-w-none">
            <div className="w-full lg:w-[373px] h-[220px] lg:h-[251px] bg-fade-grey border-2 lg:border-[3.249px] border-light-white rounded-lg lg:rounded-none" />
            <p className="absolute right-4 lg:left-[299px] top-3 lg:top-[12px] text-light-black text-lg lg:text-xl font-semibold">After</p>
            {/* <Image
              alt="After upholstery"
              className="absolute left-4 lg:left-[50px] top-12 lg:top-[72px] w-[calc(100%-2rem)] lg:w-[306px] h-[160px] lg:h-[226px] object-cover rounded-md lg:rounded-none lg:-scale-y-100 lg:rotate-180"
              src={imgAttachment52}
              width={306}
              height={226}
            /> */}
          </div>
        </div>

        {/* Bottom Right Decoration - Hidden on mobile/tablet */}
        {/* <Image
          alt=""
          className="hidden xl:block absolute w-[127px] h-[127px] right-[100px] lg:left-[1154px] bottom-[100px] lg:top-[558px]"
          src={imgImage572}
          width={127}
          height={127}
        /> */}
      </div>
    </section>
  )
}

export default Hero
